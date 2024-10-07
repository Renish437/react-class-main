import React from "react";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import RootLayout from "./Components/RootLayout";
import Services from "./pages/Services";
import CategoryItems from "./pages/CategoryItems";
import ItemDetail from "./pages/ItemDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "category-items/:category",
          element: <CategoryItems />,
        },
        {
          path: "details/:id",
          element: <ItemDetail />,
        },
        {
          path: "/about-page",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
