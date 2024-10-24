import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='menu-toggle' onClick={toggleMenu}>
                ☰ 
            </div>
            <div className={`Categories ${isOpen ? 'open' : ''}`}>
                <NavLink to='/category/electronics' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Electrónica</NavLink>
                <NavLink to='/category/jewelery' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Joyería</NavLink>
                <NavLink to='/category/men\ clothing' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Ropa de Hombre</NavLink>
                <NavLink to='/category/women\ clothing' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Ropa de Mujer</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
