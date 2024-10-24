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
                <NavLink to='/category/celular' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Celulares</NavLink>
                <NavLink to='/category/tablet' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Tablets</NavLink>
                <NavLink to='/category/notebook' className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}>Notebooks</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
