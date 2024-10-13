import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/Home";
import PokemonDetailsPage, {
  getPokemonDetailsLoader,
} from "./pages/PokemonDetails";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        loader: getPokemonDetailsLoader,
        path: "/pokemon/:id",
        element: <PokemonDetailsPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
