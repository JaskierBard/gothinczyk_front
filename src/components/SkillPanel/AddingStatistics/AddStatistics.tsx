import React  from "react";
import "./AddStatistics.css";

export const StatisticAdding = ({
  expClick,
  resetStats,
  strengthClick,
  dexterityClick,
  manaClick,
  hitPointsClick
}: any) => {
  return (
    <>
      <div className="add">
        <button onClick={expClick}>Dodaj doświadczenie</button>
        <button>Odejmij doswiadczenie</button>
        <br />
        <button onClick={strengthClick}>Dodaj siłę</button>
        <button onClick={dexterityClick}>Dodaj zręczność</button>
        <button onClick={manaClick}>Dodaj manę</button>
        <button onClick={hitPointsClick}>Dodaj punkty trafień</button>
        <br />
        <button>Dodaj br. jednoręczna</button>
        <button>Dodaj br. dwuręczna</button>
        <button>Dodaj łuki</button>
        <button>Dodaj kusze</button>
        <br />

        <button onClick={resetStats} style={{ backgroundColor: "red" }}>
          Reset
        </button>
        <br />
      </div>
    </>
  );
};
