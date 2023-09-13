import {useEffect, useState} from 'react';
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';


//529a4538

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=529a4538'
// Example of movie object
const  movie1 = {
        "Title": "Pulp Fiction",
        "Year": "1994",
        "imdbID": "tt0110912",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchterm] = useState('');
    
        const searchMovies = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            setMovies(data.Search);
        }

        useEffect(() => {
            searchMovies('Airplane');
        }, []);

    return (
        <div className="app">
            <h1>Viewful</h1>

            <div className="search">
                <input 
                    placeholder="Search movies"
                    value={searchTerm}
                    onChange={(e) => setSearchterm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}/>
            </div>

                {movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}   
                        </div>
                    ) :
                    (
                        <div classname="empty">
                            <h2>No movies found</h2>
                        </div>
                    )}
            </div>
    );
};

export default App;