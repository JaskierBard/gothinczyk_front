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
    const eqname:any = document.querySelector(`.name`);
    eqhtml.src = './images/'+ props.type + '/' + props.path.img + '.webp';
    eqname.innerText = props.path.name
    eqhtml.style.opacity = 1;
  }

  const Leave = () => {
    const eqhtml:any = document.querySelector(`.img`);
    const eqname:any = document.querySelector(`.name`);
    eqname.innerText = ''

    eqhtml.style.opacity = 0;
  }

  return (
    <div className='ceil'>
      <img src={'./images/'+ props.type + '/' + props.path.img + '.webp'} alt="" onMouseEnter={Enter} onMouseLeave={Leave}/>
    </div>
  );
}