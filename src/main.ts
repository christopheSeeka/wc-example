//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueYtframe from "vue3-ytframe"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueYtframe)
app.use(router)


app.mount('#app')
