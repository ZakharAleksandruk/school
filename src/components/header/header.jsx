import "./header.css";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

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
            {isActive ? (
                <div className="drawer">
                    <RxCross1
                        className="cross"
                        onClick={() => setIsActive(false)}
                    />
                    <a href="/school/#main" onClick={() => setIsActive(false)}>
                        Головна
                    </a>
                    <a
                        href="/school/#gallery"
                        onClick={() => setIsActive(false)}
                    >
                        Галерея
                    </a>
                    <a
                        href="/school/#contact"
                        onClick={() => setIsActive(false)}
                    >
                        Контакти
                    </a>
                    <a
                        href="/school/history"
                        onClick={() => setIsActive(false)}
                    >
                        Історія
                    </a>
                </div>
            ) : null}
        </>
    );
};

export default Header;
