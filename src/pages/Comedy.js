import ShowCard from '../components/ShowCard';

function Comedy({ showsData, showDetails, setShowDetails }) {

    const comedyShows = showsData.filter((shows) => { 
        if (shows.network && shows.genres.includes('Comedy')) {
            return shows;
        }
    });

    return (
        <main className='genre-page-container'>
            <div className='genre-shows-container'>
            {comedyShows.map(shows => {
                   return(
                       <ShowCard shows={shows} showNetwork={shows.network.name} showRating={shows.rating.average} showImage={shows.image} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
                   )
            })}
            </div>
        </main>
    )
}

export default Comedy;