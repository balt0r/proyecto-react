import './ItemDetailContainer.css';
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/db';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data}
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log("Se rompio el itemDetail",error)
            })
            .finally(() => {
                setLoading(false)
            })
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
