// import React from 'react'
import React, { useState } from 'react';
import MovieCard from './MovieCard'
const API_KEY = process.env.REACT_APP_API_KEY

function SearchBar(){

  const [searchInput, setSearchInput] = useState("")
  const [returnedMovies, setReturnedMovies] = useState([])

  function submitHandler(e){
    e.preventDefault()
    console.log("poop")
  }

 function changeHandler(searchTerm){
    setSearchInput(searchTerm)
    
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`).then(resp => resp.json())
    .then(movies => {
      // console.log(movies);
      setReturnedMovies([movies])
    })
  }

  function displayMovieCard(){
    console.log(returnedMovies)
    
    return(
      returnedMovies.map(movie =>{
       return movie.Search ? 
       <MovieCard key={movie.Search[0].imdbID} title={movie.Search[0].Title} poster={movie.Search[0].Poster}/> 
       : 
       <MovieCard key="666" title="Not Found" poster="not found"/>
    })  

    )
  }


    return(
      <>

      <form onSubmit={(e)=>{submitHandler(e)}} >
        <label>
        <input value={searchInput} onChange={(e)=>{changeHandler(e.target.value)}} className="search-bar" type="text" name="name" placeholder="Search for a movie" />
      </label>
      <input type="submit" value="Search" />
      </form>
        {displayMovieCard()}
      </>
    )


}

export default SearchBar