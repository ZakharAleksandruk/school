import "./header.css";
import { useState } from "react";
import Logo from "/android-chrome-192x192.png";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown/dropdown.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "./drawer/drawer.jsx";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const infoOptions = [
        {
            href: "/school/info/general-info",
            text: "Загальні відомості про заклад",
        },
        { href: "/school/info/history", text: "Історія" },
        { href: "/school/info/administration", text: "Адміністрація" },
        { href: "/school/info/structure", text: "Структура закладу" },
        { href: "/school/info/personnel", text: "Кадровий склад закладу" },
        {
            href: "/school/info/provision",
            text: "Матеріально-технічне забезпечення",
        },
        {
            href: "/school/info/conditions-for-people-with-disabilities",
            text: "Умови доступні для навчання осіб з особливими потребами",
        },
    ];

    return (
        <>
            <header>
                <img src={Logo} alt="logo" />
                <div className="header-links">
                    <Link to={"/school/#main"}>Головна</Link>
                    <Link to={"/school/#gallery"}>Галерея</Link>
                    <Link
                        to={
                            "/school/info/internal-system-of-education-quality-insurance"
                        }
                    >
                        Внутрішня система забезпечення якості освіти
                    </Link>
                    <Link to={"/school/#contact"}>Контакти</Link>
                </div>
                <RxHamburgerMenu
                    className="burger"
                    onClick={() => setIsActive((prev) => !prev)}
                />
            </header>
            {isActive ? <Drawer setIsActive={setIsActive} /> : null}
        </>
    );
};

export default Header;
