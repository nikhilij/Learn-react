import './Search.css';

const Search = () => {
    return (
        <div className="search-box">
            <label htmlFor="search-box">Search Location</label>
            <input type="search" name="search-city" id="search-box" placeholder="Enter a city" />
        </div>
    );
};

export default Search;