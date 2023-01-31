/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/index";

createApp(App).use(router).mount("#toko-online");

// import './bootstrap';
// import { createApp } from 'vue';
// const app = createApp({});

// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);

// app.mount('#toko-online');
