import React from 'react';
import cart from './assets/cart.jpg'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='CartWidget'> 
            <img src={cart} alt="cart-widget"/> 
            <span>0</span>
        </div>
    )
}

export default CartWidget;