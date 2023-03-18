import { createRouter, createWebHistory } from "vue-router";
import CounterApp from "../components/CounterApp";
import HomePage from "../components/HomePage";
import NotFound from "../components/NotFound";
import AboutPage from "../components/AboutPage";

const routes = [
  {
    path: "/counter",
    name: "CounterApp",
    component: CounterApp,
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
