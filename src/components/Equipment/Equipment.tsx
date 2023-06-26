import React, { useEffect, useState } from 'react';
import './Equipment.css'
import { getAll } from '../../functions/getEquipment';
import { Spinner } from './common/Spinner/Spinner';
import { EquipmentCell } from './EquipmentCell';

export const Equipment = () => {
  const [items, setItems] = useState<any>(null)
  const [ceils, setCeils] = useState<any>(0)

  useEffect(() => {
    const AsyncFunction  = async () => {
      setItems(null)
      setItems(await getAll())  
    }
    AsyncFunction()
  },[]);

  useEffect(() => {
    const AsyncFunction  = async () => {
      if (items !== null) {
        const Array = [items[0].length, items[1].length, items[2].length, items[3].length, items[4].length]
        let count = 0;

        Array.forEach(element => {
          if (element === null) {
            element = 0;
          }
          if (count + element > 30) {
            // let name = element.key
            element = 30 - count
          }
          count += element;
        });
        // console.log(count)
        setCeils(30 - count)
        
      } 
    }
    AsyncFunction()
  },[items]);


  if (items === null) {
    return (
      <><Spinner/>
      <div className='eq'>
        {Array.from({length:ceils}, (value, index) => (
          <div className='ceil' key={index}>
          </div>
      ))}
      <div className='showItem' >
        <p className='name'></p>
        <p className='price'></p>
        <img className={'img'} style={{opacity:0, width:100, height: 100,}} alt='img' />  
      </div>
      </div>
      </>

    );
}else{
  return (
    <div className='eq' >
      {
        items.map((element1: any) => (
          Object.values(element1).map((item: any) => (
              item.map((element2: any) => (
                <EquipmentCell key={element2.id} path={element2} type={Object.keys(element1)[0]}/>
              ))
          ))
        ))
      }
      {Array.from({length:ceils}, (value, index) => (
        <div className='ceil' key={index}></div>
      ))}
      <div className='showItem' >
        <p className='name'></p>
        <p className='price'></p>
        <img className={'img'} style={{opacity:0, width:100, height: 100,}} alt='img' />  
      </div>
    </div>
  );
}

  
}

