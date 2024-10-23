import './ItemDetailContainer.css';
import { useState, useEffect } from "react";
import { getProductById } from '../../asyncMock';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            console.log("Fetching product with ID:", itemId);
            try {
                const response = await getProductById(itemId);
                console.log("Product response:", response);
                setProduct(response);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchProduct();
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {loading ? (
                <p>Cargando...</p> 
            ) : (
                product ? (
                    <ItemDetail {...product} />
                ) : (
                    <p>Producto no encontrado.</p> 
                )
            )}
        </div>
    );
};

export default ItemDetailContainer;
