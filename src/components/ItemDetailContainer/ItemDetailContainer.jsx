import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontró el producto!");
        }
        return res.json();
      })
      .then((data) => {
        //Busqueda por el ID del parámetro de la ruta
        const prodFound = data.find((p) => p.id === id);

        if (prodFound) {
          setDetail(prodFound);
        } else {
          throw new Error("No se encontró el producto!");
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
