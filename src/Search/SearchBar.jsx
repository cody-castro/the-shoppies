import React from 'react'

function ClassBar(){

    return(
        <form>
            <label>
              <input className="search-bar" type="text" name="name" placeholder="Search for a movie" />
            </label>
            <input type="submit" value="Search" />
          </form>
    )


}

export default ClassBar