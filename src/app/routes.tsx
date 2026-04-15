import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Offer } from "./pages/Offer";
import { Charter } from "./pages/Charter";
import { Results } from "./pages/Results";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "offer", Component: Offer },
      { path: "charter", Component: Charter },
      { path: "results", Component: Results },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
