import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./Route-Tree"
import AboutPage from "../pages/AboutPage"

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage
})