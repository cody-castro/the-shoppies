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
      setReturnedMovies([movies])
    })

    console.log(typeof returnedMovies)
  }

  function displayMovieCard(){
    
    return(
      returnedMovies.map( movie =>{

    return <MovieCard key={movie.imdbID} title={movie.title} poster={movie.poster}/>;
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