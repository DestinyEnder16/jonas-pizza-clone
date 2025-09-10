import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div>
      <div className="">
        <Outlet />
        <p>HELLO WORLD!!</p>
      </div>
    </div>
  );
}

export default AppLayout;
