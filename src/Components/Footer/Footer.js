import React from "react"
import "./Footer.css"
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {


  return (
    <>
      <footer>
        <div className='container'>
          {/* <div className="footer_cards flex">

            <div className="footer_card footer_card1">
              <h4 className="footer_card_tit">Gadgets</h4>
              <p className="footer_card_txt">Gadgets are small electronic devices with specific functions designed to simplify or enhance various aspects of everyday life. </p>
            </div>

            <div className="footer_card">
              <CgMail className="link_card" />
              <p className="footer_card_ic_txt">MAIL</p>
              <Link to="mailto:gaparovalola08@gmail.com" className="footer_phon">
              <span>gaparovalola08@gmail.com</span>
              </Link>
            </div>

            <div className="footer_card">
              <FaWhatsapp className="link_card2 " />
              <p className="footer_card_ic_txtW">Whatsapp</p>
              <Link to="https://wa.me/qr/5CCLEVSIBJ43F1" className="footer_phon">
               <span>+996 505 505 400</span>
              </Link>
            </div>

            <div className="footer_card">
              <FaInstagram className="link_card2" />
              <p className="footer_card_ic_txtW">Instagram</p>
              <Link to="https://t.me/+996505505400" className="footer_phon">
               <span>gprva_</span>
              </Link>
            </div>

          </div> */}

          <div className="footer_cards flex">

            <div className="flex">
            <div className="footer_card">
              <h4 className="footer_card_tit">Gadgets</h4>
            </div>

            
            <div className="footer_nav ">
            <nav className='Footer_menu'>
              <ul className='footer_navs flex'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/delivery">Delivery</Link>
                </li>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
              </ul>
            </nav>
            </div>
            </div>

            

            <div className="footer_share">
              <div className="footer_shares flex">

                <Link to="https://t.me/+996505505400">
                <FaTelegramPlane className="link_card2" />
                </Link>

                <Link to="https://wa.me/qr/5CCLEVSIBJ43F1"><FaWhatsapp className="link_card2"/></Link>

                <Link to="https://t.me/+996505505400">
                <FaInstagram className="link_card2"/>
                </Link>
                
                

              </div>

              <div className="footer_share_card">
              <CgMail className="link_card_gm" />
              <Link to="mailto:gaparovalola08@gmail.com" className="footer_phon">
              <span>gaparovalola08@gmail.com</span>
              </Link>
            </div>

            </div>

          </div>

          
        </div>
      </footer>
    </>
  )
}

export default Footer
