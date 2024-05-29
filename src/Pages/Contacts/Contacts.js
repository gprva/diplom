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
          <div className="Map">
          </div>
        </div>
      </section>

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735.5995417556852!2d78.38666766015602!3d42.483087066586336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865b5c92042535%3A0x78a9de24f2cc9c3b!2sIT-Academy%20Karakol!5e0!3m2!1sen!2skg!4v1716635134251!5m2!1sen!2skg" width="100%" height="400" allowfullscreen="" loading="lazy" title='qwer' referrerpolicy="no-referrer-when-downgrade"></iframe>
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
          <Link to="https://www.instagram.com/gprva__?igsh=MW9ldWVnZXhvbGR1YQ==" className="contact_phon">
            <FaInstagram className="Whatsapp" /> <span>gprva_</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contacts;
