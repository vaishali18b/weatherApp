import React,{useEffect,useState} from "react";
import "./css/style.css";

const Tempapp = () =>{

   const [city,setcity]=useState(null);
   const [search,setSearch]=useState("Mumbai");

   useEffect( () =>{
      const fetchApi = async () =>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=153d67731a1bd80824d3fe1a3d977011`;
         const response = await fetch(url);
         const resJson = await response.json();
         setcity(resJson.main);
      }
      fetchApi();},
   [search] );



   return(
      <div className="box">
         <div className="inputData">
             <input
             type="search"
             className="inputField" 
             onChange={ (event) => {setSearch(event.target.value);}} />
            
         </div>

      
     { !city ? (<p className="errormsg">No data found</p>):
   (
         <div className="info">
         <h2 className="location">
            {search}
         </h2>
         <h1 className="temp">
         {city.temp}°C
         </h1>
         <h3 className="tempmin_max"> Min:{city.temp_min}°C | Max:{city.temp_max}°C</h3>
      </div>)
     }
      
   
      </div>
   
   )
}

export default Tempapp;