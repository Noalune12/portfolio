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
    return (
        <h1>{thisProjet.title}</h1>
    )

}

export default Projet