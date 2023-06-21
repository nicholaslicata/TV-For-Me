import ShowCard from '../components/ShowCard';

function MyWatchlist({ showDetails, setShowDetails, watchList }) {
    return (
       <main className='genre-page-container'>
          {watchList.length > 0 ? (
            <div className='genre-shows-container'>
                {watchList.map((shows) => (
                    <ShowCard shows={shows} showNetwork={shows.network} showRating={shows.rating} showImage={shows.img} showGenre={shows.genres} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
                ))}
            </div>
          ) : (<h1 className='watchlist-empty'>Your watch list is empty</h1>)
          }
       </main>
    )
}

export default MyWatchlist;