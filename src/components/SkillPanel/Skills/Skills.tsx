import React from "react";
// import './Skills.css'

interface Props {
  stats: any;
}

export const Skills = (props: Props) => {
  const weaponUsing = (percent: number, distance: string) => {
    if (percent < 30) {
      return <p>Zielony</p>;
    } else if (percent < 60) {
      if (distance === "short") {
        return <p>Wojownik</p>;
      } else {
        return <p>Strzelec</p>;
      }
    } else {
      return <p>Mistrz</p>;
    }
  };

  return (
    <div className="skills">
      <h2>UMIEJETNOSCI</h2>
      <div className="names">
        <p>Br. jednoreczna</p>
        <p>Br. dwureczna</p>
        <p>Luki</p>
        <p>Kusze</p>
        <br />
        <p>Skradanie sie</p>
        <p>Wlamywanie sie</p>
        <p>Kradziez kiesz</p>
        <br />
        <p>Tworzenie run</p>
        <p>Alchemia</p>
        <p>Kowalstwo</p>
        <p>Zbieranie trofeow</p>
      </div>
      {props.stats && (
        <div className="values">
          {weaponUsing(props.stats.one_handed, "short")}
          {weaponUsing(props.stats.two_handed, "short")}
          {weaponUsing(props.stats.bow, "long")}
          {weaponUsing(props.stats.crossbow, "long")}
          <br />

          <p>-</p>
          <p>-</p>
          <p>-</p>
          <br />
          <p>-</p>

          <p>-</p>
          <p>-</p>
          <p>-</p>
        </div>
      )}
      {props.stats && (
        <div className="percent">
          <p>{props.stats.one_handed}%</p>
          <p>{props.stats.two_handed}%</p>
          <p>{props.stats.bow}%</p>
          <p>{props.stats.crossbow}%</p>
        </div>
      )}
    </div>
  );
};
