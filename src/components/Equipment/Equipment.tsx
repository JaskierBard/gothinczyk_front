import React, { forwardRef, useEffect, useRef, useState } from 'react';
import './Equipment.css'
import { EquipmentCell } from './EquipmentCell';
import { getAlchemy, getArmors, getWeapons } from '../../functions/getEquipment';

export const Equipment = () => {
  const [armor, setArmor] = useState<any>([]);
  const [weapon, setWeapon] = useState<any>([])
  const [alchemy, setAlchemy] = useState<any>([])
  const [ceils, setCeils] = useState<any>()

  useEffect(() => {
    const AsyncFunction  = async () => {
      setWeapon(await getWeapons())
      setArmor(await getArmors())
      setAlchemy(await getAlchemy())
    }
    AsyncFunction()
  },[]);

  useEffect(() => {
    const AsyncFunction  = async () => {
      setCeils(30 - ((armor.length) + (weapon.length) + (alchemy.length)))
    }
    AsyncFunction()
  },[armor, weapon, alchemy]);

  return (
    <div className='eq' >
      {weapon.map((item: any) => (
        <EquipmentCell key={item.id} path={item} type='weapon'  />
      ))}
      {armor.map((item: any) => (
        <EquipmentCell key={item.id} path={item} type='armor'/>
      ))}
      {alchemy.map((item: any) => (
        <EquipmentCell key={item.id} path={item} type='herbsAndpotions' ceil={ceils}/>
      ))}
      {Array.from({length:ceils}, (value, index) => (
        <div className='ceil' key={index}></div>
      ))}
      <div className='showItem' >
        <p className='name'></p>
        <p className='price'></p>
        <img className={'img'} style={{opacity:0, width:100, height: 100,}} />  
      </div>
    </div>
  );
}

