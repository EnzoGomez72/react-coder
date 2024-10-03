import { useContext } from "react";
import { Icon } from "@iconify/react"
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {cartItems} = useContext(CartContext);

    const quantity = cartItems.length > 0 ? cartItems.map(item => item.quantity).reduce((acc, act)=> acc + act): 0;

    console.log("Cart:", cartItems);

    return (
        <div className="cart-widget">
            <span className="pill">{quantity}</span>
            <Icon className="cart-widget__cart" icon="ion:bag-sharp" />
        </div>
    );
};

export default CartWidget;