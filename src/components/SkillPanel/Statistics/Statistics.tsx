import React, { useEffect, useState } from 'react';
import './Statistics.css'
import { getStats } from '../../../functions/getStatistic';
import { checkLevel } from '../../../functions/checkLevel';
import { StatisticAdding } from '../Test/AddStatistics';

interface Props {
    stats: any
    exp: any
  }

export const Statistics = (props:Props) => {
  const [toNewLvl, setToNewLevel] = useState<any>(null)



  const weaponUsing = (percent: number, distance: string ) => {
    if (percent < 30) {
        return <p>Zielony</p>
    } else if ( percent < 60){
        if (distance ==='short') {
            return <p>Wojownik</p>
        } else {
            return <p>Strzelec</p>
        }
    } else {
        return <p>Mistrz</p>
    }
  }

  useEffect(() => {
    const AsyncFunction  = async () => {
        
        if (props.stats) {
            // console.log(props.exp)
        setToNewLevel(await checkLevel(props.exp , props.stats.experience, props.stats.level))
        }
      }

      AsyncFunction()

  },[props.exp]);

    return <>
            <div className='stats'>
            <div className='stats_bgc'>
         </div>

        <div className='character'>
            <h2>POSTAĆ</h2>
                <div className='names'>
                    <p>Nowicjusz</p> 
                    <p>Magia</p> 
                    <p>Doświadczenie</p> 
                    <p>Nast. Poziom</p> 
                    <p>Punkty nauki</p>
                </div>
                <div className='values'>
                    <p>Poziom {props.stats.level}</p> 
                    <p>Krąg {props.stats.magic_circle}</p>
                    <p>{props.stats.experience}</p>
                    <p>{toNewLvl}</p>
                    <p>{props.stats.learning_points}</p>
                </div>
        </div>
        <div className='attributes'>
            <h2>ATRYBUTY</h2>
            <div className='names'>
                <p>Siła</p> 
                <p>Zręczność</p> 
                <p>Mana</p> 
                <p>Punkty trafień</p>
            </div>
            <div className='values'>
                <p>{props.stats.strength}</p>
                <p>{props.stats.dexterity}</p>
                <p>{props.stats.mana}</p>
                <p>{props.stats.hitpoints}</p>
            </div>
        </div>
        <div className='protection'>
            <h2>OCHRONA</h2>
            <div className='names'>
                <p>Broń</p>
                <p>Pociski</p>
                <p>Smoczy ogień</p> 
                <p>Magia</p> 
            </div>
            <div className='values'>
                <p>100</p>
                <p>10</p>
                <p>10</p>
                <p>100</p>
            </div>
            
        </div>
        <div className='skills'>
            <h2>UMIEJĘTNOŚCI</h2>
            <div className='names'>
                <p>Br. jednoręczna</p>  
                <p>Br. dwuręczna</p> 
                <p>Łuki</p> 
                <p>Kusze</p>
                    <br />
                <p>Skradanie się</p>
                <p>Włamywanie się</p>
                <p>Kradzież kiesz</p>
                    <br />
                <p>Tworzenie run</p> 
                <p>Alchemia</p> 
                <p>Kowalstwo</p> 
                <p>Zbieranie trofeów</p> 
            </div>
            <div className='values'>
                {weaponUsing(props.stats.one_handed, 'short')}
                {weaponUsing(props.stats.two_handed, 'short')}
                {weaponUsing(props.stats.bow, 'long')}
                {weaponUsing(props.stats.crossbow, 'long')}
                <br />

                <p>-</p>
                <p>-</p>
                <p>-</p>
                <br/>
                <p>-</p>

                <p>-</p>
                <p>-</p>
                <p>-</p>
            </div>
            <div className='percent'>
                <p>{props.stats.one_handed}%</p>
                <p>{props.stats.two_handed}%</p>
                <p>{props.stats.bow}%</p>
                <p>{props.stats.crossbow}%</p>
            </div>
    </div>
    </div>
    </>
 
  

 
}
