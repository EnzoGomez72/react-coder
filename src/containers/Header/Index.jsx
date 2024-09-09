import logo from'../../assets/avanti-logo.svg';
import Menu from '../../components/Menu/Index';
import CartWidget from '../../components/CartWidget/Index';
const Header = () => {

    const links = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Tienda',
            href: '/tienda'
        },
        {
            label: 'Contacto',
            href: '/contacto'
        }
    ];

    return(

        <header className="header">
            <nav className="navbar">
                <a className='navbar__logo' href="/">
                    <figure className="navbar__img">
                        <img src={logo} alt="" />
                    </figure>
                </a>
                <Menu className= 'navbar' links={links}> 
                    <li>
                        <a className='navbar__link' href="">
                            <CartWidget quantity={0}/>
                        </a>
                    </li>
                </Menu>
            </nav>
        </header>
    );
};

export default Header;