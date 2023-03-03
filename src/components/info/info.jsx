import "./info.css";
import Header from "../header/header";
import { Container } from "@mui/material";
import { uid } from "uid";

const Info = ({ title, paragraphs }) => {
    return (
        <>
            <Header />
            <div className="info-container">
                <h1>{title}</h1>
                <Container sx={{ paddingTop: "2rem" }} className="p-container">
                    {paragraphs.map((p) => {
                        return <p key={uid()}>{p}</p>;
                    })}
                </Container>
            </div>
        </>
    );
};

export default Info;
