import logo from "../../assets/avanti-logo.svg";
import CartWidget from "../CartWidget/Index";
import ItemList from "../ItemList/Index";

const Navbar = () => {

    return(
        <header className="header">
            <nav className="navbar">
                <figure className="navbar__logo">
                    <img src={logo} alt="" />
                </figure>
                <menu className="navbar__menu">
                    <ItemList label={Shop}/>
                    <ItemList label={Contacto}/>
                    <ItemList label={Login}/>
                    <li className="navbar__item">
                        <a href="" className=""><CartWidget quantity={1}/></a></li>
                </menu>
            </nav>
        </header>
    );
}

export default Navbar;