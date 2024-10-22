import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { ItemId } = useParams(); 

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${ItemId}`)
            .then(res => res.json())
            .then(data => setProduct(data)) 
            .catch(error => console.error('Error fetching product:', error)); 
    }, [ItemId]); 

    if (!product) {
        return <p>Cargando producto...</p>; 
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} /> {}
        </div>
    );
};

export default ItemDetailContainer;