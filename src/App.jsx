import { createBrowserRouter } from "react-router";
import AppLayout from "./ui/AppLayout";
import { RouterProvider } from "react-router/dom";
import Homepage from "./ui/Homepage";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/Menu";
import ErrorPage from "./ui/ErrorPage";
import Cart from "./features/cart/Cart";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
