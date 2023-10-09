import React, { useEffect, useState } from "react";
import { Spinner } from "../common/Spinner/Spinner";
import "./Borad.css";
import { directionChoice } from "../../functions/directionChoice";
import { getEnemyInfo } from "../../functions/getEnemyInfo";

export const Background = () => {
  const [position, setPosition] = useState<any>({ x: 200, y: 200 });
  const [hover, setHover] = useState<any>([]);

  const [boardFinal, setBoardFinal] = useState<any>();


  const events = async () => {
    const res = await fetch(`http://localhost:3001/board`);
    const zmienna = await res.json();
    setBoardFinal(zmienna.events);
  };

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX - 350, y: e.clientY - 20 });
  };

  const onMouseClick = async (enemyId: any) => {
    setHover(await getEnemyInfo(enemyId));
  };

  useEffect(() => {
    events();
  }, []);

  return (
    <>
      <section className="background" onMouseMove={handleMouseMove}>
        <div className="bgc">
          {boardFinal ? (
            boardFinal.map((item: any, index: any) => {
              if (item.enemyImg !== "") {
                const style = {
                  gridArea: `a${item.lp}`,
                  backgroundImage: `url("./enemy/${item.enemyImg}.webp")`,
                };
                return (
                  <div
                    key={index}
                    // onMouseEnter={()=>onMouseEnter(item)}
                    className="base active"
                    onClick={() => onMouseClick(item.enemyId)}
                    style={style}
                  ></div>
                );
              } else if (item.base !== "space") {
                return (
                  <div
                    key={index}
                    className="base"
                    style={directionChoice(item.lp, item.base)}
                  ></div>
                );
              } else {
                const style = {
                  gridArea: `a${item.lp}`,
                };
                return <div key={index} className="base" style={style}></div>;
              }
            })
          ) : (
            <Spinner />
          )}
        </div>

        <div
          style={{
            width: "220px",
            borderRadius: "3%",
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            height: "200px",
            backgroundImage: `url("./enemy/${hover.img}.webp")`,
            backgroundSize: "cover",
          }}
        >
          <p style={{ backgroundColor: "rgba(0,0,0,80%)", color: "gold" }}>
            {hover.name}
          </p>
          <table style={{ backgroundColor: "rgba(0,0,0,80%)", color: "gold" }}>
            <thead>
              <br />
              <tr>
                <th>Obrona</th>
              </tr>
              <br />
            </thead>
            <tbody>
              <tr>
                <td>Broń</td>
                <td>{hover.def_weapon}</td>
              </tr>
              <tr>
                <td>Łuki</td>
                <td>{hover.def_bow}</td>
              </tr>
              <tr>
                <td>Ogień</td>
                <td>{hover.def_fire}</td>
              </tr>
              <tr>
                <td>Magia</td>
                <td>{hover.def_magic}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
