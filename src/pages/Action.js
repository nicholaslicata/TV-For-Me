import ShowCard from '../components/ShowCard';

function Action({ showsData, showDetails, setShowDetails }) {

     const actionShows = showsData.filter((shows) => {
         if (shows.network && shows.genres.includes('Action')) {
             return shows;
        }
    });

    return (
        <main className='genre-page-container'>
          <div className='genre-shows-container'>
          {actionShows.map(shows => {
                 return (
                     <ShowCard shows={shows} showNetwork={shows.network.name} showRating={shows.rating.average} showImage={shows.image} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
                 )
          })}
          </div>
        </main>
    )
}

export default Action;