import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './interceptors/axios'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

window.Swal = VueSweetalert2

const app = createApp(App)
app.use(VueSweetalert2);
app.use(createPinia())
app.use(router)

app.mount('#app')
