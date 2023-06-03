import { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';

function App() {

  useEffect(() => {
    getTVData();
  })

  const comedies = [];

  async function getTVData() {
    const randomNumber = Math.random() * 50;
    const wholeNumber = Math.floor(randomNumber);
    const api = `https://api.tvmaze.com/shows`
    // console.log(randomNumber);
    // console.log(wholeNumber);

    
     try {
      const response = await fetch(api);
      const data = await response.json();
      // console.log(data);
      // data.forEach((d) => {
      //   if (d.genres.includes('Romance')) {
      //     comedies.push(d);
      //     console.log(d.name);
      //   }
      // })
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div> 
      <Navbar />
    </div>
  );
}

export default App;
