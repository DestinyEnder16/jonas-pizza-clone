import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <p>loading</p>}
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
