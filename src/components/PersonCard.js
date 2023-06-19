import { Link } from 'react-router-dom';

// Pages
import Person from '../pages/Person';

function PersonCard({ personImage, setPersonDetails, people, personCountry }) {
    
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
            <Link to='/person/:id'>
                <img src={!personImage ? require('../assets/noImage.png') : personImage.medium} className='person-card-img'></img>
            </Link>
            <p className='person-card-name'>{people.name}</p>
        </div>
    )
}

export default PersonCard;