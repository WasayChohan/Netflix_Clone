import React, { useEffect, useState } from 'react' 
import axios from './axios'
import './Row.css'
import YouTube from "react-youtube" 
import movieTrailer from "movie-trailer"

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title,fetchUrl,isLargeRow }) {      
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    // A snippet of code which runs based on a specific condition/varaibles
    useEffect(() => {
        // if [], run once when the row loads, and dont run again 
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request
            // 'https://api.themoviedb.org/3'
        }
        fetchData()
    },  [fetchUrl])
    

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          //  https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                // https://www.youtube.com/watch?v=XtMThy8QKqU
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error) => console.log(error))
            
        }
    }

    
  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="row_posters">

        {movies.map(movie => (
            // https://reactjs.org/link/warning-keys 
            <img 
            key={movie.id}
            onClick = {() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
            />
        ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row