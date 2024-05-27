import "./Logo.css";
import logoImg from '../../img/logo-gadget.png'

export default function Logo() {
  return (
    <div className="Logo flex">
      
        <img src={logoImg} alt="logo" className="logo_img" />
      
    </div>
  )
}