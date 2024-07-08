import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
const app = createApp(App)
app.config.compilerOptions.isCustomElement = tag => tag === 'google-map'

app.use(router)
app.mount('#app')
