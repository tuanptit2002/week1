import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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
app.mount('#app')
