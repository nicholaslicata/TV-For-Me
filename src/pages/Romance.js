import ShowCard from '../components/ShowCard';

function Romance({ showsData, showDetails, setShowDetails }) {

    const romanceShows = showsData.filter((shows) => { 
        if (shows.network && shows.genres.includes('Romance')) {
            return shows;
        }
    });

    return (
        <main className='genre-page-container'>
           <div className='genre-shows-container'>
           {romanceShows.map(shows => {
            return (
                 <ShowCard shows={shows} showNetwork={shows.network.name} showRating={shows.rating.average} showImage={shows.image} showGenre={shows.genres} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
            )
           })}
          </div>
       </main>
    )
}

export default Romance;