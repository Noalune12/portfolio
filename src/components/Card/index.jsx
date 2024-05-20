import './style.scss'
import { Link } from 'react-router-dom';


function Card({cover, title, link, tags}) {
    return (
        <div className="projects-card">
            <Link to={link} className='card'>
                <img src={cover} alt="" className="card-img"/>
                <h2 className="card-title">{title}</h2>
                <div className="card-tags">
                    {tags.map((tag, index) =>
                    <p key={`${tag}-${index}`}>{tag}</p>)}
                </div>
            </Link>
        </div>
    );
}

export default Card