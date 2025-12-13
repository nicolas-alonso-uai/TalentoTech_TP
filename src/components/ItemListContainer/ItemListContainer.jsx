import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if(!res.ok){
            throw new Error("Hubo un problema al buscar los productos!");
        }
        return res.json();
      })
      .then((data)=>{
        if(category){
          setProducts(data.filter((prod) => prod.category === category));
        }else{
          setProducts(data);
        }
      })
      .catch((err)=>{
        console.log(err);
      });
  }, [category]);

  return (
    <section>
      <h1 className="itemlist_title">{titulo}</h1>
      <div className="container">
        <ItemList lista={products} />
      </div>
    </section>
  );
};
