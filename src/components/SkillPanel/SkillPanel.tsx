import React, { useEffect, useState } from "react";
import { StatisticAdding } from "./Test/AddStatistics";
import { getStats } from "../../functions/getStatistic";
import { Character } from "./Character/Character";
import { Attributes } from "./Attributes/Attributes";
import { Protection } from "./Protection/Protection";
import { Skills } from "./Skills/Skills";
import "./SkillPanel.css";
import { addAttributes } from "../../functions/addAttributes";

export const SkillPanel = () => {
  const [stats, setStats] = useState<any>(null);
  const [expLeft, setExpLeft] = useState<any>(null);


  useEffect(() => {

    Stats();
  },[]);
  const Stats = async () => {
    const result = await getStats()
      setStats(result?.statistic);
      setExpLeft(result?.exp);

  };
  const addExperience = async (experience:number) => {
    try {
      const res = await fetch(
        `http://localhost:3001/player/statistic/experience/${experience}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const resetStats = async () => {
    await fetch(`http://localhost:3001/player/statistic/reset`);
    await Stats();

  };

  return (
    <>
      <div className="stats">
        <div className="stats_bgc"></div>
        <Character stats={stats} toNewLvl={expLeft} />
        <Attributes stats={stats} />
        <Protection stats={stats} />
        <Skills stats={stats} />
      </div>

      <StatisticAdding
        expClick={async() => {await addExperience(200); await Stats()}}
        strengthClick={async() => {await addAttributes(stats['learning_points'], "strength");await Stats()}}
        dexterityClick={async() => {await addAttributes(stats['learning_points'], "dexterity");await Stats()}}
        manaClick={async() => {await addAttributes(stats['learning_points'], "mana");await Stats()}}
        hitPointsClick={async() => {await addAttributes(stats['learning_points'], "hitpoints");await Stats()}}
        resetStats={resetStats}
      />
    </>
  );
};
