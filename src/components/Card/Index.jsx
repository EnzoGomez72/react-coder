import { Link } from "react-router-dom";

const Card = ({name, img, price, category, tag, id}) => {

    return (
        <div className="card">
            
                <div>
                    <img className="card-image" src={img} alt="remera ocho black"/>
                </div>
                <div>
                    <h3>{category}</h3>
                    <h3 className="card-title" >{name}</h3>
                    <p className="card-price" >$ {price}</p>
                    <Link className="btn agregarAlCarrito" to={`/detalle/${id}`}>Ver Detalles</Link>
                </div>
                
            
        </div>
    );
};

export default Card;