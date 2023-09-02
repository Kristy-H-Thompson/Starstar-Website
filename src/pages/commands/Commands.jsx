import React from 'react-dom/client'
import Feature from '../../components/feature/Feature';
import CommandsType from '../../components/commandsType/CommandsType';
import './commands.css';



const gamesData = [
    {
      title: "/game guessThatCharacter",
      text: 'Can you correctly identify the name of a <i>Warriors</i> book character based solely on their image or description? Your task is to select the correct name from the three given choices ',
    },
    {
      title: '/game cookieThief',
      text: "Starstar is looking to steal cookies from one of the characters in the series. Can you figure out who in time to stop her in Starstar's version of hangman?",
    },
    {
      title: '/game rockClawLeaf',
      text: 'Compete against Starstar or your friends in a fun game of Rock, Claw, Leaf (inspired by Rock, Paper, Scissors). In this game, Rock breaks Claws, Claws rip Leafs, and Leafs cover Rocks. Challenge your opponents and test your strategy to see who comes out victorious ',
    },
    {
      title: '/game doubleOrNothing',
      text: 'Wager your hard-earned stars in an exhilarating game of Double or Nothing. Take a chance and put your stars on the line to potentially double your winnings or lose it all. Are you ready to test your luck and make a daring bet?',
    },
    {
      title: '/game clanElimination',
      text: 'Which of the clans from the books is your favorite? In this game boost or sabatoge your favorite clan until only one is left standing',
    },
    {
      title: '/game avoidTheLeader',
      text: 'Work with yourclan mates to count as high as you can, before your leader catches you and resets the count back to 0',
    },
  ];


  const funData = [
    {
      title: "/fun 8ball",
      text: 'Get some sassy advice from Starstar',
    },
    {
      title: '/fun choose',
      text: "Can't decide? Let Starstar choose for you",
    },
    {
      title: '/fun talk',
      text: 'Ask Starstar a question and she will answer you(warning:will use your speakers)',
    },
    {
      title: '/fun roll',
      text: 'Add some randomness into your roleplays, but rolling some dice',
    },
    {
      title: '/fun car',
      text: 'Shows you a picture of an awesome car(for those of you who keep getting autocorrected on cat)',
    },
  ];


  const storeData = [
    {
      title: "/store buy",
      text: "buy an item from Starstar's store",
    },
    {
      title: '/store inventory',
      text: "see all items currently in your inventory",
    },
    {
      title: '/store items',
      text: 'see what items are available for purchase',
    },
    {
      title: '/store profile',
      text: 'see your server level and how many stars you have',
    },
    {
      title: '/store daily',
      text: 'Earn points for checking in with Starstar daily',
    },
    {
      title: '/store weekly',
      text: 'Earn points for checking in with Starstar weekly',
    },
  ];
  

  const creativityData = [
    {
      title: "/creativity cat",
      text: "generate a unique warrior cat oc",
    },
    {
      title: '/creativity clan',
      text: "randomly generates clan names",
    },
    {
      title: '/creativity inspo',
      text: 'get inspiration for your next warriors oc',
    },
    {
      title: '/creativity starster',
      text: 'warrior cat name generator',
    },
  ];


  const helpData = [
    {
      title: "/help bug",
      text: "report a bug",
    },
    {
      title: '/help commands',
      text: "a list of starstar commands",
    },
  ];


  const informationData = [
    {
      title: "/information tos",
      text: "Starstar's terms of service",
    },
    {
      title: '/information privacy',
      text: "Starstar's privacy policy",
    },
    {
      title: '/information stats',
      text: 'Get stats on Starstar',
    },
  ];
  
  
  





const Commands = () => {
  return (
    <>
    <section className="commands">
        <CommandsType title="/game -- play games with Starstar or friends and earn stars! " />
    <div className="commands-container">
      {gamesData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </section>

  <section className="commands">
    <CommandsType title="/fun -- some silly commands just for fun" />
    <div className="commands-container">
      {funData.map((item, index) => (<Feature title={item.title} text={item.text} key={item.title + index} />))}
    </div>
  </section>

  <section className="commands">
    <CommandsType title="/store -- spend your hard earned stars on items and perks" />
    <div className="commands-container">
      {storeData.map((item, index) => (<Feature title={item.title} text={item.text} key={item.title + index} />))}
    </div>
  </section>


  <section className="commands">
    <CommandsType title="/creativity -- spark your creativity " />
    <div className="commands-container">
      {creativityData.map((item, index) => (<Feature title={item.title} text={item.text} key={item.title + index} />))}
    </div>
  </section>

  <section className="commands">
    <CommandsType title="/help -- get help from the coders behind Starstar " />
    <div className="commands-container">
      {helpData.map((item, index) => (<Feature title={item.title} text={item.text} key={item.title + index} />))}
    </div>
  </section>

  <section className="commands">
    <CommandsType title="/information -- get information about Starstar" />
    <div className="commands-container">
      {informationData.map((item, index) => (<Feature title={item.title} text={item.text} key={item.title + index} />))}
    </div>
  </section>


</>
)
}

export default Commands
