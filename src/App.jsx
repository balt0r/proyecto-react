import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Navbar  from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListConteiner greeting={'Todos nuestros productos'} />}/>
                <Route path='/category/:categoryId' element={<ItemListConteiner greeting={'Productos por categoria'} />}/>
                <Route path='/item/itemId' element={<ItemDetailContainer />}/>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App 