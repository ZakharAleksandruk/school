import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Info from "./components/info/info.jsx";
import { data } from "./data/data.js";
import History from "./pages/History";

const router = createBrowserRouter([
    {
        path: "/school/",
        element: <Home />,
    },
    {
        path: "/school/info/general-info",
        element: (
            <Info
                title={data.generalInfo.title}
                paragraphs={data.generalInfo.paragraphs}
            />
        ),
    },
    {
        path: "/school/info/history",
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
