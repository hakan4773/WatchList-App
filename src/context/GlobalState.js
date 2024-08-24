import React, { createContext, useEffect, useState } from "react";
export const GlobalContext=createContext();
export const GlobalProvider=({children})=>{

const [watchedFilms,setwatchedFilms]=useState(//izlenenler state
    localStorage.getItem("watchedFilms") 
    ? JSON.parse(localStorage.getItem("watchedFilms")) :[] )

const [watchlist,setwatchlist]=useState(
    localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : []
) //izlenecekler state

const addtoWatched = (movie) => {//izleneceklerden izlenenler listesine atma  göz simgesi
    setwatchedFilms([...watchedFilms,movie]);
    const removewatchedList=watchlist.filter((value)=>value.id !== movie.id)
    setwatchlist(removewatchedList);

    localStorage.setItem("watchlist", JSON.stringify(removewatchedList));
    localStorage.setItem("watchedFilms", JSON.stringify([...watchedFilms, movie]))   
};


const addtoWatchList = (movie) => {//izlenenler  listesinden izleneceklere atma göz simgesi
    const removewatchList=watchedFilms.filter((value)=>value.id !== movie.id)
    setwatchedFilms(removewatchList);
    setwatchlist([...watchlist,movie]);

    localStorage.setItem("watchedFilms", JSON.stringify(removewatchList));
    localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]))   
};



const addWatchList = (movie) => { //izleneceklere kaydetme
    setwatchlist([...watchlist, movie]);

};
const addWatchedList = (movie) => { //izlenenlere kaydetme
    setwatchedFilms([...watchedFilms, movie]);

};
//izlenenlerden silme ve kopyalamayı engelle
const handleRemove=(movie)=>{// İZLENECEKLERDEN SİLME İŞLEMİ
    const removewatchList=watchlist.filter((value)=>value.id !== movie.id)
    setwatchlist(removewatchList)
    localStorage.setItem("watchlist",JSON.stringify(removewatchList))
}

const handleRemoveWatched=(movie)=>{// İZLENENLERDEN SİLME İŞLEMİ
    const removewatchList=watchedFilms.filter((value)=>value.id !== movie.id)
    setwatchedFilms(removewatchList)
    localStorage.setItem("watchedFilms",JSON.stringify(removewatchList))
}


useEffect(() => {  //İzlenecekler Listeyi local storage kaydetme
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
}, [watchlist]);

useEffect(() => { //İzlenenler Listesini local storage kaydetme
    localStorage.setItem("watchedFilms", JSON.stringify(watchedFilms));
}, [watchedFilms]);

const values={
watchedFilms,//izlenen filmler
addtoWatched,//izleneceklerden izlenenler listesine atma  göz simgesi
addWatchList,//izlenenlere kaydetme
watchlist, //izlenecek filmler
addWatchedList,//izleneceklere kaydetme
handleRemove,//izleneceklerden sil
addtoWatchList,//izlenenler  listesinden izleneceklere atma göz simgesi
handleRemoveWatched //izlenelerden sile
    }
    
return (<GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>) 
}

