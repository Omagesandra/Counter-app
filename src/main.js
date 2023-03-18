import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/router'
import store from './Store/store.js'

const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
