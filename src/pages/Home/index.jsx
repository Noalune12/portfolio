import React from 'react';
import Accueil from '../../sections/Accueil';
import Apropos from '../../sections/A-propos';
import MesProjets from '../../sections/Projets';


function Home () {
        return (
    <div className='home-page'>
        <Accueil />
        <Apropos />
        <MesProjets />
    </div>
        );
}

export default Home
