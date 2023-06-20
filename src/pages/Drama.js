import ShowCard from '../components/ShowCard';

function Drama({ showsData, showDetails, setShowDetails }) {

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
                   <ShowCard shows={shows} showNetwork={shows.network.name} showRating={shows.rating.average} showImage={shows.image} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
              )
           })}
          </div>
       </main>
    )
}

export default Drama;