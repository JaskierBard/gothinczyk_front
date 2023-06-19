import React from 'react';
import './Equipment.css'
import { EquipmentCell } from './EquipmentCell';

const ceils = ['', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '',]


export const Equipment = () => {

  return (
    <div className='eq'>
        {ceils.map(() => (
            <EquipmentCell/>
        ))}
    </div>
  );
}