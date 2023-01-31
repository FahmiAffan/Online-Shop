import {createRouter, createWebHistory } from "vue-router";
import Home from "../js/components/Home.vue";
import About from "../js/components/About.vue";

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
