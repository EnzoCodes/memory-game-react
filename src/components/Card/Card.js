import React from "react";
import "./Card.css";

const Card = props => {

  const superMapper = props.cards.map(card => {
    return (
      <div className="card" key={card.id}>
        <div className="img-container">
          <span onClick={props.clickImage} className="click">
              <img alt={card.name} src={card.image} value={card.id} />
          </span>
        </div>
      </div>
    );
});

    return(
      <div className="wrapper">
        {superMapper}
      </div>
    );
};

export default Card;


//id name image

//Smart component.
// This.something.
