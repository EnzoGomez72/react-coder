import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/Index";
import CartSummary from "../../components/CartSummary/Index";
import Modal from "react-modal";
import PaymentForm from "../../components/PaymentForm/Index";
import Swal from "sweetalert2";
import OrderConfirmation from "../../components/OrderConfirmation/Index";


const Cart = () => {

    const {cartItems, removeItem, clearCart, getTotal, addItem} = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const totalCompra = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const navigate = useNavigate();

    Modal.setAppElement("#root");


    const [showModal, setShowModal] = useState(false);
    const [cardInfo, setCardInfo] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    });

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleInputChange = (e) => {
        let { name, value } = e.target;

    if (name === "expiry") {

        value = value.replace(/\D/g, "");
        
        if (value.length === 4) {
        value = `${value.substring(0, 2)}/${value.substring(2)}`;
        }
    }

    setCardInfo({ ...cardInfo, [name]: value });
    }


    const handleInputFocus = (e) => setCardInfo({ ...cardInfo, focus: e.target.name });

    const validarNumeroTarjeta = (number) => {
        const regex = /^[0-9]{16}$/;
        return regex.test(number);
    };

    const validarFechaExpiracion = (expiry) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(expiry)) {
        return false;
    }

    const [month, year] = expiry.split("/").map(Number);

    
    const currentYear = new Date().getFullYear() % 100; 
    const currentMonth = new Date().getMonth() + 1;

    if (month < 1 || month > 12) {
        return false;
    }

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;  // La tarjeta ya expiró
    }

    return true;  // La fecha es válida
    };

    const validarCVC = (cvc) => {
        const regex = /^[0-9]{3}$/;
        return regex.test(cvc);
    };

    const pagoAprobado = async (e) => {
        setLoading(true);
        console.log("Fecha de expiración ingresada:", cardInfo.expiry);
        e.preventDefault();
        if (!validarNumeroTarjeta(cardInfo.number)) {
        Swal.fire({
            icon: 'error',
            title: 'Número de tarjeta inválido',
            text: 'El número de tarjeta debe tener 16 dígitos.',
         
        });
        setLoading(false);
        return;
      }
  
      if (!validarFechaExpiracion(cardInfo.expiry)) {
        Swal.fire({
          icon: 'error',
          title: 'Fecha de expiración inválida',
          text: 'La fecha de expiración debe tener el formato MM/AA y ser posterior a la fecha actual.',
        });
        setLoading(false);
        return;
      }
  
      if (!validarCVC(cardInfo.cvc)) {
        Swal.fire({
          icon: 'error',
          title: 'CVC inválido',
          text: 'El CVC debe tener 3 dígitos.',
        });
        setLoading(false);
        return;
      }
  
      if (!cardInfo.name) {
        Swal.fire({
          icon: 'error',
          title: 'Nombre faltante',
          text: 'Por favor completa el nombre en la tarjeta.',
        });
        setLoading(false);
        return;
      }
      
      try{
        const order = {
          buyer: { ...cardInfo },
          items: cartItems,
          total: totalCompra + 2000,
          date: new Date().toISOString(),
        };
        OrderConfirmation(order, clearCart, navigate);
  
        setLoading(false);
  
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema con el pago. Intenta nuevamente.',
        });
        setLoading(false);
        console.log("Loading después de setLoading(false):", loading);
      }
    };

    return (
        <section className="main">
          <h2>CARRITO</h2>
          <div className="carrito-contenedor">
            <div className="carrito">
              {cartItems.length === 0 ? (
                <>
                  <p className="carrito__mensaje">Tu carrito está vacío.</p>
                  <Link to={"/tienda"}>
                    <button className="carrito__boton">Volver a la tienda</button>
                  </Link>
                </>
              ) : (
                <table className="carrito__table">
                  <thead>
                    <tr>
                      <th className=""></th>
                      <th></th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                        addItem={addItem}
                      />
                    ))}
                  </tbody>
                </table>
              )}
              {cartItems.length > 0 && (
                <button className=" carrito__boton" onClick={clearCart}>
                  Vaciar Carrito
                </button>
              )}
            </div>
            {cartItems.length > 0 && (
              <CartSummary totalCompra={totalCompra} handleOpenModal={handleOpenModal} />
            )}
          </div>
    
          <Modal isOpen={showModal} onRequestClose={handleCloseModal} className="modal"
      overlayClassName="overlay">
            <PaymentForm
              cardInfo={cardInfo}
              handleInputChange={handleInputChange}
              handleInputFocus={handleInputFocus}
              pagoAprobado={pagoAprobado}
              loading={loading}
            />
          </Modal>
        </section>
      );

};

export default Cart

/*const Cart = () => {

    const {cartItems, removeItem, clearCart, getTotal, getCartQuantity} = useContext(CartContext);

    return (
        <section className="cart">
            <h1>Carrito</h1>
            {cartItems.length === 0 ? (<div className="cart-vacio">
                <p>Tu carrito esta vacio</p>
                <Link className="cart-vacio_link" to="/tienda">Volver a la tienda</Link>
            </div>) : (<div className="cart-item_container">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <picture className="cart-item_picture">
                            <img src={item.img} alt={item.name} className="cart-item_img" />
                        </picture>
                        <div></div>
                    </div>
                    
                ))}
            </div>)}
        </section>
        

    )
}

export default Cart;*/

