import './Delivery.css';
import deliveryImg from '../../img/delivery.png'
import { Link } from 'react-router-dom';
import { FaFolderOpen } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiLoveLetter } from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";


function Delivery() {
  return (
    <>
    <section className="Delivery">
      <div className="container">

        <div className="delivery_mains flex">

          <div className="delivery_left">
            <img src={deliveryImg} alt="" />
          </div>

          <div className="delivery_right">
            <p className="delivery_txt">- Delivery within Bishkek Paid</p>

            <p className="delivery_tit">NO DELIVERY ON SUNDAYS</p>
            <p className="delivery_tit">ACCEPTING ORDERS FROM 10-00 TO 15-00</p>
            <p className="delivery_tit">DELIVERY OF GOODS IS CARRIED OUT FROM 12-00 DURING THE DAY</p>

            <p className="delivery_txt_num">Contact phone numbers for orders:</p>
            <p className="delivery_txt_num"><Link to="+996505505400" >+996 505 505 400</Link></p>
            <p className="delivery_txt_num"><Link to="+996505505400" >+996 505 505 400 </Link></p>

          </div>

        </div>

      </div>
    </section>

    <section className='delivery'>
      <div className="container">
          <h2 className="home_tit delivery_tittle">Scheme of work</h2>

        <div className="delivery_cards flex">

          <div className="delivery_card">
          <FaFolderOpen className='delivery_card_icon'/>
          <h3 className="delivery_card_txt">Upload file</h3>
          </div>
          
          <div className="delivery_card">
              <LuSettings2 className='delivery_card_icon'/>
              <h3 className="delivery_card_txt">Specify order parameters</h3>
          </div>
          <div className="delivery_card">
          <MdOutlineAccessTimeFilled className='delivery_card_icon'/>
            <h3 className="delivery_card_txt">We will calculate the cost and terms</h3>
          </div>

          <div className="delivery_card">
          <GiLoveLetter  className='delivery_card_icon'/>
            <h3 className="delivery_card_txt">We will deliver your order quickly</h3>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}

export default Delivery;