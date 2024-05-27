import React from 'react';
import "./Contacts.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contacts = () => {
  return (
    <>
      <section className='contact_main'>
      <div className="container">
            <h2 className='contact_tit'>Вы можете связаться с нами</h2>
      </div>
    </section>

    <section>
      <div className="container">

        <p className="contact_phon_tit">Контактный тел: +996 505 505 400</p>
        <p className="contact_phon"> <CgMail className='Whatsapp'/> <span>gaparovalola08@gmail.com</span></p>
        <p className="contact_phon_tit">Соц. сети</p>
        <p className="contact_phon"> <FaWhatsapp className='Whatsapp'/> <span>+996 505 505 400</span> </p>
        <p className="contact_phon"><FaTelegramPlane  className='Whatsapp'/> <span>+996 505 505 400</span>   </p>
        <p className="contact_phon"><FaInstagram className='Whatsapp'/> <span>gprva_</span> </p>
        
      </div>
    </section>
    </>
  )
}

export default Contacts
