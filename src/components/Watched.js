import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard'
import {FloatButton } from 'antd';

function Watched() {
  const {watchedFilms} =useContext(GlobalContext)
  return (
    <div className="movie-page">           
<div className="container">
  <div className="header">
    <h1 className="heading">İzlenenler</h1>
    <div className='count-pill'>{watchedFilms.length} {watchedFilms.length < 2 ? "Movie" : "Movies"} </div>

  </div>
  {watchedFilms.length > 0  && (
     <div className="movie-grid">
     {watchedFilms.map((movie, index) => (
       <MovieCard  movie={movie} key={movie.id} type="watched"/>
     ))}
 </div>
  )}
 
  
</div>
<FloatButton.BackTop />

    </div>
  )
}

export default Watched
