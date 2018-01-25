import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className={props.isClicked ? "card clicked" : "card"} >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
