import React from "react";

function Card(props) {
  const cardclass = 'card '+props.social;
  return (
    <article className={cardclass}>
      <p className="card-title">
        <img src={props.image} alt="" />@{props.name}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{props.number}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src={props.icon} alt="" />
        {props.today} Today
      </p>
    </article>
  );
}
export default Card;
