import {useEffect} from 'react'
import './App.css';
import SearchIcon from './search.svg'

//529a4538

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=529a4538'

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

            <div className="container"></div>

        </div>
    );
}

export default App;