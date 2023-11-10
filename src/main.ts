import {createApp} from 'vue'
import './index.css'


// @ts-ignore
import router from "./router/index.js"


// @ts-ignore
import App from './App.vue'


import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'


createApp(App).use(VueGoodTablePlugin).use(router).mount('#app')
