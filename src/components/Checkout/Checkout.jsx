import { useContext, useState, useEffect } from "react";
import { db } from "../../services/firebase/db";
import CartContext from "../context/CartContext";
import { 
    collection, 
    documentId, 
    getDocs, 
    query, 
    Timestamp, 
    writeBatch, 
    where, 
    addDoc 
} from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Swal from "sweetalert2";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email,
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date()),
            };

            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cart.map((prod) => prod.id);

            if (ids.length === 0) {
                throw new Error("El carrito está vacío. No se puede crear una orden.");
            }

            const productsRef = collection(db, "items");

            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), "in", ids))
            );

            const { docs } = productsAddedFromFirestore;

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, "orders");

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id); // Set the order ID
                clearCart();
            } else {
                console.error("Hay productos que están fuera de stock:", outOfStock);
            }
        } catch (error) {
            console.log("Error al crear la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (orderId) {
            // Solo mostrar la alerta cuando el orderId haya sido establecido
            Swal.fire({
                icon: "success",
                title: "Orden exitosa",
                text: `El ID de su orden es: ${orderId}`,
            });
        }
    }, [orderId]); // Se ejecutará cada vez que orderId cambie

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onCOnfirm={createOrder} />
        </div>
    );
};

export default Checkout;
