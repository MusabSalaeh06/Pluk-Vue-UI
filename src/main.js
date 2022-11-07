import { createApp } from 'vue'
import App from './App.vue'
import Auth from './Auth.vue'
import router from './router'
import './index.css'

createApp(App).use(router).mount('#app')
createApp(Auth).use(router).mount('#auth')

