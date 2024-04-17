import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <header>
            <Link to="/">
                <h1>Lou-Anne</h1>
            </Link>
            <nav className='nav-links'>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">A propos</NavLink>
                <NavLink to="/mes-projets">A propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;