import "./navigation.css";
import OutlinedCard from "../card/card.jsx";
import { uid } from "uid";

const Navigation = () => {
    const cardOptions = [
        { title: "Інформація про заклад", href: "/school/info/general-info" },
        { title: "Інформація про заклад", href: "/school/info/general-info" },
        { title: "Інформація про заклад", href: "/school/info/general-info" },
        { title: "Інформація про заклад", href: "/school/info/general-info" },
        { title: "Інформація про заклад", href: "/school/info/general-info" },
        { title: "Інформація про заклад", href: "/school/info/general-info" },
    ];

    return (
        <div className="nav-wrapper">
            <h1 className="nav-title">Навігація</h1>
            <div className="navigation">
                {cardOptions.map((el) => (
                    <OutlinedCard key={uid()} title={el.title} href={el.href} />
                ))}
            </div>
        </div>
    );
};

export default Navigation;
