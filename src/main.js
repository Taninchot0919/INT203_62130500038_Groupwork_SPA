import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NavBar from './components/NavBar.vue'

// Use NavBar as Global Registration
createApp(App).use(router).component('nav-bar', NavBar).mount('#app')
