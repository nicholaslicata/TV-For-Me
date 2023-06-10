import { Link } from 'react-router-dom';

// Pages
import TvShow from '../pages/TvShow';

function ShowCard({ showName, showImage, showDetails, setShowDetails, shows }) {

    function updateCardDetails() {
        setShowDetails({
            name: shows.name,
            img: showImage,
        })
    }

   return (
    <div onClick={updateCardDetails}>
      <Link to='/show:id'>
        <img src={showImage ? showImage.medium : require('../assets/noImage.png')}></img>
      </Link>
      <p>{shows.name}</p>
    </div>
   )

}

export default ShowCard;