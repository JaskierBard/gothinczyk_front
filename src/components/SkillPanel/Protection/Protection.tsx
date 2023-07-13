import React from "react";
import "./Protection.css";

interface Props {
  stats: any;
}

export const Protection = (props: Props) => {
  return (
    <div className="protection">
      <h2>OCHRONA</h2>
      <div className="names">
        <p>Broń</p>
        <p>Pociski</p>
        <p>Smoczy ogień</p>
        <p>Magia</p>
      </div>
      <div className="values">
        <p>100</p>
        <p>10</p>
        <p>10</p>
        <p>100</p>
      </div>
    </div>
  );
};
