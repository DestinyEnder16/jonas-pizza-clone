import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../ui/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
