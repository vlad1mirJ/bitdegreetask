import { createApp } from "vue"
import App from "./App.vue"
import VueApexCharts from "vue3-apexcharts"

import "./assets/main.css"

const app = createApp(App)
app.use(VueApexCharts)
app.mount("#app")
