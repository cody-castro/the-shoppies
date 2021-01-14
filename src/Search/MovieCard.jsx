// import React from 'react'

function MovieCard(props){

    

    return(
        <div>
            <h1>
                {props.title} 
            </h1>
            <img src={props.poster} height="200px" alt="Theoretically this should be Poster the poster for the movie u looked for but 🤷"></img>
            <button>Nominate {props.title}?</button>
        </div>
    )
}

export default MovieCard