import React from "react";
import "./Attributes.css";

interface Props {
  stats: any;
}

export const Attributes = (props: Props) => {
  return (
    <div className="attributes">
      <h2>ATRYBUTY</h2>
      <div className="names">
        <p>Sila</p>
        <p>Zrecznosc</p>
        <p>Mana</p>
        <p>Punkty trafien</p>
      </div>
      {props.stats && (
        <div className="values">
          <p>{props.stats.strength}</p>
          <p>{props.stats.dexterity}</p>
          <p>{props.stats.mana}</p>
          <p>{props.stats.hitpoints}</p>
        </div>
      )}
    </div>
  );
};
