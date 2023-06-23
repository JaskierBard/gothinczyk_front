import React, { useEffect, useState } from 'react';
import './Equipment.css'
import { EquipmentCell } from './EquipmentCell';
import { getArmors, getWeapons } from '../../functions/getEquipment';



export const Equipment = () => {
  const [armor, setArmor] = useState<any>([
    { id: '1', name: 'error' ,quantity: 1, img: 'skorzany_pancerz', picture: 'error', needPicture:'error'},
    { id: '2', name: 'error' ,quantity: 1, img: 'farmers_clothing_icon', picture: 'error', needPicture:'error'},

  ]);
  const [weapon, setWeapon] = useState<any>([])
  const [ceils, setCeils] = useState<any>()




  useEffect(() => {
    const AsyncFunction  = async () => {
    setWeapon(await getWeapons())
    setArmor(await getArmors())
    }
    AsyncFunction()
},[]);

useEffect(() => {
  const AsyncFunction  = async () => {
  setCeils(30 - ((armor.length) + (weapon.length)))
  }
  AsyncFunction()
},[armor, weapon]);

  return (
    <div className='eq'>
      {weapon.map((item: any) => (
            <EquipmentCell key={item.id} path={item.img} type='weapon'/>
        ))}
        {armor.map((item: any) => (
            <EquipmentCell key={item.id} path={item.img} type='armor' ceil={ceils}/>
        ))}
        
        {Array.from({length:ceils}, (value, index) => (
          <div className='ceil' key={index}></div>
        ) )}
        
    </div>
  );
}