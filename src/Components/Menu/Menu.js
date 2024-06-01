import './Menu.css';
import {Link} from 'react-router-dom'


function Menu() {

    

  return ( 
    <>
    <nav className='Menu'>
      <ul className='flex'>
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

    

    <div class="popup" id="popup"></div>

    {/* <div className="burger">

      <div class="hamb">
          <div class="hamb__field" id="hamb">
                <ul className='flex'>
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
          </div>
      </div>

    </div> */}
    </>
  );
}

export default Menu;