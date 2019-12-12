import React from 'react';
import './style/app.css';
import Header from './components/Header';
import {  BrowserRouter as Router ,Route,Switch } from 'react-router-dom'
import Lifestyle from './components/LifeStyle';
import Portrait from './components/Portrait';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header  className='navbar'/>
          <Switch>
          <Route path='/' exact component={Portrait} />
          <Route path='/lifestyle' exact component={Lifestyle} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component ={Contact}/>
          </Switch>

      </Router>
      
    </div>
  );
}

export default App;
