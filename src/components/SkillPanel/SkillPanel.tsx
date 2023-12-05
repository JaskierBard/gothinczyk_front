import React, { useEffect, useState } from "react";
import { StatisticAdding } from "./AddingStatistics/AddStatistics";
import { getStats } from "../../functions/getStatistic";
import { Character } from "./Character/Character";
import { Attributes } from "./Attributes/Attributes";
import { Protection } from "./Protection/Protection";
import { Skills } from "./Skills/Skills";
import "./SkillPanel.css";
import { addAttributes } from "../../functions/addAttributes";
import { NPC } from "../NPC/NPC";
import { addExperience } from "../../functions/addExperience";

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
      {/* <Bosper strengthClick={async() => {await addAttributes(stats['learning_points'], "strength");await Stats()}}/> */}

      {/* <StatisticAdding
        expClick={async() => {await addExperience(200); await Stats()}}
        strengthClick={async() => {await addAttributes(stats['learning_points'], "strength");await Stats()}}
        dexterityClick={async() => {await addAttributes(stats['learning_points'], "dexterity");await Stats()}}
        manaClick={async() => {await addAttributes(stats['learning_points'], "mana");await Stats()}}
        hitPointsClick={async() => {await addAttributes(stats['learning_points'], "hitpoints");await Stats()}}
        resetStats={resetStats}
      /> */}
    </>
  );
};
