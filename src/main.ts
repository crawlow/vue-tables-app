import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from './store'

const app = createApp(App);

import registerComponents from "@/register-components"
import ElementPlus from 'element-plus'
import "element-plus/theme-chalk/index.css"
registerComponents(app);
import Tabs from 'vue3-tabs';
app.use(ElementPlus)
app.use(router);
app.use(Tabs);
app.use(store)
app.mount("#app");
