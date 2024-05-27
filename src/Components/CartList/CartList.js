import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";


export default function CartList() {
  

  // this.deleteOrder = this.deleteOrder.bind(this)

  // deleteOrder(id){

  // }
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty
    })
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <Link to={"/products/" + product.slug}>{product.name}</Link>

        <div className="inputs">
        <input
          type="number"
          value={cart[product.name]}
          min={1}
          onChange={(event) => onQuantityChange(product, +event.target.value)} />
        <span>${(cart[product.id] * product.price).toFixed(2)}</span>
        <i className="fa-solid fa-xmark" onClick={() => onItemRemove(product)} />

          <MdDelete className="delete_icon"/>
          </div>
      </div>
    ));

  return (
    <div className="CartList">
      {output}
      
    </div>
  )
}