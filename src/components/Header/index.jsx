import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './style.scss';
import Logo from '../../assets/lab-logo.png';
import React, { useEffect, useState } from 'react';



function Header () {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Ajoutez un écouteur d'événement pour détecter le défilement de la page
        window.addEventListener('scroll', handleScroll);
        
        // Supprimez l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fonction pour gérer le défilement de la page
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
      
    return (
        <header className={`${scrolled ? 'scrolled' : ''}`}>
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