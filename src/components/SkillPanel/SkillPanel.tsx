import react, {useEffect, useState } from "react";
import { StatisticAdding } from "./Test/AddStatistics";
import { getStats } from "../../functions/getStatistic";
import { Character } from "./Character/Character";
import { Attributes } from "./Attributes/Attributes";
import { Protection } from "./Protection/Protection";
import { Skills } from "./Skills/Skills";
import './SkillPanel.css'

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
    
  
  return <>
    <div className='stats'>
            <div className='stats_bgc'></div>
            {/* {stats && (
              <> */}
            <Character stats={stats} exp={exp}/>
            <Attributes stats={stats}/>
            <Protection stats={stats}/>
            <Skills stats={stats}/>
            {/* </>
            )} */}
    </div>

      <StatisticAdding expClick={addExperience} resetStats={resetStats}/>
  </>
      
  ;

};