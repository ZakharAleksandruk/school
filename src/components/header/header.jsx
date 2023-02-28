import "./header.css";
import { useState } from "react";

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
                <div
                    className="burger"
                    onClick={() => setIsActive((prev) => !prev)}
                ></div>
            </header>
            {isActive ? (
                <div className="drawer">
                    <a href="/school/#main">Головна</a>
                    <a href="/school/#gallery">Галерея</a>
                    <a href="/school/#contact">Контакти</a>
                    <a href="/school/history">Історія</a>
                </div>
            ) : null}
        </>
    );
};

export default Header;
