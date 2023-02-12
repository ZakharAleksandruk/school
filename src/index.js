const firstText = document.getElementById("first-text");
const secondText = document.getElementById("second-text");
const thirdText = document.getElementById("third-text");
const btn = document.getElementById("btn");

const animTime = 3000;

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
