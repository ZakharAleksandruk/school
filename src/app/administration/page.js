import "./administration.css";
import Image from "next/image";

const Administration = () => {
    return (
        <>
            <div className="admin-container">
                <h1>Адміністрація</h1>
                <>
                    <div className="img-container">
                        <h2 className="img-title">Директор Ліцею</h2>
                        <Image
                            src="/administration.jpg"
                            alt="Адміністрація"
                            className="administration-img"
                            width={400}
                            height={400}
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
                        <Image
                            src="/administration-2.jpg"
                            alt="Адміністрація"
                            className="administration-img"
                            width={400}
                            height={400}
                        />
                        <h3 className="img-description">
                            Лесевич Оксана Дмитрівна, спеціаліст вищої
                            категорії, вчитель-методист, лауреат педагогічної
                            премії імені Ігоря Пелипейка
                        </h3>
                    </div>
                    <div className="img-container">
                        <h2 className="img-title">
                            Заступник директора з виховної роботи
                        </h2>
                        <Image
                            src="/administration-3.jpg"
                            alt="Адміністрація"
                            className="administration-img"
                            width={400}
                            height={400}
                        />
                        <h3 className="img-description">
                            Даниленко Тетяна Георгіївна, спеціаліст вищої
                            категорії, старший вчитель.
                        </h3>
                    </div>
                    <div className="img-container">
                        <h2 className="img-title">Педагог-організатор</h2>
                        <Image
                            src="/administration-4.jpg"
                            alt="Адміністрація"
                            className="administration-img"
                            width={400}
                            height={400}
                        />
                        <h3 className="img-description">
                            Гордій Інна Миколаївна, спеціаліст
                        </h3>
                    </div>
                    <div className="img-container">
                        <h2 className="img-title">Практичний психолог</h2>
                        <Image
                            src="/administration-5.jpg"
                            alt="Адміністрація"
                            className="administration-img"
                            width={400}
                            height={400}
                        />
                        <h3 className="img-description">
                            Мицкан Тетяна Михайлівна, спеціаліст вищої
                            категорії.
                        </h3>
                    </div>
                    <div className="img-container">
                        <h2 className="img-title">Соціальний педагог</h2>
                        <Image
                            src="/administration-6.jpg"
                            alt="Адміністрація"
                            className="administration-img"
                            width={400}
                            height={400}
                        />
                        <h3 className="img-description">
                            Ониськів Оксана Констянтинівна, спеціаліст першої
                            категорії.
                        </h3>
                    </div>
                </>
            </div>
        </>
    );
};

export default Administration;
