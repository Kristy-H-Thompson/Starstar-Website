import React from 'react-dom/client';
import './aboutPage.css';
import starstar from '../../assets/starstar-tongue.png';


const AboutPage = () => (
  <section className="aboutPage">
    <div className="heading">
      <h1 className="gradient__text"> What can Starstar Do?</h1>
      <p>This is where this paragraph will go</p>
      <img className="starstarTongue" src={starstar} alt="Starstar"/>
    </div>
  </section>
);

export default AboutPage;
