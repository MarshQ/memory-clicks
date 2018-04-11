import React, { Component } from 'react';
import pokemon from "./pokemon.json";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from './components/Title';



class App extends Component {

  state = {
    pokemon,
    score: 0,
    bestScore: 0
  }

  componentDidMount() {
    this.setState({ pokemon: this.shuffleTime(this.state.pokemon) });
  }

  handleSelection = id => {
    //event.preventDefault();
    var currentScore = this.state.score;
    var clickCheck = false
    var selectedMon = this.state.pokemon.map(pokemon => {
      var winner = {...pokemon};
      if(winner.id == id) {
        if (winner.clicked == false) {
          clickCheck = true;
          winner.clicked = true;
        }
      }
      return winner;
    })
    
    if (clickCheck == false) {
      console.log("pickles");
     this.gameover(selectedMon);
    }
    else if  (clickCheck == true) {
      console.log("icecream");
      currentScore = currentScore + 1;
      this.setState({
        score : currentScore,
        pokemon: this.shuffleTime(selectedMon)
      });
      console.log(this.state.score)
     
    }
  }

  gameover = pokemon => {
    var currentScore = this.state.score;
    var topScore = this.state.bestScore;
    if (currentScore > topScore) {
      topScore = currentScore;
    }
    alert("Incorrect");
    this.setState({
      pokemon: this.newGame(pokemon),
      bestScore: topScore,
      score: 0
    })
  };

  newGame = pokemon => {
    var placeHolder = pokemon.map(pokemon => ({ ...pokemon, clicked: false}));
    return this.shuffleTime(placeHolder);
  }

  shuffleTime = pokemon => {
    console.log("hi" + pokemon);
    let i = pokemon.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pokemon[i];
    pokemon[i] = pokemon[j];
    pokemon[j] = temp;
  }
  return pokemon;
}

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Pokemon Memory Clicks</h1>
        </header>
        <p className="App-intro">
          Best Score = {this.state.bestScore}         
        </p>
        <n/>
        <p> 
          Current Score = {this.state.score}
        </p> 
      

        <Wrapper>
          <Title>Pokemon List</Title>
          {this.state.pokemon.map(pokemon => (
            <FriendCard
              id= {pokemon.id}
              handleSelection={this.handleSelection}
              key={pokemon.id}
              image={pokemon.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  };
};

export default App;
