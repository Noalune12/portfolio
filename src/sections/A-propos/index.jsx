import './style.scss';

function Apropos () {
    return (
        <section className='a-propos' id='a-propos'>
            <div className='a-propos-section'>
                <h2 className='a-propos-title'>A propos</h2>
                <p className='a-propos-texte'>Texte à propos</p>
           </div>
           <div className='a-propos-competences'>
                <h2 className='competences-titres'>Mes compétences</h2>
                <p className='competences-texte'>Texte compétences</p>
           </div>
           {/* A ajouter : outils, savoit-être, parcours?? */}
        </section>
    )

}

export default Apropos