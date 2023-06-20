import ShowCard from '../components/ShowCard';

function Crime({ showsData, showDetails, setShowDetails }) {

    const crimeShows = showsData.filter((shows) => { 
        if (shows.network && shows.genres.includes('Crime')) {
            return shows;
        }
    });

    return (
       <main className='genre-page-container'>
          <div className='genre-shows-container'>
          {crimeShows.map(shows => {
                return (
                     <ShowCard shows={shows} showNetwork={shows.network.name} showRating={shows.rating.average} showImage={shows.image} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
                )
          })}
          </div>
       </main>
    )
}

export default Crime;