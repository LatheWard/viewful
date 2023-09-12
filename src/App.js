import {useEffect} from 'react'

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
        <h1>App</h1>
    );
}

export default App;