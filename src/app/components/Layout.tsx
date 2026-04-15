import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace("#", ""));
      const timer = window.setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 40);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
