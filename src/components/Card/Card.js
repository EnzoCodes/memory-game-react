import React from "react";
import "./Card.css";

const Card = props => {

  const superMapper = props.cards.map(card => {
    return (
      <div className="card" key={card.id}>
        <div className="img-container">
          <span onClick={ () => props.clickImage( card.id ) } className="click">
              <img alt={card.name} src={card.image} />
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
