import React, { useState } from 'react';
import './Equipment.css'
import { EquipmentDetail } from './EquipmentDetail';

interface Props {
  path: any
  type: string
  ceil?: number
}

export const EquipmentCell = (props:Props) => {
  const [details, setDetails] = useState<any>([]);


  const Enter = () => {
    setDetails(props.path)
    console.log(details)

}

const Leave = () => {
    console.log('Leave')
}



  return (
    <div className='ceil'>
      <img src={'./images/'+ props.type + '/' + props.path + '.webp'} alt="" onMouseEnter={Enter}/>
      
    </div>
    
  );
}