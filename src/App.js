import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';

import spotify from './images/SPOTIFY.png'
import amazon from './images/AMAZON.png'
import ig from './images/IG.png'
import mob from './images/MOB.png'
import discord from './images/discord.png'
import tiktok from './images/TIKTOK.png'

const projects = [
  {name: discord}, 
  {name :spotify}, 
  {name: amazon}, 
  {name: ig}, 
  {name: tiktok}, 
  {name: mob}
]

function App() {
  return (
    <BreakpointProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path='/about'>
              <Header head={'about'}/>
              <About />
            </Route>
            <Route path='/work'>
              <Header head={'work'}/>
              <Work projects={projects}/>
            </Route>
            <Route path='/contact'>
              <Header head={'contact'}/>
              <Contact />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </BreakpointProvider>
   
  );
}

export default App;
