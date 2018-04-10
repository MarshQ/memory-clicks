import React, { Component } from 'react';
import pokemon from "./pokemon.json";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
//import grid from "./components/grid";
import Title from './components/Title';
import Card from './components/Card';
import CardBtn from './components/CardBtn';


class App extends Component {

  state = {
    pokemon,
    score: 0,
    bestScore: 0
  }

  gameOn = event => {
    event.preventDefault();
    console.log("Copy that");
    if (this.state.pokemon.clicked) {
     // gameover();
    }
    else {
      this.setState({
        [this.state.pokemon.clicked] : true,
        [this.state.score] : this.state.score + 1
      });
     //nextRound();
    }
  }

  // gameover = () => {

  // }

  // nextRound = () => {

  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Pokemon Memory Clicks</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      

        <Wrapper>
          <Title>Pokemon List</Title>
          {this.state.pokemon.map(pokemon => (
            <Card
              key={pokemon.id}
              image={pokemon.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
