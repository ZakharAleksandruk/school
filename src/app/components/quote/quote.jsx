"use client";

import "./quote.css";
import { useRef, useEffect } from "react";

const Quote = ({ color, gradient, title, text, dataWord, author }) => {
    const authorRef = useRef(null);
    const letters = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

    const randomize = () => {
        let iterations = 0;

        const interval = setInterval(() => {
            authorRef.current.innerText = authorRef.current.innerText
                .split("")
                .map((letter, index) => {
                    const currLetter = authorRef.current.dataset.word[index];

                    if (index < iterations) {
                        return currLetter;
                    }

                    if (currLetter === " ") {
                        return currLetter;
                    }

                    return letters[Math.floor(Math.random() * 32)];
                })
                .join("");

            if (iterations >= authorRef.current.dataset.word.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 60);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                randomize(entry);
                observer.unobserve(entry.target);
            }
        });
    });

    useEffect(() => {
        authorRef.current?.addEventListener("mouseover", randomize);
        observer?.observe(authorRef.current);
    }, []);

    return (
        <section
            className={`quote-section center display ${
                color === "white" && "white-bg"
            }`}
        >
            <h3 className={`gradient ${gradient}`}>{title}</h3>
            <p className="quote">{text}</p>
            <p className="author" data-word={dataWord} ref={authorRef}>
                {author}
            </p>
        </section>
    );
};

export default Quote;
