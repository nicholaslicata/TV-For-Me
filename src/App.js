import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes, } from 'react-router-dom';

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
import TvShow from './pages/TvShow';
import Person from './pages/Person';
import PageNotFound from './pages/PageNotFound';

function App() {
  const [navActive, setNavActive] = useState(false);
  const [inputActive, setInputActive] = useState(false);
  const [showsData, setShowsData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [showDetails, setShowDetails] = useState({
    name: '',
    img: '',
    genre: '',
    premiered: '',
    ended: '',
    network: '',
    summary: '',
    rating: '',
    id: '',
  });
  const [personDetails, setPersonDetails] = useState({
    name: '', 
    birthday: '',
    country: '',
    img: '',
    id: '',
  })

  const showsApi = `https://api.tvmaze.com/shows`;
  const peopleApi = `https://api.tvmaze.com/people`

  useEffect(() => {
    fetch(showsApi)
      .then(res => {
       return res.json();
    })
      .then(data => {
       setShowsData(data);
    })
    fetch(peopleApi)
      .then(res => {
       return res.json();
    })
       .then(data => {
        setPeopleData(data);
    })
}, [])

  useEffect(() => {
    window.addEventListener('resize', function() {
      if (window.innerWidth > 1024 && navActive) {
        closeNav();
      }
      if (window.innerWidth > 1024 && inputActive) {
        closeInput();
      }
    })
  }, [])

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
        <Route path='/'>
          <Route index element={<Home showsData={showsData} peopleData={peopleData} setPeopleData={setPeopleData} showDetails={showDetails} setShowDetails={setShowDetails} setPersonDetails={setPersonDetails} />} />
          <Route path={`/show/:name`} element={<TvShow showDetails={showDetails}/>} />
          <Route path='/person/:id' element={<Person personDetails={personDetails} />} />
        </Route>
        <Route path='action' element={<Action showsData={showsData} showDetails={showDetails} setShowDetails={setShowDetails}  />}> 
          {/* <Route index element={<Action showsData={showsData} showDetails={showDetails} setShowDetails={setShowDetails}  />} /> */}
          <Route path='/action/show/:name' element={<TvShow showDetails={showDetails}/>} />
        </Route>
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
