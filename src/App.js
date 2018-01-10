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
      clicked : false
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

  clickImage = (id) => {
      // this.setState({ count: this.state.count + 1 });
      console.log("Pre-update", id, this.state.clicked);
      this.id.setState({
        clicked : true
      });
      // Shuffle Cards...
      this.shuffle();
      //  else
      // this.reset();
      console.log("State updated", id, this.state.clicked);
  };

  //Reset Function...
  reset = () => {
    //Shuffle Cards
    this.shuffle();
    //Reset Score
    this.setState({
      score : 0,
      clicked : false
    });
    console.log("You tried to reset!");
  };

  componentDidMount(){ this.reset() };

  // Map over this.state.friends and render a FriendCard component for each friend object
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
