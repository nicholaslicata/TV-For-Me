 import { Link } from 'react-router-dom';
 import { FaSearch } from 'react-icons/fa'

function Navbar({ toggleNav, navActive, closeNav, toggleInput, inputActive, closeInput  }) {
    return (
        <header className='navbar-container'>
            <div onClick={toggleNav} className='hamburger-btn'>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
            </div>
            <div className='logo-container'>
                <Link onClick={closeNav} className='logo' to='/'>TV For Me</Link>
            </div>
            <button onClick={toggleInput} className='search-btn'>
                <FaSearch />
            </button>
            <div className={inputActive ? 'input-active' : 'input-container'}>
                <input className='nav-input' type='text' placeholder='Search for shows' required></input>
            </div>
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