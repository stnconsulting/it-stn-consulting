// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import de votre fichier router/index.ts
import { createPinia } from 'pinia'

const app = createApp(App)
// 1. Toujours enregistrer Pinia EN PREMIER
const pinia = createPinia()
app.use(pinia)
app.use(router) // <-- Indispensable pour enregistrer <RouterView> et <RouterLink>
app.mount('#app')