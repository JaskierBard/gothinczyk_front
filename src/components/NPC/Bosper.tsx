import React, { useState } from "react";
import "./NPC.css";
import { addAttributes } from "../../functions/addAttributes";
import { MerchantEquipment } from "../Equipment/MerchantEquipment";
import { Flame } from "../Equipment/common/Fire/Flame";


export const Bosper = ({strengthClick}:any) => {
    const [learning, setLearning] = useState<any>(false);
    const [shop, setShop] = useState<any>(false);

if (!learning && !shop) {
    return <div className='npc'>    
        <Flame/>
    
    <img  src="./Npc/Bosper.webp" alt="" />
    <div className="talkingArea">
        <p onClick={()=>setLearning(true)}>Czy mozesz czegos mnie nauczyc?</p>
        <p onClick={()=>setShop(true)}>Pokaz mi co masz na sprzedaz.</p>
        <p>KONIEC</p>
    </div>
    </div>
}

else if (learning && !shop) {
   

    return <div className='npc'>    
        <Flame/>
    
    <img  src="./Npc/Bosper.webp" alt="" />
    <div className="talkingArea">
        <p onClick={strengthClick}>Dodaj sile + 1</p>
        <p onClick={()=> addAttributes(5,'strength')}>Dodaj sile + 5</p> 
        <p onClick={()=>setLearning(false)}>Wstecz</p>
        </div>

    </div>

        {/* <StatisticAdding
        strengthClick={async() => {await addAttributes(stats['learning_points'], "strength");await Stats()}}
        dexterityClick={async() => {await addAttributes(stats['learning_points'], "dexterity");await Stats()}}
        manaClick={async() => {await addAttributes(stats['learning_points'], "mana");await Stats()}}
        hitPointsClick={async() => {await addAttributes(stats['learning_points'], "hitpoints");await Stats()}}
      /> */}
}

else if (!learning && shop) {
    return <div className='npc'>    
    <Flame/>

<img  src="./Npc/Bosper.webp" alt="" />
<MerchantEquipment/>
<div className="talkingArea">
       
<p onClick={()=>setShop(false)}>Zakończ handel</p>
    </div>


</div> 
    
}
 else return <p>null</p>
    
 
};
