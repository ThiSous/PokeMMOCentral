import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // importando o router
import './assets/base.css'

const app = createApp(App)

app.use(router) // registra o router no app
app.mount('#app')
