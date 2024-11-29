import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as loaderTest } from "./ui/Test";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Shop from "./ui/Shop";
import Form from "./ui/Form";
import Test from "./ui/Test";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/test",
          element: <Test />,
          loader: loaderTest,
        },
      ],
    },
    { future: { v7_startTransition: true } },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
