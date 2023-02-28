import "./main.css";
import Text from "./text/text.jsx";
import Button from "./button/button.jsx";

const Main = () => {
    return (
        <section className="main center display" id="main">
            <div className="container center">
                <h1>Косівський ліцей №2 імені Михайла Павлика</h1>
                <div className="text-container center">
                    <Text />
                </div>
            </div>
            <Button />
        </section>
    );
};

export default Main;
