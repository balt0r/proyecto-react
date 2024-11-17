import "./CartWidget.css";
import cart from "./assets/cart.jpg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  

  return (
    <Link to="/cart" className="CartWidget">
      <img className="CartImg" src={cart} alt="cart-widget" />
      <span>{totalQuantity}</span> {/* Aquí se muestra el número de productos */}
    </Link>
  );
};

export default CartWidget;
