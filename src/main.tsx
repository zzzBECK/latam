import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/index.tsx";
import Comprar from "./pages/Comprar/index.tsx";
import Notificacoes from "./pages/Notificacoes/index.tsx";
import Viagens from "./pages/Viagens/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comprar",
        element: <Comprar />,
      },
      {
        path: "/Notificacoes",
        element: <Notificacoes />,
      },
      {
        path: "/Viagens",
        element: <Viagens/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
