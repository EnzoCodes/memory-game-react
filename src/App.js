import React, { Component } from "react";
import Nav from "./components/Nav";
import cards from "./data.json";
import Card from "./components/Card";
import Score from "./components/Score";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      cards : cards,
      score : 0,
      clicked : []
    };

  shuffle = () => {
    let array = this.state.cards;
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({
      cards : array
    })
  };

  clickImage = (event) => {
    let currentState = this.state.clicked;
    let clickedCard = event.target.getAttribute("value");
    console.log("before", currentState);
    console.log(clickedCard);
    // if(clickedCard == )
    this.shuffle();

    //Actual Game logic.
    if (currentState.indexOf(clickedCard) == -1) {
      currentState.push(clickedCard);
      this.setState({ score: this.state.score + 1 });
    } else {
      //Clear state...
      this.setState({ clicked: [] });
      this.setState({ score: 0 });
    }
  }; // End click Image...

  //Reset Function...
  clickReset = () => {
    //Shuffle Cards
    this.shuffle();
    //Reset Score
    this.setState({
      cards: cards,
      score : 0,
      clicked: []
    });
    console.log("You tried to reset!");
  }; // End reset.

  render() {
    return (
      <div>
        <Nav clickReset={this.clickReset} >
          Pick A Card
        </Nav>
        <Score
          score = {this.state.score}
         />
        <Card
          cards = {this.state.cards}
          clickImage = { this.clickImage }
          clicked = {this.clicked}
        />
        <p>Icons made by <a href="https://www.flaticon.com/authors/roundicons-freebies">Round Icons-freebies</a> from www.flaticon.com</p>
      </div>
    );
  }
}

export default App;
