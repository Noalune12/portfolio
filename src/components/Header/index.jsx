import { Link, useLocation } from 'react-router-dom';
import './style.scss';
import Logo from '../../assets/lab-logo.png';
import React, { useEffect, useState } from 'react';



function Header () {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();


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
            updateActiveSection();
        } else {
            setScrolled(false);
        }
    };

    const [activeSection, setActiveSection] = useState('accueil');

    const updateActiveSection = () => {
        const sections = document.querySelectorAll('section');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 2) {
                current = section.id;
            }
        });
        setActiveSection(current);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    };

    const isProjetPage = location.pathname.startsWith("/projets/");
      
    return (
        <header className={`${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className='page-title'>
                <img src={Logo} alt="Logo Lab" className='header-logo' />
            </Link>
            {isProjetPage ? (
                <button onClick={() => window.history.back()}>Retour</button>
            ) : (
                <nav>
                    <ul>
                        <li className={activeSection === 'accueil' ? 'active' : ''} onClick={() => scrollToSection('accueil')}>Accueil</li>
                        <li className={activeSection === 'a-propos' ? 'active' : ''} onClick={() => scrollToSection('a-propos')}>A propos</li>
                        <li className={activeSection === 'mes-projets' ? 'active' : ''} onClick={() => scrollToSection('mes-projets')}>Mes projets</li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;