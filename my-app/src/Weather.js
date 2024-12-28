import React from "react";
// import "./style.css"
function Weather(props){
    return(
    <div>
        <h2>{props.city}</h2>
        <h1>{props.condition}</h1>  
    </div>
    );
}
export default Weather;