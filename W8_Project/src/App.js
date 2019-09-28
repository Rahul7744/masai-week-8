import React, { Component } from 'react';
import Nav from './components/nav'
import {Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div>

         <Nav />

      
      </div>
      </React.Fragment>
    );
  }
}

export default App;
