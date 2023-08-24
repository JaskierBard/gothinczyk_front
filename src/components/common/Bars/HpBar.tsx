import React, { useEffect, useState } from "react";
import "./Bars.css";
import { getStats } from "../../../functions/getStatistic";

export const HpBar = () => {
  const [hp, setHp] = useState<number>(0);
  const [maxHp, setMaxHp] = useState<number>(0);

  useEffect(() => {
    Stats();
  }, []);

  const Stats = async () => {
    const result = await getStats();
    setHp(result?.statistic["hitpoints"]);
    setMaxHp(result?.statistic["max_hitpoints"]);
  };

  return (
    <div className="bar_hp">
      <progress className="health_bar" value={hp} max={maxHp}></progress>
    </div>
  );
};
