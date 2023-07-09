import react, {useEffect, useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { StatisticAdding } from "./Test/AddStatistics";
import { getStats } from "../../functions/getStatistic";

export const SkillPanel = () => {
  const [stats, setStats] = useState<any>(null)
  const [reset, setReset] = useState<boolean>(false)
  const [exp, setExp] = useState<number>(0)
  
  useEffect(() => {

    const AsyncFunction  = async () => {
        setStats(null)
        setStats(await getStats())  
        console.log('tic')
      }
    AsyncFunction()
    setReset(false)

  },[exp, reset]);

  const addExperience = async () => {
    let experience = 500
    setExp(exp => exp + experience)
      await fetch(`http://localhost:3001/player/statistic/experience/${experience}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  };

  const resetStats = async () => {
    setReset(true)

    await fetch(`http://localhost:3001/player/statistic/reset`);
};
    
  if (stats) {
    // console.log(stats)
  return (
    <div>
      <Statistics stats={stats} exp={exp}/>
      <StatisticAdding expClick={addExperience} resetStats={resetStats}/>
    </div>
  );
  } else {
    return null
  }
};