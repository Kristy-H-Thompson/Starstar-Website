import React from 'react-dom/client'
import {Header, Possibility, About} from '../../containers';
import {Cta, Socials} from '../../components';

const Home = () => {
  return (

    <main>
    <Header />
    <Socials />
    <About/>
    <Possibility />
    <Cta />
    </main>
  )
}

export default Home