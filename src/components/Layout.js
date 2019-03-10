import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";

const Layout = () => { // eslint-disable-line arrow-body-style
    return (
        <Switch>
            { routes.map( route => <Route key={ route.id } { ...route } /> ) }
        </Switch>
    );
};

export default Layout;
