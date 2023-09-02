import React from 'react-dom/client';
import Feature from '../../components/feature/Feature';
import './about.css';
import starstar from '../../assets/starstarSmile.png';


const About = () => (
  <section className="about">
    <div className="heading">
      <h1 className="gradient__text">What does Starstar Do?</h1>
      <img className="starstarSmile" src={starstar} alt="Starstar"/>
    </div>
    <div className="container">
      <Feature title="Character Information" text="Looking for details about characters from the Warriors series? Simply ask StarStar, and she'll provide you with a wealth of knowledge about any character in the series, retrieved from the  Warriors wiki. StarStar has all the information at her paw-tips." />
      <Feature title="Series Trivia" text="Bored? Challenge yourself and other members of your server to answer a plethora of trivia questions about the Warriors series. From characters and events to territories and clan traditions, there's a question for every Clan enthusiast." />
      <Feature title="Games" text="Feeling playful? Engage in exciting games with StarStar, tailored specifically for Warriors enthusiasts. Battle against other users to showcase your strategic prowess and claim victory on the battlefield" />
      <Feature title="Server Store" text="Tired of working hard with no rewards? Starstar's Store is a fun feature that empowers server members to exchange their accumulated stars for exciting clan rewards, character items, and perks within the Discord server. " />
      <Feature title="Server Clan" text="But wait, there's more! StarStar empowers you to create your very own clan for your server! Every server member becomes a clan-mate, as you work together to better you clan.  Forge strong bonds with your fellow clanmates and establish a thriving community within your server." />
      <Feature title="Member character" text="Nurture and grow your own character within the server, to climb up the server clans ranks. Develop unique skills, level up, and unlock special abilities as you progress. Participate in server-wide events, games, and quests that shape the destiny of your character. With StarStar, the possibilities  are limitless." />
    </div>
  </section>
);

export default About;