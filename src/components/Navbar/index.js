import React, {useState} from 'react';
import './style.css';

const Navbar = () => {

    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert("Searched");
    }

    const openSearch = () => {
        setSearch(true);
    }
    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass}placeholder="Search..." />
                    <img src={require('../../assets/icons/search.png')} alt="Search" className="searchIcon" onClick={openSearch} />
                </form>
            </div>
        </div>
    );
}

export default Navbar;
