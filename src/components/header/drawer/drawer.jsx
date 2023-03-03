import "./drawer.css";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Drawer = ({ setIsActive }) => {
    return (
        <div className="drawer">
            <RxCross1 className="cross" onClick={() => setIsActive(false)} />
            <Link to={"/school/#main"} onClick={() => setIsActive(false)}>
                Головна
            </Link>
            <Link to={"/school/#gallery"} onClick={() => setIsActive(false)}>
                Галерея
            </Link>
            <Link to={"/school/#contact"} onClick={() => setIsActive(false)}>
                Контакти
            </Link>
            <Link
                to={"/school/info/history"}
                onClick={() => setIsActive(false)}
            >
                Історія
            </Link>
        </div>
    );
};

export default Drawer;
