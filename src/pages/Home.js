import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes, } from 'react-router-dom';

// Components
import ShowCard from '../components/ShowCard';
import PersonCard from '../components/PersonCard';

function Home({ showDetails, setShowDetails, }) {
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
    //  const firstTwentyShows = tvShows.filter((shows, index) => {
    //     return index < 20;
    // })

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

    console.log(discoverShows);


    return (
        <main className='home-container'>
            <div className='show-cards-container'>
        {firstTwentyShows.map(shows => {
            return(
                <ShowCard shows={shows} showImage={shows.image} showDetails={showDetails} setShowDetails={setShowDetails} key={shows.id} />
            )
        })}
            </div>
        {/* {firstTwentyPeople.map(people => {
            return(
                <PersonCard />
            )
        })} */}
        </main>
    )
}

export default Home;