import "./ItemDetail.css";
import { Item } from "../Item/Item";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const ItemDetail = ({detail}) => {

  const {addItem} = useCartContext();

  return(
    <Item {...detail}>
        <button className="btn-enviar" onClick={() => addItem(detail)}>Enviar al carrito</button>
    </Item>
  );
};
