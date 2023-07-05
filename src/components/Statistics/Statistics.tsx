import React, { useEffect, useState } from 'react';
import './Statistics.css'
import { getStats } from '../../functions/getStatistic';


export const Statistics = () => {
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    const AsyncFunction  = async () => {
        setStats(null)
        setStats(await getStats())  
      }
      AsyncFunction()

  },[]);

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
                    <p>Poziom 1</p> 
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
                <p>Uczony</p>
                <p>Wojownik</p>
                <p>Wojownik</p>
                <p>Wojownik</p>
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
