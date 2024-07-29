import React, {useState} from 'react';
import logo from '../img/logo.svg';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price)*el.quantity)
  return(<div>
      {props.orders.map(el => (
          <Order onDelete={props.onDelete} onDeleteAllQuantity={props.onDeleteAllQuantity} changeQuantity={props.changeQuantity} onAdd={props.onAdd} key={el.id} item={el} />
          
      ))}
      <p className='summa'>Итого: {new Intl.NumberFormat().format(summa)}₽</p>
    </div>)
}



const showNothing = () => {
  return(<div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  const pathAbout = `${process.env.PUBLIC_URL}/about.html`
  const pathBuyOrder = `${process.env.PUBLIC_URL}/buyOrder.html`
  
  const shopCartBuyButton = () => {
    return(
      <div className="order-button">
        <a href={pathBuyOrder} >Заказать</a>
      </div>
      
    )
  }
  
  
  
    return (
      <header>
        <div>
          <span className='logo'>
            <img src={logo} alt='Logo' />
          </span>
          <ul className='nav'>
            <a href={pathAbout}>О нас</a>
          </ul>
          <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} 
            className={`shop-cart-button ${cartOpen ? 'active' : ''}`} />
          
          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length > 0 ? 
                showOrders(props) : showNothing()}
              {props.orders.length > 0 && 
                shopCartBuyButton()}  
            </div>
          )}
          
        </div>
        <div className='presentation'></div>
      </header>
    );
  }
  
