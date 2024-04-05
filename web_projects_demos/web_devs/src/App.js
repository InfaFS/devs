import {useState,useEffect} from "react";

//b454de5b
import './App.css';
import profileImage from './gragas.jpeg';
import MovieCard from './MovieCard.jsx'
const API_URL = "http://www.omdbapi.com?apikey=b454de5b";



const App = () => {
    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
       
        setMovies(data.Search);
    }


    useEffect ( () => {
       searchMovies('Spiderman');
    }, []);

    return (
    
        <div className="app">
            <h1>Movielandia</h1>
            <div className="search">
                <input placeHolder="Busqueda de peliculas"
                value={searchTerm}
                onChange={ (e) => setSearchTerm(e.target.value)}

                
                />

                <img
                    src={profileImage} 
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />

            </div>
            {
                movies.length > 0
                ? (
                    <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie} />
                    ))}
                    
                </div>
                ) : (
                    <div className="empty">
                        <h2>NO MOVIES FOUND :O</h2>
                    </div>
                )
            }
            

        </div>
     
    );
}

export default App;