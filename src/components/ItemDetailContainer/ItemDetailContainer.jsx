import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((data) => {
        if(data){
          setDetail(data);
        }else{
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); //cuando cambia el ID se dispara el evento

  return (
    <main>
      {
        //Evaluamos si el objeto tiene claves y no está vacío
        Object.keys(detail).length ? (
          <ItemDetail detail={detail} />
        ) : (
          <p>Cargando...</p>
        )
      }
    </main>
  );
};
