import React from 'react';
import me from '../images/me.jpg';
const About = (props) => (
  <div>
    <div className="main-content-heading">
      <img
        className="profile"
        src="https://res.cloudinary.com/brendanrielly/image/upload/v1528399304/me.jpg"
        alt="Brendan Rielly"
      />
      <h1>
        Hi I'm Brendan. Front End Developer, Adventurer, and Hobby Photographer
      </h1>
    </div>
    <p className="intro-text">
      I love snowboarding, mountain biking, hiking, and exploring new places.
      Capturing the beauty I find in the outdoors makes me happy. I've been
      working as a Web Developer for a while now and I greatly enjoy learning
      and implementing new technologies to create compelling experiences.
    </p>
  </div>
);

export default About;
