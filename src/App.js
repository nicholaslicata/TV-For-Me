import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import uniqid  from 'uniqid'

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
  const [search, setSearch] = useState('');
  const [singleSearch, setSingleSearch] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [watchList, setWatchList] = useState([]);
  const [showsData, setShowsData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [showDetails, setShowDetails] = useState({
    name: '',
    img: '',
    genres: '',
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
  const peopleApi = `https://api.tvmaze.com/people`;
  const singleSearchApi = `https://api.tvmaze.com/singlesearch/shows?q=${search}`;

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

     useEffect(() => {
        if (search && isSubmitted) {
        fetch(singleSearchApi)
          .then(res => {
            return res.json();
          })
          .then(data => {
            setSingleSearch(data);
          })
        }
          setSearch('');
          setIsSubmitted(false);
  
      }, [isSubmitted])
      
      useEffect(() => {
        if (singleSearch) {
            setShowDetails((prev) => {
              return {
                ...prev,
               name: singleSearch.name,
               img: singleSearch.image,
               genres: singleSearch.genres,
               premiered: singleSearch.premiered,
               ended: singleSearch.ended,
               network: singleSearch.network.name,
               summary: singleSearch.summary,
               rating: singleSearch.rating.average,
              }
          })
          }
      }, [singleSearch])

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

  function handleAddShow() {
    let isPresent = false;
    watchList.forEach((tvShow) => {
      if(showDetails.name === tvShow.name) {
      isPresent = true;
      }
    })

  const watchListShow = {
    name: showDetails.name,
    img: showDetails.img,
    genres: showDetails.genres,
    premiered: showDetails.premiered,
    ended: showDetails.ended,
    network: showDetails.network,
    summary: showDetails.summary,
    rating: showDetails.rating,
    id: uniqid(),
  }

  if (isPresent) {
    return;
  } else {
    setWatchList((prev) => {
        return [
            ...prev,
                watchListShow
        ]
    })
  }
}

function handleDeleteShow(id) {
  const updatedWatchList = watchList.filter((show) => show.id !== id);
  setWatchList(updatedWatchList);
}

function handleSearch(e) {
  setSearch(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
    setIsSubmitted(true);
}

  return (
    <HashRouter>
      <Navbar toggleNav={toggleNav} navActive={navActive} closeNav={closeNav} toggleInput={toggleInput} inputActive={inputActive} closeInput={closeInput} handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <Routes>
        <Route path='/'>
          <Route index element={<Home showsData={showsData} peopleData={peopleData} setPeopleData={setPeopleData} showDetails={showDetails} setShowDetails={setShowDetails} setPersonDetails={setPersonDetails} />} />
          <Route path='/show' element={<TvShow showDetails={showDetails} handleAddShow={handleAddShow} />} />
          <Route path='/person' element={<Person personDetails={personDetails} />} />
        </Route>
        <Route path='action' element={<Action showsData={showsData} showDetails={showDetails} setShowDetails={setShowDetails}  />} />
        <Route path='comedy' element={<Comedy showsData={showsData} showDetails={showDetails} setShowDetails={setShowDetails} />} />
        <Route path='crime' element={<Crime showsData={showsData} showDetails={showDetails} setShowDetails={setShowDetails} />} />
        <Route path='drama' element={<Drama showsData={showsData} showDetails={showDetails} setShowDetails={setShowDetails} />} />
        <Route path='horror' element={<Horror showsData={showsData} showDetails={showDetails} setShowDetails={setShowDetails} />} />
        <Route path='romance' element={<Romance showsData={showsData} showDetails={showDetails} setShowDetails={setShowDetails} />} />
        <Route path='mywatchlist' element={<MyWatchlist showDetails={showDetails} setShowDetails={setShowDetails} watchList={watchList} handleDeleteShow={handleDeleteShow} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
