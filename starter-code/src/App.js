import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import BeerList from './components/beer/BeerList';
import RandomBeer from './components/beer/RandomBeer';
import NewBeer from './components/beer/NewBeer';
import BeerDetails from './components/beer/BeerDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={BeerList}/> 
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer}/> 
          <Route exact path="/beers/:id" component={BeerDetails}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
