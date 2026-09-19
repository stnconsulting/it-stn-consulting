import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'STN ENTERPRISES GmbH – Softwareentwicklung, die begeistert',
    },
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import('@/views/ImpressumView.vue'),
    meta: {
      title: 'Impressum – STN ENTERPRISES GmbH',
    },
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: () => import('@/views/DatenschutzView.vue'),
    meta: {
      title: 'Datenschutz – STN ENTERPRISES GmbH',
    },
  },
  {
    path: '/agb',
    name: 'agb',
    component: () => import('@/views/AgbView.vue'),
    meta: {
      title: 'AGB – STN ENTERPRISES GmbH',
    },
  },
  {
    path: '/leistungen',
    name: 'leistungen',
    component: () => import('@/views/LeistungenView.vue'),
    meta: {
      title: 'Leistungen – STN ENTERPRISES GmbH',
    },
  },
  {
    path: '/projekte',
    name: 'projekte',
    component: () => import('@/views/ProjekteView.vue'),
    meta: {
      title: 'Projekte – STN ENTERPRISES GmbH',
    },
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import('@/views/KontaktView.vue'),
    meta: {
      title: 'Kontakt – STN ENTERPRISES GmbH',
    },
  },
  {
    path: '/ueber-uns',
    name: 'ueber-uns',
    component: () => import('@/views/AboutUsView.vue'),
    meta: {
      title: 'Über uns – STN ENTERPRISES GmbH',
    },
  },
  {
    // Catch-all pour rediriger les routes inconnues vers l'accueil
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // Gestion du scroll vers les ancres (ex: #contact, #services)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

// Mise à jour dynamique du titre de la page
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
