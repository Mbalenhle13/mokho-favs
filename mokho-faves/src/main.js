/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Image from "primevue/image";
import MegaMenu from "primevue/megamenu";
import Panel from "primevue/panel";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Textarea from "primevue/textarea";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "/node_modules/primeflex/primeflex.css";

import router from "./router";

import "./assets/styles/layout.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component("Button", Button);
app.component("Card", Card);
app.component("InputText", InputText);
app.component("Image", Image);
app.component("MegaMenu", MegaMenu);
app.component("Panel", Panel);
app.component("Splitter", Splitter);
app.component("SplitterPanel", SplitterPanel);
app.component("Textarea", Textarea);

app.mount("#app");
