import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-lvh grid-rows-[1fr_minmax(900px,1fr)_1fr]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
