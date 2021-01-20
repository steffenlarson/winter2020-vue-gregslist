import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// REVIEW is the main an umbrella over the app.vue? Mount welds things onto other things.
