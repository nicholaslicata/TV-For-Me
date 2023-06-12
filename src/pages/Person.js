import { useEffect } from 'react';

function Person({ personDetails }) {

    // const personApi = `https://api.tvmaze.com/people/${personDetails.id}/castcredits?embed=show`;

    // useEffect(() => {
    //     fetch(personApi)
    //       .then(res => {
    //        return res.json();
    //     })
    //       .then(data => {
    //         console.log(data);
    //     })
    // }, [])  

    // console.log(personDetails.id);

    return (
        <div>
            <h1>{personDetails.name}</h1>
            <img src={!personDetails.img ? require('../assets/noImage.png') : personDetails.img.medium} className="show-img" alt={personDetails.name}></img>
        </div>
    )
}

export default Person;