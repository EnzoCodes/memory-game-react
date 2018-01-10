import React from "react";
import "./Score.css";

const Score = props => (
      <div className="scoreWrap">
        <h3 className="score">{props.score}</h3>
        <p>POINTS</p>
      </div>
    );


export default Score;


// handleScore = () => {
//   if (this.clicked == false){
//     this.setState({ count: this.state.count + 1});
//     shuffle();
//   } else {
//     this.setState({ count: this.state.count = 0});
//     shuffle();
//   }
// };
