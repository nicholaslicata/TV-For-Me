
function TvShow({ showDetails }) {

    return (
        <div>
            <h1>{showDetails.name}</h1>
            <img src={!showDetails.img ? require('../assets/noImage.png') : showDetails.img.medium} alt={showDetails.name}></img>
        </div>
    
    )
}

export default TvShow;