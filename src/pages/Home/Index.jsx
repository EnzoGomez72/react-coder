import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
        <div className="hero">
      <div className="hero-content">
        <h1>Tu Estilo, Tu Historia</h1>
        <p>Descubre las últimas tendencias en moda.</p>
        <Link className="shop-button" to={`/tienda`}>Comprar Ahora</Link>
      </div>
    </div>
        </>
    );
};

export default Home;

