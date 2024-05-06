import { useFetch } from '../../utils/usefetch'
import React from 'react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Accueil from '../../sections/Accueil';
import Apropos from '../../sections/A-propos';


function Home () {
    

    const projets = useFetch(window.location.origin + '/data.json')
    console.log(projets)
    if(projets.isLoading) {
        return <Loading />;
    }
    if (projets.error) {
        return <Error />;
    }

        return (
    <div className='home-page'>
        <Accueil />
        <Apropos />
        {/* <h1>Projets</h1>
        <div className='projets'>
            {projets.data.map((projet, index) => (
                <div key={projet.id}>
                    <h2>{projet.title}</h2>
                    <img src={projet.cover} alt={projet.title} />
                </div>
            ))}
        </div>      */}
    </div>
        );
}

export default Home
