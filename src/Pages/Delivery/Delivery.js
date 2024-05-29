import './Delivery.css';
import deliveryImg from '../../img/delivery.png'
import { Link } from 'react-router-dom';


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

    <section>
      <div className="container">
        
      </div>
    </section>
    </>
  );
}

export default Delivery;