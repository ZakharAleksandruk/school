const firstText = document.getElementById("first-text");
const secondText = document.getElementById("second-text");
const thirdText = document.getElementById("third-text");
const btn = document.getElementById("btn");
const authors = document.querySelectorAll(".author");
const burger = document.querySelector(".burger");
const main = document.querySelector("main");
const navigation = document.querySelector(".navigation");
const burgerLinks = document.querySelectorAll(".burger-link");
const particle = document.getElementById("particle");

const animTime = 3000;
const letters = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

const changeColor = (el) => {
    el.classList.add("animate");
    setTimeout(() => el.classList.remove("animate"), [animTime]);
};

const animate = () => {
    changeColor(firstText);
    btn.classList = "btn";
    btn.classList.add("btn-blue-gradient");

    setTimeout(() => {
        changeColor(secondText);
        btn.classList.replace("btn-blue-gradient", "btn-purple-gradient");
    }, [animTime]);

    setTimeout(() => {
        changeColor(thirdText);
        btn.classList.replace("btn-purple-gradient", "btn-pink-gradient");
    }, [animTime * 2]);
};

animate();

setInterval(animate, [animTime * 3]);

const randomize = (el) => {
    let iterations = 0;

    const interval = setInterval(() => {
        el.target.innerText = el.target.innerText
            .split("")
            .map((letter, index) => {
                const currLetter = el.target.dataset.word[index];

                if (index < iterations) {
                    return currLetter;
                }

                if (currLetter === " ") {
                    return currLetter;
                }

                return letters[Math.floor(Math.random() * 32)];
            })
            .join("");

        if (iterations >= el.target.dataset.word.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, [60]);
};

authors.forEach((el) => el.addEventListener("mouseover", (e) => randomize(e)));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            randomize(entry);
            observer.unobserve(entry.target);
        }
    });
});

authors.forEach((el) => observer.observe(el));

let open = false;

const burgerHandler = () => {
    console.log("lol");
    if (!open) {
        open = true;
        main.classList.add("none");
        navigation.classList.remove("none");

        return;
    }

    open = false;
    main.classList.remove("none");
    navigation.classList.add("none");
};

burger.addEventListener("click", burgerHandler);
burgerLinks.forEach((link) => link.addEventListener("click", burgerHandler));

particle.addEventListener("load", () => {
    particlesJS.load("particles-js", "./assets/particles.json");
});
