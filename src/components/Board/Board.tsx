import React, { useEffect, useState } from "react";
import { Spinner } from "../common/Spinner/Spinner";
import "./Borad.css";

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
      console.log(item.enemyImg)
      const style = {
        gridArea: `a${item.lp}`,
        backgroundImage: `url("./enemy/${item.enemyImg}.webp")`
      };
      return <div key={index} className='base' style={style}></div>;
    } else if (item.base === 'grass'){
      const style = {
        gridArea: `a${item.lp}`,
        backgroundImage: `url("./images/plates/grass.webp")`
      };
      return <div key={index} className='base' style={style}></div>;
    } else {
      const style = {
        gridArea: `a${item.lp}`,
      };
      return <div key={index} className='base' style={style}></div>;

    }
    
  })
) : (
  <p>Tablica boardFinal nie istnieje lub jest pusta</p>
)}
        </div>
      </section>
    </>
  );
};
