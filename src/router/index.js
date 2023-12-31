import {createRouter, createWebHistory} from "vue-router";
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
import CriminalOrder from "../views/admin /pay fine/CriminalOrder.vue"
import PeriodicMaintenance from "../views/admin /maintenance/Periodicmaintenance.vue"
import NewTransaction from "../views/admin /maintenance/NewTransaction.vue"
import EditPeriod from "../views/admin /maintenance/EditPeriod.vue"
import OtherExpenses from "../views/admin /expenses/OtherExpenses.vue"
import NewTransactionSpend from "../views/admin /expenses/NewTransactionSpend.vue"
import EditSpending from "../views/admin /expenses/EditSpending.vue"
import UserMainManeg from "../views/admin /user management/UserMainManeg.vue"
import NewUser from "../views/admin /user management/NewUser.vue"
import EditUserManag from "../views/admin /user management/EditUserManag.vue"
import NewCarManag from "../views/admin /vehicle management/NewCarManag.vue"
import NewCarTwo from "../views/admin /vehicle management/NewCarTwo.vue";
import NewCarThree from "../views/admin /vehicle management/NewCarThree.vue";
import inputag from "../components/custom/input.tag.vue"
import VehicleSold from "../views/admin /vehicle management/VehicleSold.vue";
import UserLogin from "../views/user/UserLogin.vue"
import EditVehicleManeg from "../views/admin /vehicle management/EditVehicleManeg.vue";
import PopupModal from "../components/PopupModal.vue";
import data from "../views/user/data.vue"


const routes = [
    {
        path: "/login",
        name: "UserLogin",
        component: UserLogin
    },
    {

        path: "/",
        component: () => import('../../layouts/default.vue'),
        children: [
            {
                path: "/",
                component: Dashboard,
            },
            {
                path: "/vehicle",
                name: "Vehicle",
                component: VehicleInfo
            },
            {
                path: "/userinfo",
                name: "UserInfo",
                component: UserInfo
            },
            {
                path: "/otherinfo",
                name: "OtherInfo",
                component: OtherInfo
            },
            {
                path: "/repair",
                name: "Repair",
                component: Repair
            },
            {
                path: "/expenses",
                name: "Expenses",
                component: Expenses
            },
            {
                path: "/punishment",
                name: "Punishment",
                component: Punishment
            },
            {
                path: "/management",
                name: "CarManagementx",
                component: CarManagement
            },
            {
                path: "/payfine",
                name: "Payfine",
                component: Payfine
            },
            {
                path: "/newpunishment",
                name: "NewPunishment",
                component: NewPunishment
            },
            {
                path: "/criminal",
                name: "CriminalOrder",
                component: CriminalOrder
            },
            {
                path: "/periodic",
                name: "PeriodicMaintenance",
                component: PeriodicMaintenance
            },
            {
                path: "/transaction",
                name: "NewTransaction",
                component: NewTransaction
            },
            {
                path: "/editperiod",
                name: "EditPeriod",
                component: EditPeriod
            },
            {
                path: "/otherexpenses",
                name: "OtherExpenses",
                component: OtherExpenses
            },
            {
                path: "/spend",
                name: "NewTransactionSpend",
                component: NewTransactionSpend
            },
            {
                path: "/editspending",
                name: "EditSpending",
                component: EditSpending
            },
            {
                path: "/usermain",
                name: "UserMainManeg",
                component: UserMainManeg
            },
            {
                path: "/newuser",
                name: "NewUser",
                component: NewUser
            },
            {
                path: "/editusermanag",
                name: "EditUserManag",
                component: EditUserManag
            },
            {
                path: "/newcar",
                name: "NewCarManag",
                component: NewCarManag
            },
            {
                path: "/newcartwo",
                name: "NewCarTwo",
                component: NewCarTwo
            },
            {
                path: "/newcarthree",
                name: "NewCarThree",
                component: NewCarThree
            },
            {
                path: "/input",
                name: "input.tag",
                component: inputag
            },
            {
                path: "/vehiclesold",
                name: "VehicleSold",
                component: VehicleSold
            },
            {
                path: "/editvahiclemaneg",
                name: " EditVehicleManeg",
                component: EditVehicleManeg
            },
            {
                path: "popup",
                name: "PopupModal",
                component: PopupModal
            },
            {
                path: "data",
                name: "data",
                component: data
            }

        ]

    }

];

const router = createRouter(
    {
        history: createWebHistory(),
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