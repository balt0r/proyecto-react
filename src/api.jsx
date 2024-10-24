const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('La página no responde');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; 
    }
};

export const fetchProductsByCategory = async (categoryId) => {
    try {
        const response = await fetch(`${API_URL}/category/${categoryId}`);
        if (!response.ok) {
            throw new Error('Error fetching category products');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching category products:", error);
        throw error; 
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Error fetching product');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching product:", error);
        throw error; 
    }
};
