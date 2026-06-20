import { useEffect, useMemo, useState } from 'react'
import {
  clearMbjpPwaCache,
  getPwaCacheResetUrl,
  hasPwaCacheResetParam,
} from '../../lib/pwa-cache-reset'

function shouldForceShowReset() {
  if (typeof window === 'undefined') return false

  const url = new URL(window.location.href)
  return url.searchParams.has('show-cache-reset') || url.searchParams.has('debug-pwa')
}

export function AppUpdateReset() {
  const [visible, setVisible] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const resetUrl = useMemo(() => getPwaCacheResetUrl(), [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (hasPwaCacheResetParam()) {
      void clearMbjpPwaCache({ reload: true, reason: 'query-param-reset' })
      return
    }

    if (!shouldForceShowReset()) return

    const timer = window.setTimeout(() => setVisible(true), 600)
    return () => window.clearTimeout(timer)
  }, [])

  async function handleResetClick() {
    setIsResetting(true)
    await clearMbjpPwaCache({ reload: true, reason: 'manual-reset' })
  }

  function handleCloseClick() {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside className="mbjp-app-reset" role="status" aria-live="polite">
      <style>{styles}</style>
      <div className="mbjp-app-reset__content">
        <p className="mbjp-app-reset__eyebrow">App update</p>
        <p className="mbjp-app-reset__text">
          Loading stuck or old version? Reset app cache and reload latest files.
        </p>
      </div>
      <div className="mbjp-app-reset__actions">
        <button
          type="button"
          className="mbjp-app-reset__button mbjp-app-reset__button--primary"
          onClick={handleResetClick}
          disabled={isResetting}
        >
          {isResetting ? 'Resetting…' : 'Reset cache'}
        </button>
        <a className="mbjp-app-reset__button mbjp-app-reset__button--ghost" href={resetUrl}>
          Hard reset link
        </a>
        <button
          type="button"
          className="mbjp-app-reset__close"
          onClick={handleCloseClick}
          aria-label="Hide app reset helper"
        >
          ×
        </button>
      </div>
    </aside>
  )
}

const styles = `
  .mbjp-app-reset {
    position: fixed;
    left: max(0.9rem, env(safe-area-inset-left));
    bottom: max(0.9rem, env(safe-area-inset-bottom));
    z-index: 9998;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.8rem;
    width: min(34rem, calc(100vw - 1.8rem));
    border: 1px solid rgba(176, 138, 62, 0.32);
    border-radius: 1.1rem;
    background: rgba(255, 253, 249, 0.97);
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
    padding: 0.8rem;
    color: #0f172a;
    backdrop-filter: blur(16px);
  }

  .mbjp-app-reset__content {
    min-width: 0;
  }

  .mbjp-app-reset__eyebrow {
    margin: 0;
    color: #1b5e3b;
    font-size: 0.64rem;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .mbjp-app-reset__text {
    margin: 0.2rem 0 0;
    color: #526078;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .mbjp-app-reset__actions {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }

  .mbjp-app-reset__button,
  .mbjp-app-reset__close {
    border-radius: 0.8rem;
    border: 1px solid transparent;
    font: inherit;
    font-size: 0.76rem;
    font-weight: 900;
    line-height: 1;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
  }

  .mbjp-app-reset__button {
    min-height: 2.25rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.45rem 0.75rem;
  }

  .mbjp-app-reset__button:disabled {
    cursor: progress;
    opacity: 0.7;
  }

  .mbjp-app-reset__button--primary {
    background: #1b5e3b;
    color: #ffffff;
  }

  .mbjp-app-reset__button--ghost {
    background: #ffffff;
    border-color: #e5e7eb;
    color: #334155;
  }

  .mbjp-app-reset__close {
    width: 2.1rem;
    height: 2.1rem;
    background: #fff7ed;
    color: #9a3412;
    font-size: 1.1rem;
  }

  @media (max-width: 640px) {
    .mbjp-app-reset {
      grid-template-columns: 1fr;
      right: max(0.9rem, env(safe-area-inset-right));
      width: auto;
    }

    .mbjp-app-reset__actions {
      justify-content: flex-end;
      flex-wrap: wrap;
    }
  }
`
