
import { Icon } from "@iconify/react"

const CartWidget = ({quantity}) => {

    return (
        <div className="cart-widget">
            <span className="pill">{quantity}</span>
            <Icon className="cart-widget__cart" icon="ion:bag-sharp" />
        </div>
    );
};

export default CartWidget;