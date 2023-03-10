"use client";

import Header from "../../components/header/header.jsx";
import { Container } from "@mui/material";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="info-container">
                <Container sx={{ paddingTop: "2rem" }} className="p-container">
                    {children}
                </Container>
            </div>
        </>
    );
};

export default Layout;
