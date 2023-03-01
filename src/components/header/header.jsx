import "./header.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "./drawer/drawer.jsx";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <header>
                <img src="/android-chrome-192x192.png" />
                <div className="header-links">
                    <a href="/school/#main">Головна</a>
                    <a href="/school/#gallery">Галерея</a>
                    <a href="/school/#contact">Контакти</a>
                    <a href="/school/history">Історія</a>
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
