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
          {/* <div className="space" style={{top:'7.6vh', left:'7.6vh'}}></div>
          <div className="space" style={{top:'7.6vh', right:'7.6vh'}}></div>
          <div className="space" style={{bottom:'7.6vh', left:'7.6vh'}}></div>
          <div className="space" style={{bottom:'7.6vh', right:'7.6vh'}}></div> */}

{boardFinal ? (
  boardFinal.map((item: any, index: any) => {
    console.log(index);
    return <div key={index} className={item.type} style={{gridArea:`${'a' +item.lp}`}}></div>;
  })
) : (
  <p>Tablica boardFinal nie istnieje lub jest pusta</p>
)}
        </div>
      </section>
    </>
  );
};
