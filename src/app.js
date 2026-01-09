import React, { lazy, Suspense, useState } from "react";
import "./index.css";
import UserContext from "./utils/UserContext";

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Profile from "./components/Profile";
import Conctact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Puneet Arora",
    email: "arorapuneet234@gmail.com",
  });
  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Conctact />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
