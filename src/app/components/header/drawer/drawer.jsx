import "./drawer.css";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import BasicMenu from "../dropdown/dropdown.tsx";
import { infoOptions } from "../data/data.js";
import { parentsOptions } from "../data/data.js";
import { studentOptions } from "../data/data.js";

const Drawer = ({ setIsActive }) => {
    return (
        <div className="drawer">
            <RxCross1 className="cross" onClick={() => setIsActive(false)} />
            <Link href={"/school/#main"} onClick={() => setIsActive(false)}>
                Головна
            </Link>
            <Link href={"/school/#gallery"} onClick={() => setIsActive(false)}>
                Галерея
            </Link>
            <Link href={"/school/#contact"} onClick={() => setIsActive(false)}>
                Контакти
            </Link>
            <BasicMenu
                label={"Інформація про заклад"}
                options={infoOptions}
                setIsActive={setIsActive}
            />
            <Link
                onClick={() => setIsActive(false)}
                href={
                    "/school/info/internal-system-of-education-quality-insurance"
                }
            >
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
    );
};

export default Drawer;
