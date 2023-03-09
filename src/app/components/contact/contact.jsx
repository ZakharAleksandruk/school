import "./contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
    return (
        <section
            className="contact-section center white-bg display"
            id="contact"
        >
            <h3>Контакти</h3>
            <div className="links center">
                <a href="tel:+380347822331" aria-label="номер телефону">
                    <BsFillTelephoneFill />
                </a>
                <a
                    href="mailto:kosiv2.licej@gmail.com"
                    aria-label="електронна пошта"
                >
                    <MdAlternateEmail />
                </a>
                <a
                    href="https://m.facebook.com/groups/1430075370380516/"
                    aria-label="сторінка в фейсбук"
                    target="_blank"
                >
                    <FaFacebookSquare />
                </a>
                <a
                    href="https://goo.gl/maps/TJ5kvyneDbeonGka6"
                    aria-label="місцезнаходження ліцею"
                    target="_blank"
                >
                    <IoLocationSharp />
                </a>
            </div>
        </section>
    );
};

export default Contact;
