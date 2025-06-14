/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Button from "primevue/button";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import DataView from "primevue/dataview";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Image from "primevue/image";
import Listbox from "primevue/listbox";
import MegaMenu from "primevue/megamenu";
import Menubar from "primevue/menubar";
import Panel from "primevue/panel";
import Rating from "primevue/rating";
import Skeleton from "primevue/skeleton";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Textarea from "primevue/textarea";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/fluent-light/theme.css";
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
app.use(ToastService);

app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("Button", Button);
app.component("Card", Card);
app.component("Checkbox", Checkbox);
app.component("DataView", DataView);
app.component("Divider", Divider);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("Image", Image);
app.component("Listbox", Listbox);
app.component("Menubar", Menubar);
app.component("MegaMenu", MegaMenu);
app.component("Panel", Panel);
app.component("Rating", Rating);
app.component("Skeleton", Skeleton);
app.component("Splitter", Splitter);
app.component("SplitterPanel", SplitterPanel);
app.component("Textarea", Textarea);
app.component("Toast", Toast);

app.mount("#app");
