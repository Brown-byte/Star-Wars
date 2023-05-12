import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const [allCharacters, setAllCharacters]  = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => { 
    const characterPromises = state[0].characters.map((url) => axios.get(url));
    Promise.all(characterPromises)
    .then((responses) => {
      const characters = responses.map((response) => response.data.name);
      setAllCharacters(characters);
      console.log(characters);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [state]);

  return (
    <div style={{ backgroundColor: "gray" }}>
      {state.map((movie) => (
      <div key={movie.episode_id}>
        <p onClick={() => navigate ("/")}>Back to List</p>
        <h1 style={{ color: "#fff" }}>{movie.title}</h1>
        <p>Director: {movie.director}</p>
        <p>Producer: {movie.producer}</p>
        
        <div>
        <h4>Description</h4>
        <p>{movie.opening_crawl}</p>
        </div>

        <div>
          {allCharacters.map((name) =>{
            <li>{name}</li>
          })}
        </div>
      
      </div>
      ))}
       
    </div>
  );
};

export default MovieDetail;
