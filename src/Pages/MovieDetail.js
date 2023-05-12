import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/MovieDetails.css';
import SWLogo from "../Components/SWLogo.js";

const MovieDetail = () => {
  const [allCharacters, setAllCharacters]  = useState([]);
  const [allPlanets, setAllPlanets] = useState([]);
  const [allSpecies, setAllSpecies] = useState([]);
  const [allStarships, setAllStarships] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);
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

  useEffect(() =>{
    const planetsPromises = state[0].planets.map((url) => axios.get(url));
    Promise.all(planetsPromises)
    .then((responses) => {
      const planets = responses.map((response) => response.data.name);
      setAllPlanets(planets);
      console.log(planets);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [state]);

  useEffect(() =>{
    const speciesPromises = state[0].species.map((url) => axios.get(url));
    Promise.all(speciesPromises)
    .then((responses) => {
      const species = responses.map((response) => response.data.name);
      setAllSpecies(species);
      console.log(species);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [state]);

  useEffect(() =>{
    const starshipsPromises = state[0].starships.map((url) => axios.get(url));
    Promise.all(starshipsPromises)
    .then((responses) => {
      const starships = responses.map((response) => response.data.name);
      setAllStarships(starships);
      console.log(starships);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [state]);

  useEffect(() =>{
    const vehiclesPromises = state[0].vehicles.map((url) => axios.get(url));
    Promise.all(vehiclesPromises)
    .then((responses) => {
      const vehicles = responses.map((response) => response.data.name);
      setAllVehicles(vehicles);
      console.log(vehicles);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [state]);


  return (
    <div>
      <SWLogo />
       <div className="backG">
      {state.map((movie) => (
      <div className="Main" key={movie.episode_id}>
        <p onClick={() => navigate ("/")} className="Bl">Back to List</p>
        <h1 style={{ color: "#fff" }} className="title1">{movie.title}</h1>
        <p className="Direct">Director: {movie.director}</p>
        <p className="Prod">Producer: {movie.producer}</p>
        
        <div className="Des">
        <h4 style={{ color: "Gray"}}>Description</h4>
        <p>{movie.opening_crawl}</p>
        </div>

        <div className="div1"></div>

        <div className="Char">
          <h4 style={{ color: "Gray"}}>Characters</h4>
          {allCharacters.map((name) =>(
            <li>{name}</li>
          ))}
        </div>

        <div className="div2"></div>

        <div className="Plan">
          <h4 style={{ color: "Gray"}}>Planets</h4>
          {allPlanets.map((name) =>(
            <li>{name}</li>
          ))}
        </div>

        <div className="div3"></div>

        <div className="Spec">
          <h4 style={{ color: "Gray"}}>Species</h4>
          {allSpecies.map((name) =>(
            <li>{name}</li>
          ))}
        </div>

        <div className="div4"></div>

        <div className="Star">
          <h4 style={{ color: "Gray"}}>Starships</h4>
          {allStarships.map((name) =>(
            <li>{name}</li>
          ))}
        </div>

        <div className="div5"></div>

        
        <div className="Vehic">
          <h4 style={{ color: "Gray"}}>Vehicles</h4>
          {allVehicles.map((name) =>(
            <li>{name}</li>
          ))}
        </div>
      
      </div>
      ))}
       
    </div>
    </div>
   
  );
};

export default MovieDetail;
