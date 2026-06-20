// src/routes/__root.tsx
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { Header } from '../components/layout/Header'
import { NotFoundPage } from '../components/layout/NotFoundPage'
import { PwaBootstrap } from '../components/layout/PwaBootstrap'
import { AppUpdateReset } from '../components/pwa/AppUpdateReset'
import { I18nProvider } from '../lib/i18n'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  notFoundComponent: RootNotFoundPage,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { title: 'Marwardi Bhatti Jamaat Pakistan | Member & Programs Portal' },
      {
        name: 'description',
        content:
          'Marwardi Bhatti Jamaat Pakistan membership registration, admin approval, QR verification, digital ID card and member-verified education, health, welfare and employment support platform.',
      },
      { name: 'theme-color', content: '#7f1734' },
      { name: 'application-name', content: 'MBJP' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'MBJP' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'msapplication-TileColor', content: '#7f1734' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        property: 'og:title',
        content: 'Marwardi Bhatti Jamaat Pakistan Member & Programs Portal',
      },
      {
        property: 'og:description',
        content:
          'Register, verify and access Marwardi Bhatti Jamaat Pakistan digital membership, education, health, welfare and employment support programs.',
      },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  const isPublicVerifyPage = pathname.startsWith('/verify/')
  const isCardPreviewPage =
    pathname === '/card' ||
    pathname.includes('/admin/members/') ||
    pathname.endsWith('/card')

  return (
    <RootDocument>
      <div className="min-h-screen bg-[linear-gradient(180deg,#fff8f5_0%,#f7efe6_55%,#fbf5ef_100%)] text-stone-950">
        <div
          className="animate-fade-in pointer-events-none fixed inset-x-0 top-0 z-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,rgba(214,36,96,0.16),transparent_40%),radial-gradient(circle_at_top_right,rgba(15,138,95,0.12),transparent_35%)]"
          aria-hidden="true"
        />

        <PwaBootstrap />
        <AppUpdateReset />
        {!isPublicVerifyPage ? <Header compact={isCardPreviewPage} /> : null}

        <div className="animate-fade-up relative z-10">
          <Outlet />
        </div>
      </div>
    </RootDocument>
  )
}

function RootNotFoundPage() {
  return (
    <RootDocument>
      <NotFoundPage />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-emerald-900 focus:shadow-lg"
        >
          Skip to main content
        </a>

        <div id="main-content">
          <I18nProvider>{children}</I18nProvider>
        </div>

        <Scripts />
      </body>
    </html>
  )
}
