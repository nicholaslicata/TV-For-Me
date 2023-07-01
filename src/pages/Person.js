import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

function Person({ personDetails }) {
    const [personData, setPersonData] = useState();

    const personApi = `https://api.tvmaze.com/people/${personDetails.id}/castcredits?embed=show`;

       useEffect(() => {
        fetch(personApi)
        .then(res => {
          return res.json();
        })
        .then(data => {
          setPersonData(data);
        })
    }, [])

    return (
        <main className='person-page-container'>
            <div className='person-page-img-container'>
              <img src={!personDetails.img ? require('../assets/noImage.png') : personDetails.img.medium} className="person-page-img" alt={personDetails.name}></img>
            </div>
            <section className='person-page-text'>
              <h1 className='person-page-name'>{personDetails.name = null ? 'N/A' : personDetails.name}</h1>
                <div className='person-page-divider'>
                  <p className='person-page-divider-title'>Birthday:</p>
                  <p className='person-page-divider-subtext'>{personDetails.birthday === null ? 'N/A' : personDetails.birthday}</p>
                </div>
                <div className='person-page-divider'>
                  <p className='person-page-divider-title'>Birth Place:</p>
                  <p className='person-page-divider-subtext'>{personDetails.country === null ? 'N/A' : personDetails.country.name}</p>
                </div>
                <div className='person-page-divider'>
                  <p className='person-page-divider-title'>Known for:</p>
                  <ul>
                  {personData ? personData.map(show => {
                    return (
                        <li key={uniqid()} className='known-for-shows'>{show._embedded.show.name === null ? 'N/A' : show._embedded.show.name}</li>
                      )
                   }) : null}
                  </ul>
                </div>
            </section>
        </main>
    )
}

export default Person;