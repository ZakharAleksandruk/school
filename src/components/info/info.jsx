import "./info.css";

const Info = ({ title, children }) => {
    return (
        <div className="info-container">
            <h1>{title}</h1>
            {children}
        </div>
    );
};

export default Info;
