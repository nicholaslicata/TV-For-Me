import { useEffect, useState } from 'react';

function Person({ personDetails, personShow, setPersonShow }) {
    const [personData, setPersonData] = useState();

    const personApi = `https://api.tvmaze.com/people/${personDetails.id}/castcredits?embed=show`;

    // const personShows = personData.map((personShow => {
    //     console.log(personShow);
    // }))

       useEffect(() => {
        fetch(personApi)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setPersonData(data);
          console.log(personData);
        })
    }, [])

        // useEffect(() => {
        //     console.log(personData)
        // }, [personData])



    return (
        <div>
            <img src={!personDetails.img ? require('../assets/noImage.png') : personDetails.img.medium} className="show-img" alt={personDetails.name}></img>
            <h1>{personDetails.name = null ? 'N/A' : personDetails.name}</h1>
            <p>{personDetails.birthday === null ? 'N/A' : personDetails.birthday}</p>
            <p>{personDetails.country === null ? 'N/A' : personDetails.country.name}</p>
            {/* <p>Know for {personData[0]._links}</p> */}
        </div>
    )
}

export default Person;