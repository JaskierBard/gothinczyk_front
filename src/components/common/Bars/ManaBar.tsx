import React, { useEffect, useState } from "react";
import "./Bars.css";
import { getStats } from "../../../functions/getStatistic";

export const ManaBar = () => {
  const [mana, setMana] = useState<number>(0);
  const [maxMana, setMaxMana] = useState<number>(0);
  useEffect(() => {
    Stats();
  }, []);

  const Stats = async () => {
    const result = await getStats();

    setMana(result?.statistic["mana"]);
    setMaxMana(result?.statistic["max_mana"]);
  };

  return (
    <div className="bar_mg">
      <progress className="health_bar" value={mana} max={maxMana}></progress>
    </div>
  );
};
