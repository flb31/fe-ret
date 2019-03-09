import {
    Home,
    NotFound,
} from "./pages";

export default [
    {
        id: 1,
        path: "/",
        component: Home,
        exact: true,
    },
    {
        id: 2,
        component: NotFound,
    },
];
