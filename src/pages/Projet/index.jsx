import './style.scss';
import { useFetch } from '../../utils/usefetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
// import Error404 from '../Error404';
import { useParams } from 'react-router-dom';

function Projet () {
    const projets = useFetch(window.location.origin + '/data.json')
    const {projetId} = useParams();

    let thisProjet
    if(projets.data) {
        thisProjet = projets.data.find(
            (projet) => projet.id === projetId
        )
    }
    if(projets.isLoading) {
        return <Loading />;
    }
    if (projets.error) {
        return <Error />;
    }
    // if(!thisProjet) {
    //     return <Error404 />
    // }

    const handleGithubLinkClick = () => {
        if (thisProjet && thisProjet.github) {
            window.open(thisProjet.github, '_blank'); 
        }
      };

      const handleSiteLinkClick = () => {
        if (thisProjet && thisProjet.link) {
            window.open(thisProjet.link, '_blank'); 
        }
      };

      
    return (
        <div className='project'>
            <h1>{thisProjet.title}</h1>
            <h2>{thisProjet.subtitle}</h2>
            <img src={thisProjet.cover} alt='project-img' />
            <ul>
                {thisProjet.tags.map((tag, index) =>
                <li key={`${tag}-${index}`}>{tag}</li>)}
            </ul>
            <button onClick={handleGithubLinkClick}>Consulter le code</button>
            {thisProjet.link && (<button onClick={handleSiteLinkClick}>Voir le site</button>)}
            <p>{thisProjet.description}</p>
            <ul>
                {thisProjet.skills.map((skill, index) =>
                <li key={`${skill}-${index}`}>{skill}</li>)}
            </ul>
        </div>
    )

}

export default Projet