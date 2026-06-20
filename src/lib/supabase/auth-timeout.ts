import type { Session, User } from '@supabase/supabase-js'
import { supabase } from './client'

export const DEFAULT_AUTH_TIMEOUT_MS = 8000
export const DEFAULT_QUERY_TIMEOUT_MS = 12000

export class SupabaseRequestTimeoutError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SupabaseRequestTimeoutError'
  }
}

export function isSupabaseTimeoutError(error: unknown) {
  return error instanceof SupabaseRequestTimeoutError
}

export async function withSupabaseTimeout<T>(
  promise: PromiseLike<T>,
  timeoutMs = DEFAULT_QUERY_TIMEOUT_MS,
  message = 'Supabase request timed out. Please check your internet connection and try again.',
): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  try {
    return await Promise.race([
      Promise.resolve(promise),
      new Promise<T>((_resolve, reject) => {
        timeoutId = setTimeout(() => {
          reject(new SupabaseRequestTimeoutError(message))
        }, timeoutMs)
      }),
    ])
  } finally {
    if (timeoutId) clearTimeout(timeoutId)
  }
}

export async function getSessionUserFast(timeoutMs = 3500): Promise<{
  user: User | null
  session: Session | null
  error: Error | null
  timedOut: boolean
}> {
  try {
    const { data, error } = await withSupabaseTimeout(
      supabase.auth.getSession(),
      timeoutMs,
      'Session check timed out.',
    )

    return {
      user: data.session?.user ?? null,
      session: data.session ?? null,
      error: error ?? null,
      timedOut: false,
    }
  } catch (error) {
    return {
      user: null,
      session: null,
      error: error instanceof Error ? error : new Error('Session check failed.'),
      timedOut: isSupabaseTimeoutError(error),
    }
  }
}

export async function getCurrentUserWithFallback(timeoutMs = DEFAULT_AUTH_TIMEOUT_MS): Promise<{
  user: User | null
  session: Session | null
  error: Error | null
  timedOut: boolean
}> {
  const sessionResult = await getSessionUserFast(Math.min(3500, timeoutMs))

  if (!sessionResult.user) {
    return sessionResult
  }

  try {
    const { data, error } = await withSupabaseTimeout(
      supabase.auth.getUser(),
      timeoutMs,
      'User session validation timed out.',
    )

    return {
      user: data.user ?? sessionResult.user,
      session: sessionResult.session,
      error: error ?? null,
      timedOut: false,
    }
  } catch (error) {
    if (isSupabaseTimeoutError(error)) {
      return {
        user: sessionResult.user,
        session: sessionResult.session,
        error: null,
        timedOut: true,
      }
    }

    return {
      user: sessionResult.user,
      session: sessionResult.session,
      error: error instanceof Error ? error : new Error('User session check failed.'),
      timedOut: false,
    }
  }
}

export function toSupabaseTimeoutMessage(error: unknown, fallback: string) {
  if (isSupabaseTimeoutError(error)) {
    return 'Request timed out. Please check internet connection, reset app cache once, then try again.'
  }

  return error instanceof Error ? error.message : fallback
}
