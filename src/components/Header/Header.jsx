import './Header.css'

import { Nav } from "../Nav/Nav";

export const Header = () => {
    return(
        <header>
            <img className='header__logo' src="/images/logo_web.png" alt="logo" />
            <Nav />
        </header>
    );
};