import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";
import NewProductCard from "./components/NewProductCard.jsx";
import NewProduct from "./components/NewProduct.jsx";
// import { createreactrouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <NewProductCard />,
        loader: () => {
          const result = axios
            .get("https://fakestoreapi.com/products")
            .then((res) => res.data);
          return result;
        },
      },
      {
        path: "/products/:id",
        element: <NewProduct />,
        loader: ({ params }) => {
          const result = axios
            .get(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => res.data);
          return result;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
