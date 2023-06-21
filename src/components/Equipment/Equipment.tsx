import React, { useEffect, useState } from 'react';
import './Equipment.css'
import { EquipmentCell } from './EquipmentCell';
import { getArmors, getWeapons } from '../../functions/getEquipment';

const ceils = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22','23', '24', '25', '26', '27', '28', '29', '30',]


export const Equipment = () => {
  const [armor, setArmor] = useState<any>([
    { id: '1', name: 'error' ,quantity: 1, img: 'skorzany_pancerz', picture: 'error', needPicture:'error'},
    { id: '2', name: 'error' ,quantity: 1, img: 'farmers_clothing_icon', picture: 'error', needPicture:'error'},

  ]);
  const [weapon, setWeapon] = useState<any>([])



  useEffect(() => {
    const AsyncFunction  = async () => {
    setWeapon(await getWeapons())
    setArmor(await getArmors())
  
  AsyncFunction()
    }
},[]);

  return (
    <div className='eq'>
      {weapon.map((item: any) => (
            <EquipmentCell key={item.id} path={item.img} type='weapon'/>
        ))}
        {armor.map((item: any) => (
            <EquipmentCell key={item.id} path={item.img} type='armor'/>
        ))}
        
        
    </div>
  );
}