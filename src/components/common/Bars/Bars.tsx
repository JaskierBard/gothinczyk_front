import React, { useEffect, useState } from "react"
import './Bars.css'
import { getStats } from "../../../functions/getStatistic";

export const Bars = () => {
    const [hp, setHp] = useState<number>(0);
  const [maxHp, setMaxHp] = useState<number>(0);
  const [mana, setMana] = useState<number>(0);
  const [maxMana, setMaxMana] = useState<number>(0);
useEffect(() => {
    Stats();
  },[]);

  const Stats = async () => {
    const result = await getStats()
      setHp(result?.statistic['hitpoints']);
      setMaxHp(result?.statistic['max_hitpoints']);
      setMana(result?.statistic['mana']);
      setMaxMana(result?.statistic['max_mana']);


  };

    return (
        <footer>
        <div className="bar_hp">
            <progress className="health_bar" value={hp} max={maxHp}></progress>
        </div>
        <div className="bar_mg">
            <progress className="health_bar" value={mana} max={maxMana}></progress>
        </div>
        </footer>
    )
}