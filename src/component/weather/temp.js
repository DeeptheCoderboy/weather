// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=0bc7c0a126dd174d6740c957b53b6d41
import React, { useState,useEffect} from 'react';
import './style.css';
import Weathercard from '../weathercard';
const Temp = () => {
  const [searchValue,setSearchValue]=useState("pune");
  const[tempInfo,setTempInfo]=useState({});
const getWeatherInfo=async()=>{
  try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0bc7c0a126dd174d6740c957b53b6d41`

    const res=await fetch(url);
    const data=await res.json();
    const {temp,humidity,pressure}=data.main;
    const{main:weathermod}=data.weather[0];
    const{name}=data;
    const{speed}=data.wind;
    const{country,sunset}=data.sys;
    const myNewWeatheInfo={
      temp,humidity,weathermod,pressure,name,speed,country,sunset
    };
    setTempInfo(myNewWeatheInfo);
  }
  catch(error){
    console.log(error)

  }
};
useEffect(()=>{
  getWeatherInfo();
},[])

  return (
    <div>
    <div className='wrap'>
        <div className='search'>
            <input type="search"
            placeholder='search...'
            className='searchTerm'
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            
            
            
            />
            <button className='searchButton' type='button' onClick={getWeatherInfo}>search</button>
          </div>
        </div>

    {/* our temp card */}
     <Weathercard tempInfo={tempInfo}/>

     </div>
  )
}

export default Temp
