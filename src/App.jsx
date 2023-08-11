import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./layout/layout";
import { Home, Pitch, Portfolio, ErrorPage } from "./pages";
import { Loader } from "./components";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/personal-elevator-pitch",
          element: (
            <Suspense fallback={<Loader />}>
              <Pitch />
            </Suspense>
          ),
        },
        {
          path: "/portfolio",
          element: (
            <Suspense fallback={<Loader />}>
              <Portfolio />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
