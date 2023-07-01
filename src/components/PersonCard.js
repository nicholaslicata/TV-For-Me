import { Link } from 'react-router-dom';

// Pages
import Person from '../pages/Person';

function PersonCard({ personImage, personDetails, setPersonDetails, people, personCountry }) {

    function updatePersonDetails() {
        setPersonDetails({
            name: people.name,
            birthday: people.birthday,
            country: personCountry,
            img: personImage,
            id: people.id,
        })
    }

    return (
        <div onClick={updatePersonDetails} className='person-card'>
            <Link to='/person'>
                <img src={!personImage ? require('../assets/noImage.png') : personImage.medium} className='person-card-img' alt={personDetails.name}></img>
            </Link>
            <p className='person-card-name'>{people.name}</p>
        </div>
    )
}

export default PersonCard;