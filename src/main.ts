import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from './axios/index'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.mount('#app')

