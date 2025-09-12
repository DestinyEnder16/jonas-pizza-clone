import { createBrowserRouter } from "react-router";
import AppLayout from "./ui/AppLayout";
import { RouterProvider } from "react-router/dom";
import Homepage from "./ui/Homepage";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/Menu";
import ErrorPage from "./ui/ErrorPage";
import Cart from "./features/cart/Cart";
import Order from "./features/order/order";
import Final from "./features/order/Final";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/complete",
        element: <Final />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
