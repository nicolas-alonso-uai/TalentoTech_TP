import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
  return (
    <article className="product-item">
      <div className="product-img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-detail">
        <h2 className="product-title">{name}</h2>
        <p className="product-price">Precio: ${price}</p>
        <p className="product-description">Descripción: {description}</p>
        {children}
      </div>
    </article>
  );
};
