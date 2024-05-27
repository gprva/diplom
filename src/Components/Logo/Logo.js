import "./Logo.css";
import logoImg from '../../img/logo-gadget.png'
import logoTxt from '../../img/logo-txt.png'

export default function Logo() {
  return (
    <div className="Logo flex">
      
        <img src={logoImg} alt="logo" className="logo_img" />
        <img src={logoTxt} alt="" className="logo_txt"/>
      
    </div>
  )
}