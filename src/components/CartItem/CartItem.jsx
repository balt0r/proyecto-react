import { useContext } from "react";
import CartContext from "../context/CartContext";
import './CartItem.css';

const CartItem = ({ id, name, price, quantity, image }) => {
    const { removeItem } = useContext(CartContext); 

    return (
        <div className="CartItem">
            <img src={image} alt={name} />
            <div className="CartDetails">
                <h4>{name}</h4>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
            </div>
            <div className="CartActions">
                <p>Total: ${price * quantity}</p>
                <button onClick={() => removeItem(id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;
