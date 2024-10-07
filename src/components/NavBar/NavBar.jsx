import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Guitarras</button>
                <button>Bajos</button>
                <button>Amplificadores</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 