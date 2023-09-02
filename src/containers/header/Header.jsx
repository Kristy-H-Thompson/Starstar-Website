import React from 'react';
import './header.css';
import starstar from '../../assets/starstarHolding.png';


const Header = () => {
  return (
    <header id="home">
      <div className="header-content">
        <h1> Starstar</h1>
        <p>Who am I? WHO AM I??? Don't bother with your mouse-brain excuses—I know exactly why you're here. You failed to recognize my name. I find it offensive that you haven't already heard of me, the best Warriors discord bot in existence, but fear not—you have caught me in a generous mood. They're rare, so you should take advantage of it while you can. Send me an invitation to your server and I will consider gracing it with my presence, but only if you start groveling now.</p>          
        <button type="button">Invite Starstar</button>
\      </div>   
      <div className="header-image">
          <img src={starstar} alt="Starstar"/>
      </div>
    </header>
  )
}

export default Header