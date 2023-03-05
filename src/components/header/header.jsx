import "./header.css";
import { useState } from "react";
import Logo from "/android-chrome-192x192.png";
import { Link } from "react-router-dom";
import BasicMenu from "./dropdown/dropdown.tsx";
import { infoOptions } from "./data/data.js";
import { parentsOptions } from "./data/data.js";
import { studentOptions } from "./data/data.js";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "./drawer/drawer.jsx";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <header>
                <img src={Logo} alt="logo" />
                <div className="header-links">
                    <Link to={"/school/#main"}>Головна</Link>
                    <Link to={"/school/#gallery"}>Галерея</Link>
                    <Link to={"/school/#contact"}>Контакти</Link>
                    <BasicMenu
                        label={"Інформація про заклад"}
                        options={infoOptions}
                    />
                    <Link
                        to={
                            "/school/info/internal-system-of-education-quality-insurance"
                        }
                    >
                        Внутрішня система забезпечення якості освіти
                    </Link>
                    <BasicMenu label={"Батькам"} options={parentsOptions} />
                    <BasicMenu label={"Учням"} options={studentOptions} />
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
