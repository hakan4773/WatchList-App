import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';
function Watchlist({movie}) {
  const {watchlist}=useContext(GlobalContext)
  return (
    <div className="movie-page">           
<div className="container">
  <div className="header">
    <h1 className="heading">İzlenecek Filmler</h1>
  <div className='count-pill'>{watchlist.length} {watchlist.length < 2 ? "Movie" : "Movies"} </div>

  </div>
  {watchlist.length > 0  && (
     <div className="movie-grid">
     {watchlist.map((movie, index) => (
       <MovieCard  movie={movie} key={movie.id}  type="watchlist"/>
     ))}
 </div>
  )}
 
  
</div>
    </div>
  )
}

export default Watchlist
