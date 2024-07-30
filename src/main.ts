import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import filters from './filter'


const app = createApp(App);

app.use(filters);

app.mount('#app');