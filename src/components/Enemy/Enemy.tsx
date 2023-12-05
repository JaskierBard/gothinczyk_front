import React from 'react';
import './Enemy.css';
import { HpBar } from '../common/Bars/HpBar';

export const Enemy = () => {
    return <div className='enemy'>
        <HpBar left={`220px`} top={`90px`} />
        <img src={`./enemy/shadowbeast.webp`} alt="" style={{opacity:1}} />
        <div className="talkingArea">
          {/* <p onClick={() => setShop(false)}>Zakończ handel</p> */}
        </div>
    </div>
}
