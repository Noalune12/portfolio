import './style.scss';
import Timeline from '../../components/Timeline';
import { FaHtml5, FaCss3, FaJs, FaReact, FaSass, FaNodeJs, FaGit, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiRedis, SiDocker, SiGo } from 'react-icons/si'
import LogoExpress from '../../assets/express.svg';
import LogoC from '../../assets/C.png';
import LogoCPP from '../../assets/C++.png';
import { SiMongodb, SiVisualstudiocode } from "react-icons/si";

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
};

function Apropos () {
    return (
        <section className='a-propos' id='a-propos'>
            <div className='a-propos-section'>
                <h2 className='a-propos-title'>A propos</h2>
                <div className='border'>
                <p className='a-propos-texte'>Bienvenue sur mon site !<br/><br/>Après une formation en management international et une première carrière 
                    en gestion de projets événementiels, j'ai pivoté vers le développement 
                    logiciel pour allier rigueur technique et vision stratégique.<br/><br/>

                    Actuellement à l'École 42 Lyon, je me forme aux environnements bas-niveau 
                    (C/C++) et aux architectures web modernes (Go/React). Je prépare un 
                    RNCP 7 – Systèmes d'information et réseaux. Mon projet de fin d'études, 
                    Ostrom, est une application fullstack de stockage chiffré E2EE en 
                    architecture microservices — développée en équipe avec Go, React, 
                    TypeScript et PostgreSQL.
                    <br/><br/>Si vous souhaitez en savoir plus sur moi, vous pouvez consulter mon&nbsp;
                    <a href='https://github.com/Noalune12/' className='link-a-propos' target='blank'>
                        GitHub
                    </a>,  &nbsp;
                    <a href="/Lou-Anne-Buisson-CV.pdf" className='link-a-propos' target="_blank" rel="noopener noreferrer">
                        mon CV
                    </a>
                    , et découvrir&nbsp;
                    <a 
                            href='#mes-projets' 
                            className='link-a-propos'
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('mes-projets');
                            }}
                        >
                             mes projets
                    </a>.
                </p>
                </div>
           </div>
        <div className='a-propos-competences'>
        <h2 className='competences-titres'>Mes compétences</h2>
        <div className='competences-content'>

            <div className='competences-text'>
            <h3>Langages</h3>
            <div className='competences-list'>
                <div className='competence-component'>
                <img src={LogoC} alt='C-logo' className='C-logo'/>
                <p>C</p>
                </div>
                <div className='competence-component'>
                <img src={LogoCPP} alt='CPP-logo' className='CPP-logo'/>
                <p>C++</p>
                </div>
                <div className='competence-component'>
                <FaJs/>
                <p>JavaScript</p>
                </div>
                <div className='competence-component'>
                <SiTypescript/>  
                <p>TypeScript</p>
                </div>
                <div className='competence-component'>
                <SiGo/>  
                <p>Go</p>
                </div>
            </div>
            </div>

            <div className='competences-text'>
            <h3>Front-End</h3>
            <div className='competences-list'>
                <div className='competence-component'>
                <FaHtml5/>
                <p>HTML</p>
                </div>
                <div className='competence-component'>
                <FaCss3/>
                <p>CSS</p>
                </div>
                <div className='competence-component'>
                <FaSass/>
                <p>Sass</p>
                </div>
                <div className='competence-component'>
                <FaReact/>
                <p>React</p>
                </div>
            </div>
            </div>

            <div className='competences-text'>
            <h3>Back-End</h3>
            <div className='competences-list'>
                <div className='competence-component'>
                <FaNodeJs/>
                <p>Node.js</p>
                </div>
                <div className='competence-component'>
                <img src={LogoExpress} alt='express-logo' className='express-logo'/>
                <p>Express.js</p>
                </div>
                <div className='competence-component'>
                <SiGo/>
                <p>Fiber</p>
                </div>
            </div>
            </div>

            <div className='competences-text'>
            <h3>Bases de données</h3>
            <div className='competences-list'>
                <div className='competence-component'>
                <SiMongodb/>
                <p>MongoDB</p>
                </div>
                <div className='competence-component'>
                <SiPostgresql/>
                <p>PostgreSQL</p>
                </div>
                <div className='competence-component'>
                <SiRedis/>
                <p>Redis</p>
                </div>
            </div>
            </div>

            <div className='competences-text'>
            <h3>Infrastructure & Outils</h3>
            <div className='competences-list'>
                <div className='competence-component'>
                <SiDocker/>
                <p>Docker</p>
                </div>
                <div className='competence-component'>
                <FaGit/>
                <p>Git</p>
                </div>
                <div className='competence-component'>
                <FaGithub/>
                <p>GitHub</p>
                </div>
                <div className='competence-component'>
                <SiVisualstudiocode/>
                <p>VS Code</p>
                </div>
            </div>
            </div>

        </div>
        </div>
           <div className='a-propos-parcours'>
                <h2 className='parcours-title'>Mon parcours</h2>
                <Timeline/>
            </div>
        </section>
    )

}

export default Apropos