import { createBrowserRouter } from "react-router";
import AppLayout from "./ui/AppLayout";
import { RouterProvider } from "react-router/dom";
import Homepage from "./ui/Homepage";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/Menu";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/menu", element: <Menu />, loader: menuLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
