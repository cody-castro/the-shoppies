// import React from 'react'
import React, { useState } from 'react';

function SearchBar(){

  const [searchInput, setSearchInput] = useState("")

  function submitHandler(e){
    e.preventDefault()
    console.log("poop")
  }

 function changeHandler(e){
    setSearchInput(e)
    

  }



    return(
      <form onSubmit={(e)=>{submitHandler(e)}} >
        <label>
        <input value={searchInput} onChange={(e)=>{changeHandler(e.target.value)}} className="search-bar" type="text" name="name" placeholder="Search for a movie" />
      </label>
      <input type="submit" value="Search" />
    </form>
    )


}

export default SearchBar