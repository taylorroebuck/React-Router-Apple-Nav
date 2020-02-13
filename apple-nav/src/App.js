import React from 'react';
import './App.css';
import { NavWrapper, SubNav } from './Components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <NavWrapper />
    <Route path='/' exact component={Home} />
    <Route path='/about' exact component={About} />
    <Route path='/contact' exact component={Contact} />
  </div>
);

export default App;
