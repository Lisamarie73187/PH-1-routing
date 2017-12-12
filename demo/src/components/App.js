import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import People from './People/People';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/people">People</Link>
        </div>
        <Route exact path= "/" component={Home}/>
        <Route path= "/About" component={About}/>
        <Route path= "/People" component={People}/>
      </div>
    );
  }
}

export default App;
