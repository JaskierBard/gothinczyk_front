import React, { useEffect, useState } from 'react';
import { Spinner } from '../common/Spinner/Spinner';
import { board, nboard } from './BoardMaker';
import './Borad.css';

interface Props {
    rollResult: number
    turn: string
  }
  const updatedBoard = [...board];

export const Background = (props: Props) => {
    const [allEvents, setAllEvents]= useState<any>();


    // const [boardd, setBoardd] = useState<string[] >(board)
    const [boardFinal, setBoardFinal] = useState<any >([...board])


  

    const events = async() => {
        const res = await fetch(`http://localhost:3001/board`);
        const zmienna = await res.json()
        zmienna.events.forEach((obj:any) => {
          if (obj.position >= 0 && obj.position < updatedBoard.length) {
            updatedBoard[obj.position] = obj.img;
          }
        });
        setBoardFinal(updatedBoard)
    };
 
 
    
    useEffect(() => {
        events()
    },[]);

   


  return (
     <>
    <div className='shadow'>
    </div> 
     <section className='background'>
    </section>
     <div className='bgc'>
     <div>
  {
    nboard.map((item:any, index) => {
      // console.log(Object.values(item)[0]);

      return (
        <div key={index} className={String(Object.values(item)[0])}>
          {String(Object.values(item)[0]) !== 'none' ? <img className='' src={`./enemy/${String(Object.values(item)[0])}.webp`} alt="" /> : null}
        </div>
      );
    })
  }
</div>
     </div>
     </>
    
  )
}



