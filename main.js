import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useCardStore } from "./stores/card";

pinia.useStore(useCardStore);
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");