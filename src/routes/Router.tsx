import React, { lazy } from "react";
import {Route, Routes as ReactRoutes} from 'react-router-dom';
import {wait} from "@utils/share.utils";

export enum AppRouter {
    HOME = '/home',
    ABOUT = '/about'
}

const Home = lazy(() => wait(1000).then(() => import("../views/Home")));
const About = lazy(() => wait(1000).then(() => import("../views/About")));

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path={AppRouter.HOME} element={<Home/>}/>
            <Route path={AppRouter.ABOUT} element={<About/>}/>
        </ReactRoutes>
    );
}

export default Routes;