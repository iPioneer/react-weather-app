import React from 'react';

const Weather = (props) => {              
        return(        
        <div>   
            {props.city ?  
                <div>         
                <p>Location: {props.city}, {props.country}</p>
                <p>Temperature: {props.temp}</p>
                <p>Sunrise: {props.sunrise}</p>
                <p>Sunset: {props.sunset}</p>
                <p>Pressure: {props.pressure} hpa</p>
                </div> 
                : 
                <div>{props.error}</div>
                }
        </div>    
        )    
}

export default Weather; 