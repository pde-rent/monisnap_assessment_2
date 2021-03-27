import {User} from "./model/entities/User";
import svgLogoFull from './assets/images/branding/logo-full.svg?raw';
import svgLogo from './assets/images/branding/logo.svg?raw';
import {ViewState} from "./model/entities/ViewState";
import HomeTab from "./views/HomeTab.vue";
import TransfersTab from "./views/TransfersTab.vue";
import RecipientsTab from "./views/RecipientsTab.vue";

// TODO: have these inside proper state management
// such as vuex or custom observed singleton
export namespace State {

    export let VIEW: ViewState = ViewState.HOME; // selected tab
    export let USER: User;

}

export namespace Server {

    // raw
    export const DEV_MODE = process.env.NODE_ENV === 'development';
    // export const DEV_MODE = Vue.config.devtools;
    export const STATIC_PORT = process.env.PORT || 3000;
    export const REST_PORT = STATIC_PORT;
    export const WS_PORT = STATIC_PORT;
    export const STATIC_PROTOCOL = "http"; // https if ssl is on
    export const REST_PROTOCOL = "http";
    export const WS_PROTOCOL = "ws"; // wss if ssl is on
    export const STATIC_DOMAIN = DEV_MODE ? `localhost:${STATIC_PORT}/` : "xxx.com/";
    export const REST_DOMAIN = DEV_MODE ? `localhost:${REST_PORT}/assets/data/mock/api/` : "xxx.com/api/";
    export const WS_DOMAIN = DEV_MODE ? `localhost:${WS_PORT}/` : "xxx.com/ws";
    export const STATIC_PREFIX = "";
    export const REST_VERSION = 1;
    export const WS_VERSION = 1;
    // computed
    export const STATIC_ROOT = STATIC_PROTOCOL + "://" + STATIC_DOMAIN + STATIC_PREFIX;
    export const REST_ROOT = REST_PROTOCOL + "://" + REST_DOMAIN + "/v" + REST_VERSION.toString();
    export const WS_ROOT = WS_PROTOCOL + "://" + WS_DOMAIN + "/v" + WS_VERSION.toString();

}

// make sure these variables match their constants.scss counterparts
export namespace Style {

    export const fontTitle = "Space Grotesk";
    export const fontBody = "Nunito";

    export const black = "rgb(0,0,0)";
    export const white = "rgb(254,254,254)";
    export const dark = "rgb(29,29,29)";
    export const darkerGrey = "rgb(42,42,42)";
    export const darkGrey = "rgb(80,80,80)";
    export const grey = "rgb(136,136,136)";
    export const lightGrey = "#c9c9c9"; //"rgb(190,190,190)";
    export const lighterGrey = "#ECECEC"; //"rgb(190,190,190)";
    export const light = "rgb(248,248,248)";
    export const lighter = "rgb(253,253,253)";

    export const active = "#6666FF";
    export const primary = "#6666FF";
    export const secondary = "#39CF71";
    export const accent = "#6666FF";
    export const positive = "#39CF71";
    export const negative = "#eb1e1e";
    export const info = "#39CF71";
    export const warning = "#FEDD56"
}

export namespace Svg {
    export const logoFull = svgLogoFull;
    export const logo = svgLogo;
}

export interface AppTab {
    name: string,
    component: unknown, // DefineComponent<any>?
    route: string,
    state: ViewState
}

// TODO: make sure we match routing
export const APP_TABS: {[state: number]: AppTab} = {
    [ViewState.HOME]: {
        name: "home",
        component: HomeTab,
        route: "/home",
        state: ViewState.HOME
    },
    [ViewState.TRANSFERS]: {
        name: "transfers",
        component: TransfersTab,
        route: "/transfers",
        state: ViewState.TRANSFERS
    },
    [ViewState.RECIPIENTS]: {
        name: "recipients",
        component: RecipientsTab,
        route: "/recipients",
        state: ViewState.RECIPIENTS
    }
};

export const APP_TAB_LIST: string[] = Object.keys(APP_TABS);

// TODO: make sure the file encoding does not break the unicode representation of these
