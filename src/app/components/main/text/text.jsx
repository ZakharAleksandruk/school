import "./text.css";
import { useRef, useEffect } from "react";

const Text = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const interval = useRef(null);
    const animTime = 3000;

    const changeColor = (el) => {
        el.classList?.add("animate");
        setTimeout(() => el.classList?.remove("animate"), animTime);
    };

    const animate = () => {
        changeColor(firstText.current);

        setTimeout(() => {
            changeColor(secondText.current);
        }, animTime);

        setTimeout(() => {
            changeColor(thirdText.current);
        }, animTime * 2);
    };

    useEffect(() => {
        animate();

        interval.current = setInterval(animate, animTime * 3);

        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return (
        <>
            <h2 className="gradient blue-gradient" ref={firstText}>
                Навчайся.
            </h2>
            <h2 className="gradient purple-gradient" ref={secondText}>
                Розвивайся.
            </h2>
            <h2 className="gradient pink-gradient" ref={thirdText}>
                Еволюціонуй.
            </h2>
        </>
    );
};

export default Text;
