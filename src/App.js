import {useEffect} from 'react'
import './App.css';
import SearchIcon from './search.svg'

//529a4538

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=529a4538'
const  movie1 = {
        "Title": "Pulp Fiction",
        "Year": "1994",
        "imdbID": "tt0110912",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
}

const App = () => {
    
        const searchMovies = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            console.log(data.Search);
        }

        useEffect(() => {
            searchMovies('Pulp Fiction');
        }, []);

    return (
        <div className="app">
            <h1>Viewful</h1>

            <div className="search">
                <input 
                    placeholder="Search movies"
                    values="Gone with the Wind"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}>
                </img>
            </div>

            <div className="container">
                <div classname="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>

                    <div>
                        <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;