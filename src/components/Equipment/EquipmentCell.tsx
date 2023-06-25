import React from 'react';
import './Equipment.css'

interface Props {
  path: any
  type: string
  ceil?: number
}

export const EquipmentCell = (props:Props) => {

  const Enter = () => {
    const eqhtml:any = document.querySelector(`.img`);
    eqhtml.src = './images/'+ props.type + '/' + props.path + '.webp';
    eqhtml.style.opacity = 1;
  }

  const Leave = () => {
    const eqhtml:any = document.querySelector(`.img`);
    eqhtml.style.opacity = 0;
  }

  return (
    <div className='ceil'>
      <img src={'./images/'+ props.type + '/' + props.path + '.webp'} alt="" onMouseEnter={Enter} onMouseLeave={Leave}/>
    </div>
  );
}