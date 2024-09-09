import LinkButton from "../LinkButton/Index";
import { NavLink } from "react-router-dom";

const Menu = ({links, className, children}) => {

    return (
        <menu className={`menu ${className}__menu`}>
            {links.map((link, i) => <li key={`navlink-${i}`} className={`menu__item ${className}__item`}><NavLink className={`${className}__item`} to={link.href}>{link.label}</NavLink></li>)}
            {children}
        </menu>
    );
};

export default Menu;