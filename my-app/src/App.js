import React from "react";
import Weather from "./Weather";
// import Weather from "./Weather";

function App(){
  return(
    <div>
      <h1>Weather App</h1>
      <Weather city="new york" temperature="27c" condition="sunny"/>
      <Weather city="new york" temperature="27c" condition="sunny"/>
    </div>
  );
  
}
export default App
