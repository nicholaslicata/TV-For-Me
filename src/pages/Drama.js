import ShowCard from '../components/ShowCard';

function Drama({ showsData, showDetails, setShowDetails, isError, setIsError }) {

    const dramaShows = showsData.filter((shows) => { 
        if (shows.network && shows.genres.includes('Drama')) {
            return shows;
        }
    });

    return (
        <main className='genre-page-container'>
           <div className='genre-shows-container'>
           {dramaShows.map(shows => {
              return (
                   <ShowCard shows={shows} showNetwork={shows.network.name} showRating={shows.rating.average} showImage={shows.image} showGenre={shows.genres} showDetails={showDetails} setShowDetails={setShowDetails} isError={isError} setIsError={setIsError} key={shows.id} />
              )
           })}
          </div>
       </main>
    )
}

export default Drama;