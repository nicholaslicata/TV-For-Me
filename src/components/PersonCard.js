import { Link } from 'react-router-dom';

// Pages
import Person from '../pages/Person';

function PersonCard({ personImage, personDetails, setPersonDetails, people}) {
    
    function updatePersonDetails() {
        setPersonDetails({
            name: people.name,
            img: personImage,
            id: people.id,
        })
    }

    return (
        <div onClick={updatePersonDetails} className='person-card'>
            <Link to='/person:id'>
                <img src={personImage ? personImage.medium : require('../assets/noImage.png')} className='person-card-img'></img>
            </Link>
            <p className='person-card-name'>{people.name}</p>
        </div>
    )
}

export default PersonCard;