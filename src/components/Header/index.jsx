import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './style.scss';
import Logo from '../../assets/lab-logo.png';


function Header () {
    return (
        <header>
            <Link to="/" className='page-title'>
                {/* <h1>Lou-Anne</h1> */}
                <img src={Logo} alt="Logo Lab" className='header-logo' />
            </Link>
            <nav className='nav-links'>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">A propos</NavLink>
                <NavLink to="/mes-projets">Mes projets</NavLink>
            </nav>
        </header>
    );
}

export default Header;