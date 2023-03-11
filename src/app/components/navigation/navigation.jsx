import "./navigation.css";
import OutlinedCard from "./card/card.jsx";
import { uid } from "uid";

const Navigation = () => {
    const cardOptions = [
        { title: "Історія", href: "/info/history" },
        {
            title: "Загальні відомості про заклад",
            href: "/info/general-info",
        },
        { title: "Розклад та дз", href: "/schedule-and-hw" },
        { title: "Новини", href: "/news" },
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
