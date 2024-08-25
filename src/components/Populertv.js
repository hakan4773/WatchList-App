import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FloatButton } from 'antd';

function Populertv() {
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(1);
console.log(movies)
    useEffect(() => {
      axios(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TDMB_API}&language=en-US&page=${count}`)
        .then((res) =>
            setMovies((prevMovies) => [...prevMovies, ...res.data.results])
    ) 
        .catch((error) => console.error('Error fetching data:', error));
    }, [count]);

  return (

<div>
<ul className='list'>
{movies.map((movie, index) => (
    <li key={index}>
        {movie.poster_path ? (
        <Link to={`https://www.themoviedb.org/tv/${movie.id}-${movie.title}`}>
            <img 
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                alt={movie.original_title || 'Movie Poster'}   >
           </img>

            </Link>

        ) : (
            <div className='filler-poster'></div>
        )}
         <div className='populerlist'> <b> {movie.first_air_date ? "Yıl: "+ movie.first_air_date.substring(0,4) :"-" }  {movie.vote_average ? "IMDB: "+movie.vote_average.toFixed(1) : "IMDB: -"} </b></div>{/* <br></br> {movie.title} */}

    </li>
))}
</ul>




<div className='yukle'>
<button className='btn' onClick={()=>setCount(count+1)}>Daha Fazla Gör</button>
</div>
<FloatButton.BackTop />
    </div>
  )
}

export default React.memo(Populertv)
