const products = [
    {
        id: '1',
        name: 'iphone 12',
        category: 'celular',
        img: 'imagen.jpg',
        stock: '25',
        description: 'descripcion de iphone 12'
    },
    {
        id: '2',
        name: 'iphone x',
        category: 'celular',
        img: 'imagen.jpg',
        stock: '30',
        description: 'descripcion de iphone x'
    },
    {
        id: '3',
        name: 'samsung j2',
        category: 'celular',
        img: 'imagen.jpg',
        stock: '50',
        description: 'descripcion de samsung j2'
    }
]

export const getProducts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductById = async (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}