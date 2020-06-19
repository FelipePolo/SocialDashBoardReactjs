import React from 'react';
import Card from './card';

const data = [
  {
    key: 1,
    social: "facebook",
    name: "FelipePolo",
    image: "images/icon-facebook.svg",
    number: "1256",
    today: "12",
    icon: "images/icon-up.svg",
  },
  {
    key: 2,
    social: "twitter",
    name: "FelipePolo",
    image: "images/icon-twitter.svg",
    number: "829",
    today: "22",
    icon: "images/icon-up.svg",
  },
  {
    key: 3,
    social: "instagram",
    name: "FelipePolo",
    image: "images/icon-instagram.svg",
    number: "506",
    today: "41",
    icon: "images/icon-up.svg",
  },
  {
    key: 4,
    social: "youtube",
    name: "FelipePolo",
    image: "images/icon-youtube.svg",
    number: "12k",
    today: "3",
    icon: "images/icon-up.svg",
  },
];

function Cards(props) {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {data.map((x) => (
            <Card
              key={x.key}
              social={x.social}
              name={x.name}
              image={x.image}
              number={x.number}
              today={x.today}
              icon={x.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
