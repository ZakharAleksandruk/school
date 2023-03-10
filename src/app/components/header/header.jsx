"use client";

import "./header.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
                <Image
                    src="/android-chrome-192x192.png"
                    width={100}
                    height={100}
                    alt="logo"
                />
                <div className="header-links">
                    <Link href={"/#main"}>Головна</Link>
                    <Link href={"/#gallery"}>Галерея</Link>
                    <Link href={"/#contact"}>Контакти</Link>
                    <BasicMenu
                        label={"Інформація про заклад"}
                        options={infoOptions}
                        setIsActive={setIsActive}
                    />
                    <Link href={"/education-quality"}>
                        Внутрішня система забезпечення якості освіти
                    </Link>
                    <BasicMenu
                        label={"Батькам"}
                        options={parentsOptions}
                        setIsActive={setIsActive}
                    />
                    <BasicMenu
                        label={"Учням"}
                        options={studentOptions}
                        setIsActive={setIsActive}
                    />
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
