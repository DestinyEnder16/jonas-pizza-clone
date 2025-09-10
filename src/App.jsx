import { createBrowserRouter } from "react-router";
import AppLayout from "./ui/AppLayout";
import { RouterProvider } from "react-router/dom";
import Homepage from "./ui/Homepage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/menu", element: <p>Hello World</p> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
