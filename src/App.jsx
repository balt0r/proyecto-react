import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <div className="App">
            <NavBar /> 
            <ItemListConteiner greeting={'Bienvenidos'} />
        </div>
    );
}

export default App 