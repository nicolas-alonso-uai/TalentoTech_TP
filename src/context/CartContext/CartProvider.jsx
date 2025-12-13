import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Funcion para comprobar si el Item ya esta en el carrito
  const exists = (id) => {
    const exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  //Función 'Agregar Item al carrito'
  const addItem = (item) => {
    if (exists(item.id)) {
      const updatedCart = cart.map((prod) => {
        if (prod.id === item.id) {
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCart(updatedCart);
      alert(`Agregado al carrito`);
    } else {
      setCart([...cart, item]); //Agrega el item a los que ya estaban
      alert(`${item.name} agregado`);
    }
  };

  // Función 'Eliminar un producto con filtro'
  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert(`Producto eliminado`);
  };

  //Funcion 'Vaciar el carrito'
  const clearCart = () => {
    setCart([]);
  };

  // Funcion 'Obtener Total de Items'
  const getTotalItems = () => {
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  };

  // Función 'Calcular total'
  const total = () =>{
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

    return Math.round(total * 100) / 100;
  };

  // Función 'Finalizar compra'
  const checkout = () => {
    const ok = confirm("¿Seguro que desea finalizar la compra?");

    if(ok){
        alert("Compra exitosa!!!");
        clearCart();
    }
  }

  const values = { cart, addItem, clearCart, getTotalItems, deleteItem, total, checkout };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
