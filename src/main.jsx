import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Info from "./components/info/info.jsx";
import { data } from "./data/data.js";

const generatePaths = () => {
    const paths = [
        { path: "/school/info/general-info", data: data.generalInfo },
        { path: "/school/info/history", data: data.history },
        { path: "/school/info/structure", data: data.structure },
        { path: "/school/info/personnel", data: data.personnel },
        { path: "/school/info/provision", data: data.provision },
        {
            path: "/school/info/conditions-for-people-with-disabilities",
            data: data.conditionsForPeopleWithDisabilities,
        },
    ].map((el) => {
        return {
            path: el.path,
            element: (
                <Info title={el.data.title} paragraphs={el.data.paragraphs} />
            ),
        };
    });

    paths.unshift({
        path: "/school/",
        element: <Home />,
    });

    return paths;
};

const router = createBrowserRouter(generatePaths());

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
