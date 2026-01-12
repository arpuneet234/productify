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
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Puneet Arora",
    email: "arorapuneet234@gmail.com",
  });
  return (
    <Provider store={store}>
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
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
