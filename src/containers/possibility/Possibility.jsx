import React from 'react';
import starstar from '../../assets/starstarStar.png';
import './possibility.css';

const Possibility = () => (
  <section className="possibility">
    <div className="possibility-image">
      <img src={starstar} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h1 className="gradient__text">Summon Starstar</h1>
      <p>So, are you convinced yet? Don't worry, inviting me to your server isn't as tricky as navigating the Dark Forest. Just click on any of the invite Starstar links on this page, and follow the prompts!  I won't beat around the bush, sweet kittens, as much as I hate to do work you need me in your server.</p>
    </div>
  </section>
);

export default Possibility;