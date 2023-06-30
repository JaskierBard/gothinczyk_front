import React, { useEffect, useState } from 'react';
import './Equipment.css'
import { getAll } from '../../functions/getEquipment';
import { Spinner } from './common/Spinner/Spinner';
import { EquipmentCell } from './EquipmentCell';

export const Equipment = () => {
  const [items, setItems] = useState<any>(null)
  const [ceils, setCeils] = useState<any>(0)
  const [value, setValue] = useState<number>(0)
  const [current, setCurrent] = useState<any>()

  useEffect(() => {
    const AsyncFunction  = async () => {
      setItems(null)
      setItems(await getAll())  
    }
    AsyncFunction()
  },[]);

  useEffect(() => {
    Pagination(value)
  },[items, value]);

  const Pagination  = async (value: number) => {
    let counter = 30 + value;
    let Cutcounter = value;

    const Array:any = []
    try {
      items.forEach((element1: any) => (
        Object.values(element1).forEach((item: any) => {
          if (item !== undefined) {
            item.forEach((element2: any) => {
              if (counter > 0 && Cutcounter <= 0) {
                Array.push(element2)
              }
              counter--
              Cutcounter--
          })
          }
        
        }
        )
      ))
    } catch (err) {
    
    }
    
    setCeils(30 - Array.length)
    setCurrent(Array)
  }
  
  const MouseWheelDetector  = async (event:any) => {
    if (event.deltaY < 0) {
      if (value < 5) {
        setValue(value)
      } else {
        setValue((prevValue) => prevValue -5)
      }
    }else {
      if (value < (current.length - 15)) {
        setValue((prevValue) => prevValue +5)
      } else {
        setValue(value)
      }
    }
  }

  if (items === null) {
    return (
      <><Spinner/>
      <div className='eq' >
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
      <div className='eq' onWheel={MouseWheelDetector}>
        {
          current.map((element2: any) => (
          <EquipmentCell key={element2.id} path={element2} type={element2.type}/>
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

