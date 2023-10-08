import React, { useEffect, useState } from "react";
import { Spinner } from "../common/Spinner/Spinner";
import "./Borad.css";
import { directionChoice } from "../../functions/directionChoice";

export const Background = () => {
  const [allEvents, setAllEvents] = useState<any>();
  const [boardFinal, setBoardFinal] = useState<any>();

  const events = async () => {
    const res = await fetch(`http://localhost:3001/board`);
    const zmienna = await res.json();
    setBoardFinal(zmienna.events);
  };

  useEffect(() => {
    events();
  }, []);

  return (
    <>
      <section className="background">
        <div className="bgc">

{boardFinal ? (
  boardFinal.map((item: any, index: any) => {
    if (item.enemyImg !== '') {
      const style = {
        gridArea: `a${item.lp}`,
        backgroundImage: `url("./enemy/${item.enemyImg}.webp")`
      };
      return <div key={index} className='base' style={style}></div>;
    } else if (item.base !== 'space'){
      return <div key={index} className='base' style={directionChoice(item.lp, item.base)}></div>;

    } else {
      const style = {
        gridArea: `a${item.lp}`,
      };
      return <div key={index} className='base' style={style}></div>;

    }
    
  })
) : (
  <Spinner/>
)}
        </div>
      </section>
    </>
  );
};
