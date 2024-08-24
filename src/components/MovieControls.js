import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
function MovieControls({movie,type}) {
    const {handleRemove,addtoWatched,addtoWatchList,handleRemoveWatched}=useContext(GlobalContext)

  return (
    <div className='inner-card-controls'>
        {type==="watchlist" && (
<>
<button className='ctrl-btn' onClick={()=>addtoWatched(movie)}>
<i className='fa-fw far fa-eye'></i>
</button>
<button className='ctrl-btn' onClick={()=>handleRemove(movie)}>
<i className='fa-fw fa fa-times'></i>
</button></>
        ) }
        {type==="watched" && (
<>

<button className='ctrl-btn' onClick={()=>addtoWatchList(movie)}>
<i className='fa-fw far fa-eye-slash'></i>
</button>
<button className='ctrl-btn' onClick={()=>handleRemoveWatched(movie)}>
<i className='fa-fw fa fa-times'></i>
</button>
</>
        ) }



    </div>

  )
}

export default MovieControls
