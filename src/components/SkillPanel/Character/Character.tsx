import React from "react";
import "./Character.css";

interface Props {
  stats: any;
  toNewLvl: any;
}

export const Character = (props: Props) => {
  return (
    <div className="character">
      <h2>POSTAĆ</h2>
      <div className="names">
        <p>Nowicjusz</p>
        <p>Magia</p>
        <p>Doświadczenie</p>
        <p>Nast. Poziom</p>
        <p>Punkty nauki</p>
      </div>
      {props.stats && (
        <div className="values">
          <p>Poziom {props.stats.level}</p>
          <p>Krąg {props.stats.magic_circle}</p>
          <p>{props.stats.experience}</p>
          <p>{props.toNewLvl}</p>
          <p>{props.stats.learning_points}</p>
        </div>
      )}
    </div>
  );
};
