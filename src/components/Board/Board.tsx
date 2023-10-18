import React, { useEffect, useState } from "react";
import { Spinner } from "../common/Spinner/Spinner";
import "./Borad.css";
import { directionChoice } from "../../functions/directionChoice";
import { getEnemyInfo } from "../../functions/getEnemyInfo";

export const Background = () => {
  const [hover, setHover] = useState<any>([]);
  const [hide, setHide] = useState<boolean>(false);


  const [boardFinal, setBoardFinal] = useState<any>();
  
  const events = async () => {
    const res = await fetch(`http://localhost:3001/board`);
    const zmienna = await res.json();
    setBoardFinal(zmienna.events);
  };


  const onMouseEnter = async (enemyId: any) => {
    setHover(await getEnemyInfo(enemyId));
    setHide(true);
  };

  const clickPosition = (e: any) => {
    console.log(e.clientX)
    console.log(e.clientY)

  }

  useEffect(() => {
    events();
  }, []);

  return (
    <>
      <section className="background">
        <div className="bgc">
          {boardFinal ? (
            boardFinal.map((item: any, index: any) => {
              if (item.enemyImg !== null) {
                return (
                  <div
                    key={index}
                    className="base active"
                    onMouseEnter={() => onMouseEnter(item.enemyId)}
                    onMouseLeave={() => setHide(false)}
                    style={directionChoice(item.lp, "enemy", item.enemyImg)}
                  ></div>
                );
              } else if (item.base !== "space") {
                // console.log('cyk')

                return (
                  <div
                    key={index}
                    className="base"
                    style={directionChoice(item.lp, "plates", item.base)}
                  ></div>
                );
              } else {
                const style = {
                  gridArea: `a${item.lp}`,
                };
                return <div key={index} className="space" style={style}></div>;
              }
            })
          ) : (
            <Spinner />
          )}
        </div>
        {hide && (
          <div
            style={{
              width: "220px",
              borderRadius: "3%",
              position: "absolute",
              // left: `${position.x-550}px`,
              // top: `${position.y}px`,
              height: "200px",
              backgroundImage: `url("./images/enemy/${hover.img}.webp")`,
              backgroundSize: "cover",
            }}
          >
            <p style={{ backgroundColor: "rgba(0,0,0,80%)", color: "gold" }}>
              {hover.name}
            </p>
            <table
              style={{ backgroundColor: "rgba(0,0,0,80%)", color: "gold" }}
            >
              <thead>
                <tr>
                  <th>Obrona</th>
                </tr>
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
            {/* <HpBar left={`${position.x+25}px`} top={`${position.y+200}px`}/> */}
          </div>
        )}
      </section>
    </>
  );
};
