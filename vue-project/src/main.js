import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from "@/store/index.js";
import router from "@/router.js";
const vuetify = createVuetify({
 components,
 directives,
 theme: {
  defaultTheme: 'light',
  //
 },
})
 const app = createApp(App)
app.component('fa',FontAwesomeIcon)
app.use(vuetify);
app.use(store);
app.use(router);
app.mount('#app')
