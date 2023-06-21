import React from 'react';
import './Equipment.css'

interface Props {
  path: any
  type: string
}

export const EquipmentCell = (props:Props) => {
// policzyć ile elementów i dodać tyle żeby było 30
//baza danych do przechowywaia pozycji , wyrzuconych oczek i kolejności

  return (
    <div className='ceil'>
      <img src={'./images/'+props.type+ '/' + props.path + '.webp'} alt="" />
    </div>
  );
}