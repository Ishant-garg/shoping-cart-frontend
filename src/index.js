import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./components/Card";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import App from "./App";
import CheckoutForm from "./components/CheckoutForm";
import Success from "./components/Success"; // Import Success component
import Cancel from "./components/Cancel"; // Import Cancel component
import { Provider } from "react-redux";
import store from "./utils/Store";
import { Toaster } from "react-hot-toast";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "/checkout",
        element: <CheckoutForm />,
      },
      {
        path: "/success", // Route for Success page
        element: <Success />,
      },
      {
        path: "/cancel", // Route for Cancel page
        element: <Cancel />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={approuter} />
    <Toaster />
  </Provider>
);
