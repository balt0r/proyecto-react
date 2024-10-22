import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <Router>
            <NavBar />
            <ItemCount>0</ItemCount>
            <Routes>
                <Route path="/" element={<h1>Bienvenido a Mi Tienda</h1>} />
                <Route path="/productos" element={<ItemListContainer addToCart={addToCart} />} />
                <Route path="/carrito" element={<CartWidget cartItems={cartItems} />} />
                <Route path="/productos/:ItemId" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
}

export default App;
