import { createBrowserRouter } from "react-router";
import AppLayout from "./ui/AppLayout";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // children: [{ path: "contact", element: <p>Hey there</p> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
