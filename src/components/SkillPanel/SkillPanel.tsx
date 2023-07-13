import react, { useEffect, useState } from "react";
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
  const [reset, setReset] = useState<boolean>(false);
  const [exp, setExp] = useState<number>(0);
  const [toNewLvl, setToNewLevel] = useState<any>(0);

  useEffect(() => {
    const AsyncFunction = async () => {
      setStats(await getStats());
    };
    AsyncFunction();
    setReset(false);
  }, [exp, reset]);

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
    setReset(true);
    await fetch(`http://localhost:3001/player/statistic/reset`);
  };

  return (
    <>
      <div className="stats">
        <div className="stats_bgc"></div>
        <Character stats={stats} exp={exp} toNewLvl={toNewLvl} />
        <Attributes stats={stats} />
        <Protection stats={stats} />
        <Skills stats={stats} />
      </div>

      <StatisticAdding
        expClick={() => {addExperience(200); setReset(true)}}
        strengthClick={() => {addAttributes(stats['learning_points'], "strength"); setReset(true)}}
        dexterityClick={() => {addAttributes(stats['learning_points'], "dexterity"); setReset(true)}}
        manaClick={() => {addAttributes(stats['learning_points'], "mana"); setReset(true)}}
        hitPointsClick={() => {addAttributes(stats['learning_points'], "hitpoints"); setReset(true)}}
        resetStats={resetStats}
      />
    </>
  );
};
