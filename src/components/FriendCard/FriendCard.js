import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <span onClick={() => props.handleSelection(props.id)} className="clicked">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </span>
  </div>
);

export default FriendCard;
