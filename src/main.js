import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import 'bootstrap/dist/js/bootstrap.js'
import i18n from "@/i18n/index.js";

createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
