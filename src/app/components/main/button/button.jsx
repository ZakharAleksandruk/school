import "./button.css";
import { useRef, useEffect } from "react";

const Button = () => {
    const animTime = 3000;
    const btn = useRef(null);

    const animate = () => {
        btn.current.classList?.remove("btn-pink-gradient");
        btn.current.classList?.add("btn-blue-gradient");

        setTimeout(() => {
            btn.current.classList?.remove("btn-blue-gradient");
            btn.current.classList?.add("btn-purple-gradient");
        }, [animTime]);

        setTimeout(() => {
            btn.current.classList?.remove("btn-purple-gradient");
            btn.current.classList?.add("btn-pink-gradient");
        }, [animTime * 2]);
    };

    useEffect(() => {
        animate();

        setInterval(animate, animTime * 3);
    }, []);

    return (
        <a href="#contact">
            <button className="btn" ref={btn}>
                Почати навчатися
            </button>
        </a>
    );
};

export default Button;
