import { createRoute } from "@tanstack/react-router";
import { homepageRoute } from "./Homepage.js";
import { authRoute } from "./Auth-Route.js";
import { dashboardRoute } from "./Dashboard.js";
import { aboutRoute } from "./About.js";
import RootLayout from "../RootLayout.jsx";

export const rootRoute = createRoute({
    component: RootLayout
  
})

export const routeTree = rootRoute.addChildren([
    homepageRoute,
    authRoute,
    dashboardRoute,
    aboutRoute,
])
