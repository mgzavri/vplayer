import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

createApp(App).use(store).mount('#app')
