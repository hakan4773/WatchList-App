import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
function ResultsCard({movie}) {

    const {watchlist,watchedFilms,addWatchedList,addWatchList}=useContext(GlobalContext)
    const storedWatchedMovie=watchedFilms.find((e)=>e.id===movie.id) //Film zaten varsa
    const storedMovie=watchlist.find((e)=>e.id===movie.id) 
    ? true
    : storedWatchedMovie
    ? true 
    :false //Film zaten varsa
 
  return (
    <div className='result-card'>
      <div className='poster-wrapper'>
{ movie.poster_path ?
  (  <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
    alt={`${movie.poster_path}`}></img>) : (
            <div className='filler-poster'></div>)
}
        
      </div>

      <div className='info'>
        <div className='header'>
            <h3 className='title'>{movie.title}</h3>
            <h4 className='release-date'>
                {movie.release_date  ? movie.release_date.substring(0,4) : "-"}
            </h4>

            <h4 className='release-date'> 
              IMDB: <b>{movie.vote_average  ? movie.vote_average: "-" }</b> 
            </h4>
        </div>

<div className='controls'>
    <button className='btn' 
    disabled={storedMovie}
    onClick={()=>addWatchList(movie)}>
      Add Watchlist
    </button>
    <button className='btn' 
    disabled={storedWatchedMovie}
    onClick={()=>addWatchedList(movie)}>
      Add Watchedlist
    </button>
</div>

      </div>


    </div>
  )
}

export default ResultsCard

