import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./Route-Tree.js";
import DashboardPage from "../pages/Dashboardpage.jsx"; 
import { checkAuth } from "../utils/helper.js";

export const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashboardPage,
    beforeLoad: checkAuth
})
