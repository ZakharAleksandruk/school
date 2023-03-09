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
                    <Link href={"/school/#main"}>Головна</Link>
                    <Link href={"/school/#gallery"}>Галерея</Link>
                    <Link href={"/school/#contact"}>Контакти</Link>
                    <BasicMenu
                        label={"Інформація про заклад"}
                        options={infoOptions}
                    />
                    <Link
                        href={
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
