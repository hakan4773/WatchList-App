import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function PopulerFilms() {
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
      axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TDMB_API}&language=en-US&page=${count}`)
        .then((res) =>
            setMovies((prevMovies) => [...prevMovies, ...res.data.results])
    ) 
        .catch((error) => console.error('Error fetching data:', error));
    }, [count]);

  return (

<div>
<ul className='list'>
{movies.map((movie, index) => (
    <li key={`${movie.id}-${index}`}>
        {movie.poster_path ? (
<Link to={"/add"}>
            <img 
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                alt={movie.original_title || 'Movie Poster'}
            />
            </Link>

        ) : (
            <div className='filler-poster'></div>
        )}
    </li>
))}

</ul>
<div className='yukle'>
<button className='btn' onClick={()=>setCount(count+1)}>Daha Fazla Gör</button>

</div>
    </div>
  )
}

export default PopulerFilms
