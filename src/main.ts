import {createApp} from 'vue'
import './index.css'


// @ts-ignore
import router from "./router/index.js"


// @ts-ignore
import App from './App.vue'


createApp(App).use(router).mount('#app')
