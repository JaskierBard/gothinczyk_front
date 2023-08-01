import React, { useEffect, useState } from 'react';
import { Spinner } from '../common/Spinner/Spinner';
import { board } from './BoardMaker';
import './Borad.css';

interface Props {
    rollResult: number
    turn: string
  }

export const Background = (props: Props) => {
    const [yellow, setYellow] = useState<number>(1);
    const [green, setGreen] = useState<number>(11);
    const [blue, setBlue] = useState<number>(10);
    const [red, setRed] = useState<number>(20);
    const [newBoard, setNewBoard] = useState<string[] >(board)


    const refresh = async() => {
        const res = await fetch(`http://localhost:3001/steps`);
        const zmienna = await res.json()

        setYellow(await zmienna.payload.yellow)
        setGreen(await zmienna.payload.green)
        setBlue(await zmienna.payload.blue)
        setRed(await zmienna.payload.red)
    };
 
    
    useEffect(() => {
            const news = board.map((item, index) => {
                index = index+1
              
    
                if (index === yellow) {
                    item = item + ' yellow_pawn'
                }
                if (index === green) {
                    item = item + ' green_pawn'
                }
                if (index === blue) {
                    item = item + ' blue_pawn'
                }
                if (index === red) {
                    item = item + ' red_pawn'
                }
                return item
               })

               setNewBoard(news) 
            //    refresh()
    },[red, green, blue, yellow, props.rollResult]);

   

    if (newBoard === null) {
        return <Spinner/>;
    }

  return (
     <>
    <div className='shadow'>
    </div> 
     <section className='background'>
    </section>
     <div className='bgc'>
        <div>
             {newBoard.map((item, index) => <div key={index} className={item}></div>)}
        </div>
     </div>
     </>
    
  )
}



