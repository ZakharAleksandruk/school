import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";

const router = createBrowserRouter([
    {
        path: "/school/",
        element: <Home />,
    },
    {
        path: "/school/history",
        element: <History />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
