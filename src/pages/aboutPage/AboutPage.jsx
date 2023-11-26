import React from 'react-dom/client';
import './aboutPage.css';
import starstar from '../../assets/starstar-tongue.png';


const AboutPage = () => (
  <section className="aboutPage">
    <div className="heading">
      <h1 className="gradient__text">Starstar</h1>
      <p>Starstar is a Discord Bot created and managed by Racer and Cleaver.

      <b>History</b>  
      <p>StarStar was orginally created for a Warriors roleplay site called <b>Warrior Cat Clans 2 </b> as an April Fool's joke in February 2020. Starstar <i>took over</i> the site's discord server for the day, fighting the website's bot Gene for control. Starstar became much beloved by the website's members, and lore began to build around the mysterious Starstar. When WCC2 closed down, Starstar was brought over and optimized for another roleplay site called <b>Sinister Haven</b></p>
      <img className="starstarTongue" src={starstar} alt="Starstar"/>
    </div>
  </section>
);

export default AboutPage;
