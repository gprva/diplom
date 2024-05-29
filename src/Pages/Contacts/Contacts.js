import React from "react";
import "./Contacts.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <section className="contact_main">
        <div className="container">
          <h2 className="contact_tit">Вы можете связаться с нами</h2>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="contact_phon_tit">Контактный тел: <Link to="tel:+996 505 505 400" >+996 505 505 400</Link></p>

          <Link to="mailto:gaparovalola08@gmail.com" className="contact_phon">
            <CgMail className="Whatsapp" />
            <span>gaparovalola08@gmail.com</span>
          </Link>

          <p className="contact_phon_tit">Соц. сети</p>

          <Link to="https://wa.me/qr/5CCLEVSIBJ43F1" className="contact_phon">
            <FaWhatsapp className="Whatsapp" /> <span>+996 505 505 400</span>
          </Link>
          <Link to="https://t.me/+996505505400" className="contact_phon">
            <FaTelegramPlane className="Whatsapp" />
            <span>+996 505 505 400</span>
          </Link>
          <Link to="https://t.me/+996505505400" className="contact_phon">
            <FaInstagram className="Whatsapp" /> <span>gprva_</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contacts;
