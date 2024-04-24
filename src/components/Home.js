import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const h1Style = {
    style: 'firebrick'
  };
  // update the JSX being returned!
 return (
  <div id="home">
    <h1 style={h1Style}> `Your {name} is a Web Developer form Your {city}</h1>
  </div>
 )
}

export default Home;
