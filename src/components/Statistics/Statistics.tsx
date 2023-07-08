import React, { useEffect, useState } from 'react';
import './Statistics.css'
import { getStats } from '../../functions/getStatistic';
import { checkLevel } from '../../functions/checkLevel';


export const Statistics = () => {
  const [stats, setStats] = useState<any>(null)
  const [level, setLevel] = useState<any>(null)


  useEffect(() => {
    const AsyncFunction  = async () => {
        setStats(null)
        setStats(await getStats())  
      }

      AsyncFunction()

  },[]);

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
        
        if (stats) {

        setLevel(await checkLevel(10, stats.experience, stats.level))  
        }
      }

      AsyncFunction()

  },[stats]);

    if (stats) {
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
                    <p>Poziom {level}</p> 
                    <p>Krąg {stats.magic_circle}</p>
                    <p>{stats.experience}</p>
                    <p>1</p>
                    <p>{stats.learning_points}</p>
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
                <p>{stats.strength}</p>
                <p>{stats.dexterity}</p>
                <p>{stats.mana}</p>
                <p>{stats.hitpoints}</p>
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
                {weaponUsing(stats.one_handed, 'short')}
                {weaponUsing(stats.two_handed, 'short')}
                {weaponUsing(stats.bow, 'long')}
                {weaponUsing(stats.crossbow, 'long')}
                <br />

                <p>-</p>
                <p>-</p>
                <p>-</p>
                <br />
                <p>-</p>

                <p>-</p>
                <p>-</p>
                <p>-</p>
            </div>
            <div className='percent'>
                <p>{stats.one_handed}%</p>
                <p>{stats.two_handed}%</p>
                <p>{stats.bow}%</p>
                <p>{stats.crossbow}%</p>
            </div>
    </div>
    </div>
    </>
    } else {
        return null
    }
  

 
}
