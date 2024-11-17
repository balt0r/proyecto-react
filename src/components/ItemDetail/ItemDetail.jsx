import './ItemDetail.css';
import React, { useContext, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, title, image, category, description, price,...props}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, title, price };
        addItem(item, quantity);
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{title}</h2>
            </header>
            <picture>
                <img src={image} alt={title} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoria: {category}</p>
                <p className="Info">Descripcion: {description}</p>
                <p className="Info">Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar Compra</Link>
                ) : (
                    <ItemCount initial={1} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;
