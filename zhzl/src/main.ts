import { createApp } from 'vue'
import {createPinia} from "pinia"
import './style.css'
import App from './App.vue'
import router from './router.js'

import "normalize.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'



const pinia = createPinia()

let Vue = createApp(App);

Vue.use(router)
Vue.use(pinia)
Vue.mount('#app')

