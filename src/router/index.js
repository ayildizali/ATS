import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import VehicleInfo from "../views/VehicleInfo.vue";
import UserInfo from "../views/UserInfo.vue";
import OtherInfo from "../views/OtherInfo.vue"
import Repair from "../views/Repair.vue"
import Expenses from "../views/Expenses.vue";
import Punishment from "../views/Punishment.vue";
import CarManagement from "../views/CarManagement.vue";
import Payfine from "../views/ Payfine.vue";

const routes = [
    {
        path: "/",
        component: () => import('../../layouts/default.vue'),
        children: [
            {
                path: "/",
                component: Dashboard,
            },
            {
                path:"/vehicle",
                name:"Vehicle",
                component: VehicleInfo
            },
            {
                path:"/userinfo",
                name:"UserInfo",
                component: UserInfo
            },
            {
                path:"/otherinfo",
                name:"OtherInfo",
                component: OtherInfo
            },
            {
                path: "/repair",
                name: "Repair",
                component: Repair
            },
            {
                path: "/expenses",
                name:"Expenses",
                component: Expenses
            },
            {
                path: "/punishment",
                name:"Punishment",
                component: Punishment
            },
            {
                path: "/management",
                name:"CarManagementx",
                component: CarManagement
            },
            {
                path: "/payfine",
                name:"Payfine",
                component: Payfine
            },

        ]
    }

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