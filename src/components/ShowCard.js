import { Link } from 'react-router-dom';

// Pages
import TvShow from '../pages/TvShow';

function ShowCard({ showImage, showDetails, setShowDetails, shows, showNetwork, showRating }) {

    function updateCardDetails() {
        setShowDetails({
            name: shows.name,
            img: showImage,
            genres: shows.genres,
            premiered: shows.premiered,
            ended: shows.ended,
            network: showNetwork,
            summary: shows.summary,
            rating: showRating,
        })
    }

   return (
    <div onClick={updateCardDetails} className='show-card'>
      <Link to='/show/:name'>
        <img src={showImage ? showImage.medium : require('../assets/noImage.png')} className='show-card-img'></img>
      </Link>
      <p className='show-card-name'>{shows.name}</p>
    </div>
   )

}

export default ShowCard;