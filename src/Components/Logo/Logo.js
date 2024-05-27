import "./Logo.css";
import logo from '../../img/logo.svg';
import logoImg from '../../img/logo-gadget.png'
import logoTxt from '../../img/logo-txt.png'
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo flex">
      
        <img src={logoImg} alt="logo" className="logo_img" />
        <img src={logoTxt} alt="" className="logo_txt"/>
      
    </div>
  )
}