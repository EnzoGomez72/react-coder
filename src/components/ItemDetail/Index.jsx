
import { CartContext } from "../../Context/CartContext";
import { useContext, useState } from "react";

const ItemDetail = ({id, name, img, price, description, category}) => {
  let [quantity, setQuantity] = useState(1);

  const {addItem, removeItem} = useContext(CartContext);

  const increase = () => {
    setQuantity(quantity++)
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addItemToCart = () => {
    addItem({id, name, img, price, description, category, quantity})
  }

    return (
      <section className="item-detail">
        <picture className="item-detail__picture">
            <img className="item-detail__picture--img" src={img} alt={name}  />
        </picture>
        <article className="item-detail__info">
            <p className="item-detail__info--category">{category}</p>
            <h2 className="item-detail__info--name">{name}</h2>
            <p className="item-detail__info--description">{description}</p>
            <p className="item-detail__info--price">$ {price}</p>
                <div className="item-detail__form--container">
                    <button className="item-detail__form--btn" type="button" onClick={decrease}>-</button>
                    <input className="item-detail__form--input" type="text" value={quantity} readOnly/>
                    <button className="item-detail__form--btn" type="button" onClick={increase}>+</button>
                </div>
                <input className="item-detail__form--submit" type="button" value="Agregar al Carrito" onClick={addItemToCart}/>
        </article>
      </section>
    );
  };
  
  export default ItemDetail;