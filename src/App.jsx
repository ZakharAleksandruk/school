import Main from "./components/main/main.jsx";
import Quote from "./components/quote/quote.jsx";

const App = () => {
    const quotes = [
        {
            title: "Навчайся.",
            gradient: "blue-gradient",
            text: "Кожен, хто перестає вчитися, старіє.",
            author: "ГЕНРІ ФОРД",
            dataWord: "ГЕНРІ ФОРД",
        },
        {
            title: "Розвивайся.",
            gradient: "purple-gradient",
            text: "Нескінченне прагнення бути кращим є обов'язком людини.",
            author: "МАХАТМА ГАНДІ",
            color: "white",
            dataWord: "МАХАТМА ГАНДІ",
        },
        {
            title: "Еволюціонуй.",
            gradient: "pink-gradient",
            text: "Хто хоче змінити світ, хай змінить себе!",
            author: "СОКРАТ",
            dataWord: "СОКРАТ",
        },
    ];

    return (
        <div className="App">
            <Main />
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
            ;
        </div>
    );
};

export default App;
