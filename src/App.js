import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Action from './pages/Action';
import Comedy from './pages/Comedy';
import Crime from './pages/Crime';
import Drama from './pages/Drama';
import Horror from './pages/Horror';
import Romance from './pages/Romance';
import MyWatchlist from './pages/MyWatchlist';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [navActive, setNavActive] = useState(false);
  const [inputActive, setInputActive] = useState(false);

  useEffect(() => {
    getTVData();
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navActive) {
        closeNav();
      }
      if (window.innerWidth > 768 && inputActive) {
        closeInput();
      }
    })
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

  function toggleNav() {
    setNavActive(!navActive);
  }

  function closeNav() {
    setNavActive(false);
  }

  function toggleInput() {
    setInputActive(!inputActive);
  }

  function closeInput() {
    setInputActive(false);
  }

  return (
    <HashRouter>
      <Navbar toggleNav={toggleNav} navActive={navActive} closeNav={closeNav} toggleInput={toggleInput} inputActive={inputActive} closeInput={closeInput} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='action' element={<Action />} />
        <Route path='comedy' element={<Comedy />} />
        <Route path='crime' element={<Crime />} />
        <Route path='drama' element={<Drama />} />
        <Route path='horror' element={<Horror />} />
        <Route path='romance' element={<Romance />} />
        <Route path='mywatchlist' element={<MyWatchlist />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
