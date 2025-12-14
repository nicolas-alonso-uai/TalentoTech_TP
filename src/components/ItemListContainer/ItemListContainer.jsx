import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts(category)
    .then((data) => setProducts(data))
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
