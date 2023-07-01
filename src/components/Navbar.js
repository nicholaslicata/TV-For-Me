 import { Link, useNavigate } from 'react-router-dom';
 import { FaSearch, FaTv } from 'react-icons/fa'
 import { useRef } from 'react';

function Navbar({ toggleNav, navActive, closeNav, toggleInput, inputActive, search, handleSearch, handleSubmit }) {

    const navigate = useNavigate();

    const inputRef = useRef(null);

    return (
        <header className='navbar-container'>
            <div onClick={toggleNav} className='hamburger-btn'>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
            </div>
            <div className='logo-container'>
                <FaTv className='tv' />
                <Link onClick={closeNav} className='logo' to='/'>TV For Me</Link>
            </div>
            <button onClick={() => {toggleInput(); inputRef.current.focus()}} className='search-btn' aria-label='open-search-bar'>
                <FaSearch />
            </button>
            <form onSubmit={(e) => {handleSubmit(e); navigate('/show');}} className={inputActive ? 'input-active' : 'input-container'}>
                <input id='search' ref={inputRef} onChange={handleSearch} value={search} className='nav-input' type='text' autoComplete='off' placeholder='Search for shows...' required></input>
            </form>
            <nav className={navActive ? 'nav-active' : 'nav'}>
                <Link onClick={closeNav} className='nav-link' to='action'>Action</Link>
                <Link onClick={closeNav} className='nav-link' to='comedy'>Comedy</Link>
                <Link onClick={closeNav} className='nav-link' to='crime'>Crime</Link>
                <Link onClick={closeNav} className='nav-link' to='drama'>Drama</Link>
                <Link onClick={closeNav} className='nav-link' to='horror'>Horror</Link>
                <Link onClick={closeNav} className='nav-link' to='romance'>Romance</Link>
                <Link onClick={closeNav} className='nav-link' to='mywatchlist'>My Watchlist</Link>
            </nav>
        </header>
    )
}

export default Navbar;