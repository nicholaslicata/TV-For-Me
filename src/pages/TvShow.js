import AddBtn from '../components/AddBtn';

function TvShow({ showDetails }) {

     return (
        <main className='show-page-container'>
            <section className='show-page-main-content'>
              <div className='show-page-img-container'>
                <img src={!showDetails.img ? require('../assets/noImage.png') : showDetails.img.medium} className="show-page-img" alt={showDetails.name}></img>
              </div>
              <div className='show-page-inner-container'>
                <h1 className='show-page-title'>{showDetails.name}</h1>
                <p className='show-page-rating'>Rating: {showDetails.rating}</p>
                <AddBtn />
                <p className='show-page-summary'>{showDetails.summary.replace(/(<([^>]+)>)/gi, '')}</p>
              </div>
            </section>
            <aside className='show-page-secondary-content'>
                <div className='show-page-divider'>
                    <p className='show-page-divider-title'>Genres:</p>
                    <p className='show-page-divider-subtext'>{showDetails.genres}</p>
                </div>
                <div className='show-page-divider'>
                    <p className='show-page-divider-title'>Premiere date:</p>
                    <p className='show-page-divider-subtext'>{showDetails.premiered}</p>
                </div>
                <div className='show-page-divider'>
                    <p className='show-page-divider-title'>End date:</p>
                    <p className='show-page-divider-subtext'>{showDetails.ended}</p>
                </div>
                <div className='show-page-divider'>
                    <p className='show-page-divider-title'>Network:</p>
                    <p className='show-page-divider-subtext'>{showDetails.network}</p>
                </div>
            </aside>
        </main>
    
    )
}

export default TvShow;