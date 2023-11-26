import React from 'react-dom/client';
import Feature from '../../components/feature/Feature';
import './aboutPage.css';
import starstar from '../../assets/starstarSmile.png';


const About = () => (
  <section className="about">
    <div className="heading">
      <h1 className="gradient__text"> What can Starstar Do?</h1>
      <p>This is where this paragraph will go</p>
      <img className="starstarSmile" src={starstar} alt="Starstar"/>
    </div>
  </section>
);

export default About;
