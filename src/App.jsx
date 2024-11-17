import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Navbar  from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './components/context/CartContext';
import { Cart } from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
            <CartProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListConteiner greeting={'Todos nuestros productos'} />}/>
                <Route path='/category/:categoryId' element={<ItemListConteiner greeting={'Productos por categoria'} />}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart/>} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
            </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App 