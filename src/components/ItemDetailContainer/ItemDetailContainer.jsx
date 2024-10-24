import './ItemDetailContainer.css';
import { useState, useEffect } from "react";
import { fetchProductById } from '../../api';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await fetchProductById(itemId); 
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [itemId]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!product) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
