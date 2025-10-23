import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if(!res.ok){
            throw new Error("Hubo un problema al buscar los productos!");
        }
        return res.json();
      })
      .then((data)=>{       //data = es el contenido que trae la 'res'
        setProducts(data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }, []);

  return (
    <section>
      <h1 className="itemlist_title">{titulo}</h1>
      <div className="container">
        <ItemList lista={products} />
      </div>
    </section>
  );
};
