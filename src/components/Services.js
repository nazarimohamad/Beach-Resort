import React, {Component} from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free coocktails",
        info: "Lorem dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info: "Lorem dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.titel}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
