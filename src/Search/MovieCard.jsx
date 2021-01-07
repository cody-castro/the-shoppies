// import React from 'react'

function MovieCard(props){

    return(
        <div>
            <h1>
                {props.title} 
            </h1>
            <img src={props.poster} height="200px" alt="Movie Poster"></img>

        </div>
    )
}

export default MovieCard