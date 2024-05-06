import './style.scss';
import Coding from '../../assets/coding.png'

function Accueil () {
    return (
        <div className='accueil-section'>
            <div className='left-side-page'>
                <img src={Coding} alt='icon-coding' className='icon-coding'/>
            </div>
            <div className='right-side-page'>
                <p className='my-name'>Lou-Anne Buisson</p>
                <p className='dev-web'>Développeuse Web</p>
            </div>
        </div>
    )

}

export default Accueil