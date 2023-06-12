import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes, } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Components
import ShowCard from '../components/ShowCard';
import PersonCard from '../components/PersonCard';

function Home({ showDetails, setShowDetails, personDetails, setPersonDetails }) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 3
        }
      };

    const [discoverShows, setDiscoverShows] = useState([]);
    const [discoverPeople, setDiscoverPeople] = useState([]);

    const randomNumber = Math.random() * 50;
    const wholeNumber = Math.floor(randomNumber);
    const showsApi = `https://api.tvmaze.com/shows?page=${wholeNumber}`;
    // const showsApi = `https://api.tvmaze.com/shows?page=1`;
    const peopleApi = `https://api.tvmaze.com/people?page=${wholeNumber}`;

    const firstTwentyShows = discoverShows.filter((shows, index) => {
        return index < 20;
    })

    const firstTwentyPeople = discoverPeople.filter((people, index) => {
        return index < 20;
    })

    useEffect(() => {
        fetch(showsApi)
          .then(res => {
           return res.json();
        })
          .then(data => {
           setDiscoverShows(data);
        })
        fetch(peopleApi)
          .then(res => {
           return res.json();
        })
           .then(data => {
            setDiscoverPeople(data);
        })
    }, [])

    // console.log(discoverShows);
    console.log(discoverPeople);


    return (
        <main className='home-container'>
            <div className='discover-shows-container'>
              <p className='discover-shows'>Discover Shows</p>
                <Carousel responsive={responsive} infinite={true} containerClass='shows-carousel-container' itemClass='show-card'> 
              {firstTwentyShows.map(shows => {
               return(
                <ShowCard shows={shows} showImage={shows.image} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
               )
            })}
               </Carousel>
            </div>
            <div className='discover-people-container'>
              <p className='discover-people'>Discover People</p>
                <Carousel responsive={responsive} infinite={true} containerClass='people-carousel-container' itemClass='person-card'>
              {firstTwentyPeople.map(people => {
              return(
                <PersonCard people={people} personImage={people.image} personDetails={personDetails} setPersonDetails={setPersonDetails} key={people.id}/>
               )
            })}
                </Carousel>
            </div>
        </main>
    )
}

export default Home;