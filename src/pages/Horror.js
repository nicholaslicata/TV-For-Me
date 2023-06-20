import ShowCard from '../components/ShowCard';

function Horror({ showsData, showDetails, setShowDetails }) {

    const horrorShows = showsData.filter((shows) => { 
        if (shows.network && shows.genres.includes('Horror')) {
            return shows;
        }
    });

    return (
        <main className='genre-page-container'>
          <div className='genre-shows-container'>
          {horrorShows.map(shows => {
              return (
                   <ShowCard shows={shows} showNetwork={shows.network.name} showRating={shows.rating.average} showImage={shows.image} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
              )
          })}
          </div>
       </main>
    )
}

export default Horror;