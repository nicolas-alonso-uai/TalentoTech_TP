import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    // Funcion para comprobar si el Item ya esta en el carrito
    const exists = (id) =>{
        const exist = cart.some((prod) => prod.id === id);
        return exist;
    };

    //Función 'Agregar Item al carrito'
    const addItem = (item) =>{

        if(exists(item.id)){
            alert("El producto ya existe en el carrito");
            return;
        };

        setCart([...cart, item]); //Agrega el item a los que ya estaban
        alert(`${item.name} agregado`);
    };

    //Funcion 'Vaciar el carrito'
    const clearCart = () => {
        setCart([]);
    };

    // Funcion 'Obtener Total de Items' genérico
    const getTotalItems = () => {
        if(cart.length){
            return cart.length;
        }
    };

    const values = {cart, addItem, clearCart, getTotalItems};

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
};