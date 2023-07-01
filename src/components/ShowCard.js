import { Link } from 'react-router-dom';

// Pages
import TvShow from '../pages/TvShow';

function ShowCard({ showImage, showDetails, setShowDetails, shows, showNetwork, showRating, showGenre, isError, setIsError }) {

    function updateCardDetails() {
        setShowDetails({
            name: shows.name,
            img: showImage,
            genres: showGenre,
            premiered: shows.premiered,
            ended: shows.ended,
            network: showNetwork,
            summary: shows.summary,
            rating: showRating,
        })
    }

   return (
    <div onClick={() => { if (isError) {setIsError(false)} updateCardDetails()}} className='show-card'>
      <Link to='/show'>
        <img src={showImage ? showImage.medium : require('../assets/noImage.png')} className='show-card-img' alt={showDetails.name}></img>
      </Link>
      <p className='show-card-name'>{shows.name}</p>
    </div>
   )

}

export default ShowCard;