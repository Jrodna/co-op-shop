import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'

loadFonts();

const app = createApp(App)

app.use(vuetify)

app.mount('#app')
