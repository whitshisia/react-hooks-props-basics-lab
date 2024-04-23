import React from "react";
import Links from "./links";

function About(props) {
  if (props.bio){
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      < Links github={props.links.github} linkedin={props.links.linkedin} />
      {/* add your <Links /> component here */}
    </div>
  );
}else{
  return null;
};
}

export default About;
