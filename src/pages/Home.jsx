import Header from "../components/header/header.jsx";
import Main from "../components/main/main.jsx";
import Quote from "../components/quote/quote.jsx";
import Contact from "../components/contact/contact.jsx";
import Navigation from "../components/navigation/navigation.jsx";

const Home = () => {
    const quotes = [
        {
            title: "Навчайся.",
            gradient: "blue-gradient",
            text: "Кожен, хто перестає вчитися, старіє.",
            author: "ГЕНРІ ФОРД",
            dataWord: "ГЕНРІ ФОРД",
            color: "white",
        },
        {
            title: "Розвивайся.",
            gradient: "purple-gradient",
            text: "Нескінченне прагнення бути кращим є обов'язком людини.",
            author: "МАХАТМА ГАНДІ",
            dataWord: "МАХАТМА ГАНДІ",
        },
        {
            title: "Еволюціонуй.",
            gradient: "pink-gradient",
            text: "Хто хоче змінити світ, хай змінить себе!",
            author: "СОКРАТ",
            dataWord: "СОКРАТ",
            color: "white",
        },
    ];

    return (
        <div className="App">
            <Header />
            <Main />
            <Navigation />

            {quotes.map((quote, index) => {
                const { title, gradient, text, author, color, dataWord } =
                    quote;

                return (
                    <Quote
                        key={index}
                        title={title}
                        gradient={gradient}
                        text={text}
                        author={author}
                        color={color}
                        dataWord={dataWord}
                    />
                );
            })}

            <Contact />
        </div>
    );
};

export default Home;
