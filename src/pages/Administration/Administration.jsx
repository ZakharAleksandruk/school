import "./Administration.css";
import InfoLayout from "../../components/info/InfoLayout.jsx";
import Administration1 from "/administration.jpg";
import Administration2 from "/administration-2.jpg";
import Administration3 from "/administration-3.jpg";
import Administration4 from "/administration-4.jpg";
import Administration5 from "/administration-5.jpg";
import Administration6 from "/administration-6.jpg";

const Administration = () => {
    return (
        <InfoLayout title="Адміністрація">
            <div className="img-container">
                <h2 className="img-title">Директор Ліцею</h2>
                <img
                    src={Administration1}
                    alt="Адміністрація"
                    className="administration-img"
                />
                <h3 className="img-description">
                    Фокшей Богдан Ігорович, спеціаліст вищої категорії,
                    вчитель-методист
                </h3>
            </div>
            <div className="img-container">
                <h2 className="img-title">
                    Заступник директора з навчально-виховної роботи
                </h2>
                <img
                    src={Administration2}
                    alt="Адміністрація"
                    className="administration-img"
                />
                <h3 className="img-description">
                    Лесевич Оксана Дмитрівна, спеціаліст вищої категорії,
                    вчитель-методист, лауреат педагогічної премії імені Ігоря
                    Пелипейка
                </h3>
            </div>
            <div className="img-container">
                <h2 className="img-title">
                    Заступник директора з виховної роботи
                </h2>
                <img
                    src={Administration3}
                    alt="Адміністрація"
                    className="administration-img"
                />
                <h3 className="img-description">
                    Даниленко Тетяна Георгіївна, спеціаліст вищої категорії,
                    старший вчитель.
                </h3>
            </div>
            <div className="img-container">
                <h2 className="img-title">Педагог-організатор</h2>
                <img
                    src={Administration4}
                    alt="Адміністрація"
                    className="administration-img"
                />
                <h3 className="img-description">
                    Гордій Інна Миколаївна, спеціаліст
                </h3>
            </div>
            <div className="img-container">
                <h2 className="img-title">Практичний психолог</h2>
                <img
                    src={Administration5}
                    alt="Адміністрація"
                    className="administration-img"
                />
                <h3 className="img-description">
                    Мицкан Тетяна Михайлівна, спеціаліст вищої категорії.
                </h3>
            </div>
            <div className="img-container">
                <h2 className="img-title">Соціальний педагог</h2>
                <img
                    src={Administration6}
                    alt="Адміністрація"
                    className="administration-img"
                />
                <h3 className="img-description">
                    Ониськів Оксана Констянтинівна, спеціаліст першої категорії.
                </h3>
            </div>
        </InfoLayout>
    );
};

export default Administration;
