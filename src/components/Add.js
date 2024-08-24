import React, {useState } from 'react'
import axios from 'axios'
import ResultsCard from './ResultsCard'
function Add() {


  const [query,setQuery]=useState("")
  const [results,setResults]=useState([])

const onchange=(e)=>
{
  e.preventDefault();
  setQuery(e.target.value);
  axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TDMB_API}&language=en-US&page=1&query=${e.target.value}`)
    .then((res) => setResults(res.data.results)) // Set the results state with the search results
    .catch((error) => console.error('Error fetching data:', error));
}

return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
<img src='https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg' alt=''> 
</img>
<div className='titles'>
  <h1>Hoş Geldiniz.</h1>
  <h2>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h2>
  {query}
</div>
<div className='input-wrapper'>
<input type='text'
onChange={onchange}  
value={query}
placeholder='fil,dizi,kişi ara ...' />

</div>

{results.length > 0 && (
<ul className='results'>
{results.map((movie)=> <li key={movie.id}>{<ResultsCard movie={movie}/>}</li>

)}

</ul>
)

}

        </div>



      </div>
    </div>
  )
}

export default Add
