import Header from "../header/header.jsx";
import { Box } from "@mui/material";

const InfoLayout = ({ title, children }) => {
    return (
        <>
            <Header />
            <div className="info-container">
                <h1>{title}</h1>
                <Box sx={{ paddingTop: "2rem" }}>{children}</Box>
            </div>
        </>
    );
};

export default InfoLayout;
