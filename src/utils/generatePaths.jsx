import { dataPaths } from "../data/data.js";
import Info from "../components/info/info.jsx";
import Home from "../pages/Home.jsx";
import Administration from "../pages/Administration/Administration.jsx";
import EducationQuality from "../pages/EducationQuality/EducationQuality.jsx";

export const generatePaths = () => {
    const paths = dataPaths.map((el) => {
        return {
            path: el.path,
            element: (
                <Info title={el.data.title} paragraphs={el.data.paragraphs} />
            ),
        };
    });

    const uniquePages = [
        {
            path: "/school/",
            element: <Home />,
        },
        { path: "/school/info/administration", element: <Administration /> },
        {
            path: "/school/info/internal-system-of-education-quality-insurance",
            element: <EducationQuality />,
        },
    ];

    paths.push(...uniquePages);

    return paths;
};
