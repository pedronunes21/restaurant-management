import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "SignIn",
    component: SignIn,
    path: "/sign-in",
  },
  {
    name: "AddRestaurant",
    component: AddRestaurant,
    path: "/add-restaurant",
  },
  {
    name: "UpdateRestaurant",
    component: UpdateRestaurant,
    path: "/update-restaurant/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
