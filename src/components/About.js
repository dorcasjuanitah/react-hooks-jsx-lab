import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div about="about">
      <h2>About Me</h2>
      <p>Element of my choosing</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
