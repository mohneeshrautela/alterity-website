import React, { Suspense, lazy } from 'react'
import { matchPath } from 'react-router-dom'

// Preloadable lazy component.
// - `.preload()` runs the dynamic import once, caches the module, and resolves when ready.
// - Once loaded, the component renders synchronously (no Suspense fallback), so
//   renderToString and hydration produce the full markup.
// - Before loading, it falls back to React.lazy inside Suspense (client-side navigation).
export function lazyRoute(loader) {
  let loaded = null
  let pending = null

  const load = () => {
    if (!pending) {
      pending = loader().then((mod) => {
        loaded = mod
        return mod
      })
    }
    return pending
  }

  const LazyComponent = lazy(load)

  function RouteComponent(props) {
    if (loaded) {
      const Component = loaded.default
      return <Component {...props} />
    }
    return (
      <Suspense fallback={null}>
        <LazyComponent {...props} />
      </Suspense>
    )
  }

  RouteComponent.preload = load
  return RouteComponent
}

export const HomePage = lazyRoute(() => import('./pages/HomePage'))
export const ProductPage = lazyRoute(() => import('./pages/ProductPage'))
export const PricingPage = lazyRoute(() => import('./components/PricingPage/PricingPage'))
export const WhyUsPage = lazyRoute(() => import('./components/WhyUsPage/WhyUsPage'))
export const PrivacyPage = lazyRoute(() => import('./components/PrivacyPage/PrivacyPage'))
export const TermsPage = lazyRoute(() => import('./components/TermsPage/TermsPage'))
export const ContactPage = lazyRoute(() => import('./pages/ContactPage'))
export const CalculatorPage = lazyRoute(() => import('./components/CalculatorPage/CalculatorPage'))
export const PricingComparisonPage = lazyRoute(() => import('./components/PricingComparisonPage/PricingComparisonPage'))
export const IVRPage = lazyRoute(() => import('./pages/IVRPage'))
export const LanguagesPage = lazyRoute(() => import('./pages/LanguagesPage'))
export const UseCasesIndex = lazyRoute(() => import('./components/IndustryPage/UseCasesIndex'))
export const IndustryPage = lazyRoute(() => import('./components/IndustryPage/IndustryPage'))
export const BlogIndexPage = lazyRoute(() => import('./pages/blog/BlogIndexPage'))
export const BlogPostPage = lazyRoute(() => import('./pages/blog/BlogPostPage'))
export const ComparePage = lazyRoute(() => import('./pages/prose/ComparePage'))

// Route patterns, mirroring the <Route> paths in src/App.jsx.
const ROUTE_TABLE = [
  { path: '/', component: HomePage },
  { path: '/product', component: ProductPage },
  { path: '/pricing', component: PricingPage },
  { path: '/why-us', component: WhyUsPage },
  { path: '/privacy', component: PrivacyPage },
  { path: '/terms', component: TermsPage },
  { path: '/contact', component: ContactPage },
  { path: '/calculator', component: CalculatorPage },
  { path: '/pricing-comparison', component: PricingComparisonPage },
  { path: '/ivr', component: IVRPage },
  { path: '/languages', component: LanguagesPage },
  { path: '/use-cases', component: UseCasesIndex },
  { path: '/use-cases/:slug', component: IndustryPage },
  { path: '/blog', component: BlogIndexPage },
  { path: '/blog/:slug', component: BlogPostPage },
  { path: '/compare/:slug', component: ComparePage },
]

// Preloads the page component that matches a URL (query string and hash are ignored).
export function preloadForPath(url) {
  const pathname = String(url || '/').split(/[?#]/)[0] || '/'
  const hit = ROUTE_TABLE.find(({ path }) => matchPath({ path, end: true }, pathname))
  return hit ? hit.component.preload() : Promise.resolve()
}

export function preloadAll() {
  return Promise.all(ROUTE_TABLE.map(({ component }) => component.preload()))
}
