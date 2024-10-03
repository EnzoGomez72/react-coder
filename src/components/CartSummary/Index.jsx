const CartSummary = ({ totalCompra, handleOpenModal }) => {
    return (
      <div className="resumen">
        <h3>RESUMEN DE LA COMPRA</h3>
        <table className="resumen__table">
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td>${totalCompra}</td>
            </tr>
            <tr>
              <th>Envío</th>
              <td>$10000</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>${totalCompra + 10000}</td>
            </tr>
          </tbody>
        </table>
        <button className="carrito__boton" onClick={handleOpenModal}>
          Terminar compra
        </button>
      </div>
    );
  };
  
  export default CartSummary;