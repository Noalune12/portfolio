import './style.scss';
import Timeline from '../../components/Timeline';

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
                <p className='a-propos-texte'>Bienvenue sur mon site !<br/><br/>Je suis développeuse web junior, passionnée par le web et les nouvelles technologies. Spécialisée dans le front-end, j'ai également des connaissances en back-end, ce qui me donne une vision globale des projets. Mon approche met les besoins et les préférences des utilisateurs au centre de la conception et du développement.
                    <br/><br/>Si vous souhaitez en savoir plus sur moi, vous pouvez consulter mon&nbsp;
                    <a href='https://github.com/Noalune12/' className='link-a-propos' target='blank'>
                        GitHub
                    </a>, 
                    mon CV, et découvrir&nbsp;
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
                    <div className='competences-texte'>
                        
                        <div className='competences-liste'>
                            <h3>Front-end</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Sass</li>
                                </ul>
                        </div>

                        <div className='competences-liste'>
                            <h3>Back-end</h3>
                                <ul>
                                    <li>Express.js</li>
                                    <li>Node.js</li>
                                    <li>MongoDB</li>
                                    <li>Mongoose</li>
                                </ul>
                        </div>

                        <div className='competences-liste'>
                            <h3>Outils</h3>
                                <ul>
                                    <li>Visual Studio Code</li>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>Google Lighthouse</li>
                                </ul>
                        </div>
                    </div>
           </div>
           <div className='a-propos-parcours'>
                <h2 className='parcours-title'>Mon parcours</h2>
                <Timeline/>
                {/* <ul>
                    <li> 
                        <div className='date'>2016 - 2019</div>
                        <div className='title'>Master</div>
                        <div className='descr'>aaaaaa</div>
                    </li>
                    <li>
                        <div className='date'>2024</div>
                        <div className='title'>Openclassrooms</div>
                        <div className='descr'>aaaaaa</div>
                    </li>
                </ul> */}
            </div>
        </section>
    )

}

export default Apropos