import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b0527d54 = () => interopDefault(import('../pages/arrendador/index.vue' /* webpackChunkName: "pages/arrendador/index" */))
const _7264316e = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _59c9fafc = () => interopDefault(import('../pages/perfil/index.vue' /* webpackChunkName: "pages/perfil/index" */))
const _3e10d006 = () => interopDefault(import('../pages/perfil/propiedad/_id/index.vue' /* webpackChunkName: "pages/perfil/propiedad/_id/index" */))
const _7f3152f4 = () => interopDefault(import('../pages/datos/_id/index.vue' /* webpackChunkName: "pages/datos/_id/index" */))
const _000ee1f6 = () => interopDefault(import('../pages/property/_id/index.vue' /* webpackChunkName: "pages/property/_id/index" */))
const _1b0b4a2f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/arrendador",
      component: _2f0227e2,
      name: "arrendador"
    }, {
      path: "/login",
      component: _bd30cd86,
      name: "login"
    }, {
      path: "/perfil",
      component: _59c9fafc,
      name: "perfil"
    }, {
      path: "/perfil/propiedad/:id?",
      component: _3e10d006,
      name: "perfil-propiedad-id"
    }, {
      path: "/datos/:id?",
      component: _722eee7a,
      name: "datos-id"
    }, {
      path: "/property/:id?",
      component: _69fad582,
      name: "property-id"
    }, {
      path: "/",
      component: _e102f9ba,
      name: "index"
    }],

    fallback: false
  })
}
