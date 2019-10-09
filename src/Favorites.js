import React, { Component } from "react";
import BeyCard from './BeyCard'

function Favorites(props) {
    let filteredCards = props.something.map(card => card.favorite ? <BeyCard key={card.id} obj={card} clickHandler={props.clickHandler} /> : null)

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {filteredCards}
      </div>
    );
}

export default  Favorites