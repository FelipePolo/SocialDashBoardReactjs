import React from "react";

function Cardsmall(props) {
  return (
    <div className="card-small">
      <p className="card-small-views">{props.name}</p>
      <p className="card-small-icon">
        <img src={props.image} alt="" />
      </p>
  <p className="card-small-number">{props.n}</p>
      <p className="card-small-percentage">
        <span>
          <img src={props.icon} alt="" />
          {props.progress}%
        </span>
      </p>
    </div>
  );
}

export default Cardsmall;
