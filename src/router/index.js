import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import VehicleInfo from "../views/user/VehicleInfo.vue";
import UserInfo from "../views/user/UserInfo.vue";
import OtherInfo from "../views/user/OtherInfo.vue"
import Repair from "../views/user/Repair.vue"
import Expenses from "../views/user/Expenses.vue";
import Punishment from "../views/user/Punishment.vue";
import CarManagement from "../views/admin /vehicle management/CarManagement.vue";
import Payfine from "../views/admin /pay fine/ Payfine.vue";
import NewPunishment from "../views/admin /pay fine/NewPunishment.vue"
import  CriminalOrder from "../views/admin /pay fine/CriminalOrder.vue"
import PeriodicMaintenance from "../views/admin /maintenance/Periodicmaintenance.vue"
import  NewTransaction from "../views/admin /maintenance/NewTransaction.vue"

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
            {
                path: "/newpunishment",
                name:"NewPunishment",
                component: NewPunishment
            },
            {
                path: "/criminal",
                name:"CriminalOrder",
                component: CriminalOrder
            },
            {
                path: "/periodic",
                name:"PeriodicMaintenance",
                component: PeriodicMaintenance
            },
            {
                path: "/transaction",
                name:"NewTransaction",
                component: NewTransaction
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