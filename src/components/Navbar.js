 import { Link } from 'react-router-dom';

function Navbar({ toggleNav, navActive, closeNav }) {
    return (
        <header className='navbar-container'>
            <div className='logo-container'>
                <Link onClick={closeNav} className='logo' to='/'>TV For Me</Link>
            </div>
            <nav className={navActive ? 'nav-active' : 'nav'}>
                <div className='input-container'>
                    <input className='nav-input' type='text' placeholder='Search for shows' required></input>
                </div>
                <Link onClick={closeNav} className='nav-link' to='action'>Action</Link>
                <Link onClick={closeNav} className='nav-link' to='comedy'>Comedy</Link>
                <Link onClick={closeNav} className='nav-link' to='crime'>Crime</Link>
                <Link onClick={closeNav} className='nav-link' to='drama'>Drama</Link>
                <Link onClick={closeNav} className='nav-link' to='horror'>Horror</Link>
                <Link onClick={closeNav} className='nav-link' to='romance'>Romance</Link>
                <Link onClick={closeNav} className='nav-link' to='mywatchlist'>My Watchlist</Link>
            </nav>
            <div onClick={toggleNav} className='hamburger-btn'>
                    <span className='hamburger-line'></span>
                    <span className='hamburger-line'></span>
                    <span className='hamburger-line'></span>
                </div>
        </header>
    )
}

export default Navbar;