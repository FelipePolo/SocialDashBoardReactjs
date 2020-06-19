import React from "react";
import Cardsmall from "./cardsmall";

const data = [
  {
    key:1,
    name: "Page Views",
    n: "87",
    image: "images/icon-facebook.svg",
    icon: "images/icon-up.svg",
    progress: "3",
  },
  {
    key:2,
    name: "Likes",
    n: "52",
    image: "images/icon-facebook.svg",
    icon: "images/icon-down.svg",
    progress: "2",
  },
  {
    key:3,
    name: "Likes",
    n: "5487",
    image: "images/icon-instagram.svg",
    icon: "images/icon-up.svg",
    progress: "2253",
  },
  {
    key:4,
    name: "Page Views",
    n: "52k",
    image: "images/icon-instagram.svg",
    icon: "images/icon-up.svg",
    progress: "1375",
  },
  {
    key:5,
    name: "Page Retweets",
    n: "117",
    image: "images/icon-twitter.svg",
    icon: "images/icon-up.svg",
    progress: "303",
  },
  {
    key:6,
    name: "Likes",
    n: "507",
    image: "images/icon-twitter.svg",
    icon: "images/icon-up.svg",
    progress: "553",
  },
  {
    key:7,
    name: "Likes",
    n: "107",
    image: "images/icon-youtube.svg",
    icon: "images/icon-down.svg",
    progress: "19",
  },
  {
    key:8,
    name: "Total Views",
    n: "1407",
    image: "images/icon-youtube.svg",
    icon: "images/icon-down.svg",
    progress: "12",
  },
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {data.map((x) => (
            <Cardsmall 
            key = {x.key}
            name={x.name}
            n={x.n}
            image = {x.image}
            icon = {x.icon}
            progress = {x.progress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
