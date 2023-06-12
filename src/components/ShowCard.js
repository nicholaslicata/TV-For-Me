import { Link } from 'react-router-dom';

// Pages
import TvShow from '../pages/TvShow';

function ShowCard({ showImage, showDetails, setShowDetails, shows }) {

    function updateCardDetails() {
        setShowDetails({
            name: shows.name,
            img: showImage,
        })
    }

   return (
    <div onClick={updateCardDetails} className='show-card'>
      <Link to='/show:id'>
        <img src={showImage ? showImage.medium : require('../assets/noImage.png')} className='show-card-img'></img>
      </Link>
      <p className='show-card-name'>{shows.name}</p>
    </div>
   )

}

export default ShowCard;