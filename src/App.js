import {useEffect} from 'react'

//529a4538

const API_URL = 'http://omdbapi.com/apikey=529a4538'

const App = () => {
    
        const searchMovies = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json()

            console.log(data);
        }

        useEffect(() => {
            searchMovies('');
        }, []);

    return (
        <h1>App</h1>
    );
}

export default App;