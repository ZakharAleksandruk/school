import "./info.css";
import Header from "../header/header";
import { uid } from "uid";

const Info = ({ title, paragraphs }) => {
    return (
        <>
            <Header />
            <div className="info-container">
                <h1>{title}</h1>
                <div className="pContainer">
                    {paragraphs.map((p) => {
                        return <p key={uid(10)}>{p}</p>;
                    })}
                </div>
            </div>
        </>
    );
};

export default Info;
