import React, { useState } from 'react';
import './Character.css'


interface Props {
    stats: any
    exp: any
  }

export const Character = ((props:Props) => {
  const [toNewLvl, setToNewLevel] = useState<any>(null)





//   useEffect(() => {
//     const AsyncFunction  = async () => {
        
//         if (props.stats) {
//             // console.log(props.exp)
//         setToNewLevel(await checkLevel(props.exp , props.stats.experience, props.stats.level))
//         }
//       }

//       AsyncFunction()

//   },[props.exp]);

    return <div className='character'>
            <h2>POSTAĆ</h2>
                <div className='names'>
                    <p>Nowicjusz</p> 
                    <p>Magia</p> 
                    <p>Doświadczenie</p> 
                    <p>Nast. Poziom</p> 
                    <p>Punkty nauki</p>
                </div>
                {props.stats && (
                <div className='values'>
                    <p>Poziom {props.stats.level}</p> 
                    <p>Krąg {props.stats.magic_circle}</p>
                    <p>{props.stats.experience}</p>
                    <p>10</p>
                    <p>{props.stats.learning_points}</p>
                </div>
                )}
        </div>
        
})
