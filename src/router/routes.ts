import {RouteRecordRaw} from 'vue-router';
import Home from "*.vue";

// TODO: merge this with APP_TABS
const routes: RouteRecordRaw[] = [{
        path: "/home",
        alias: ["/", "/index"],
        name: "Home",
        component: Home // eager
    },
    {
        path: "/transfers",
        name: "Transfers",
        component: () => import("@/views/TransfersTab.vue") // lazy
    },
    {
        path: "/recipients",
        name: "Recipients",
        component: () => import("@/views/RecipientsTab.vue") // lazy
    },
    // {
    //     path: "/about",
    //     name: "About",
    //     component: () => import("@/views/About.vue") // lazy
    // },
    // {
    //     path: "/settings",
    //     name: "Settings",
    //     component: () => import("@/views/Settings.vue") // lazy
    // },
];

export default routes;
