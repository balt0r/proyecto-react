import { useState, useEffect } from "react";
import { fetchProducts, fetchProductsByCategory } from "../../api"; 
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? fetchProductsByCategory : fetchProducts;

        const getProducts = async () => {
            try {
                const productsData = await asyncFunc(categoryId);
                setProducts(productsData);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        };

        getProducts();
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
