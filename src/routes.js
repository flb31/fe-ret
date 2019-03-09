import {
    Home,
    NotFound,
} from "./pages";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        component: NotFound,
    },
];
