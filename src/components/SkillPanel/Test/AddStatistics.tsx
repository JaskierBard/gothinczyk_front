import React, { FormEvent, useState } from 'react';
import './AddStatistics.css'



export const StatisticAdding = ({expClick, resetStats}:any) => {

  
  

    return <>
    {/* <Statistics ex={ex} /> */}
    <div className='add'>
        <button onClick={expClick}>Dodaj doświadczenie</button><button>Odejmij doświadczenie</button><br />
        <button>Dodaj siłę</button>
        <button>Dodaj zręczność</button>
        <button>Dodaj manę</button>
        <button>Dodaj punkty trafień</button><br />
        <button>Dodaj br. jednoręczna</button>
        <button>Dodaj br. dwuręczna</button>
        <button>Dodaj łuki</button>
        <button>Dodaj kusze</button><br />

        <button onClick={resetStats} style={{backgroundColor:'red'}}>Reset</button><br />

    </div>
    </>

    
}