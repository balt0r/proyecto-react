import './CartWidget.css'
import cart from './assets/cart.jpg'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: "block" }}>
        <img className='CartImg' src={cart} alt='cart-widget'/>
        {totalQuantity}
        </Link>

    )
}

export default CartWidget;