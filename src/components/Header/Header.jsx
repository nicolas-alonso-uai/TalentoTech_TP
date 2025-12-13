import './Header.css'

import { Nav } from "../Nav/Nav";
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <header>
            <Link to={"/"}>
            <img className='header__logo' src="/images/logo_web.png" alt="logo" />
            </Link>
            
            <Nav />
        </header>
    );
};