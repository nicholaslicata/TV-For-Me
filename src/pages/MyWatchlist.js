import ShowCard from '../components/ShowCard';
import DeleteBtn from '../components/DeleteBtn';

function MyWatchlist({ showDetails, setShowDetails, watchList, handleDeleteShow, isError, setIsError }) {
    return (
       <main className='genre-page-container'>
          {watchList.length > 0 ? (
            <div className='genre-shows-container'>
                {watchList.map((shows) => (
                    <div>
                    <ShowCard shows={shows} showNetwork={shows.network} showRating={shows.rating} showImage={shows.img} showGenre={shows.genres} showDetails={showDetails} setShowDetails={setShowDetails} isError={isError} setIsError={setIsError} key={shows.id} />
                    <DeleteBtn handleDeleteShow={handleDeleteShow} showId={shows.id} />
                    </div>
                ))} 
            </div>
          ) : (<h1 className='watchlist-empty'>Your watch list is empty</h1>)
          }
       </main>
    )
}

export default MyWatchlist;