import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Components
import ShowCard from '../components/ShowCard';
import PersonCard from '../components/PersonCard';

function Home({ showsData, peopleData, showDetails, setShowDetails, setPersonDetails, }) {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 768, min: 500 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 3
        }
      };

    const firstTwentyShows = showsData.filter((shows, index) => {
        return index < 20;
    })

    const firstTwentyPeople = peopleData.filter((people, index) => {
        return index < 20;
    })

    return (
        <main className='home-container'>
            <section className='discover-shows-container'>
              <p className='discover-shows'>Discover Shows</p>
              <p className='discover-shows-tag'>An assortment of shows for you to discover</p>
                <Carousel responsive={responsive} infinite={true} containerClass='shows-carousel-container' itemClass='show-card'> 
              {firstTwentyShows.map(shows => {
               return(
                <ShowCard shows={shows} showNetwork={shows.network.name} showRating={shows.rating.average} showImage={shows.image} showGenre={shows.genres} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
               )
            })}
               </Carousel>
            </section>
            <section className='discover-people-container'>
              <p className='discover-people'>Discover People</p>
              <p className='discover-people-tag'>Find your new favorite actor or actress</p>
                <Carousel responsive={responsive} infinite={true} containerClass='people-carousel-container' itemClass='person-card'>
              {firstTwentyPeople.map(people => {
              return(
                <PersonCard people={people} personImage={people.image} personCountry={people.country} setPersonDetails={setPersonDetails} key={people.id}/>
               )
            })}
                </Carousel>
            </section>
        </main>
    )
}

export default Home;