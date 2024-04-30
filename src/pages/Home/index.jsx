import { useFetch } from '../../utils/usefetch'
import React, { useEffect } from 'react';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


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
        <h1>Projets</h1>
        <div className='projets'>
            {projets.data.map((projet, index) => (
                <h2 key={index}>{projet.title}</h2>
            ))}
        </div>     
    </div>
        );
}

export default Home
