import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import VehicleInfo from "../../pages/VehicleInfo.vue";
// import SideBar from "../components/SideBar.vue";


const routes = [
    {
        path: "/",
        component: Dashboard,
    },
    {
        path:"/vehicle",
        name:"Vehicle",
        component: VehicleInfo
    },






];

const router = createRouter(
    { history: createWebHistory(),
        routes
    });

router.beforeEach((to, from, next) => {
    // console.log(to);
    next();

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

export default router