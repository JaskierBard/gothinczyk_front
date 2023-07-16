import React, { useState } from "react";
import "./NPC.css";
import { addAttributes } from "../../functions/addAttributes";


export const Bosper = ({strengthClick}:any) => {
    const [learning, setLearning] = useState<any>(false);
    const [shop, setShop] = useState<any>(false);

if (!learning && !shop) {
    return <section className="talkingArea">
        <p onClick={()=>setLearning(true)}>Czy mozesz czegos mnie nauczyc?</p>
        <p onClick={()=>setShop(true)}>Pokaz mi co masz na sprzedaz.</p>
        <p>KONIEC</p>
    </section>
}

else if (learning && !shop) {
   

    return <section className="talkingArea">
        <p onClick={strengthClick}>Dodaj sile + 1</p>
        <p onClick={()=> addAttributes(5,'strength')}>Dodaj sile + 5</p> 
        <p onClick={()=>setLearning(false)}>Wstecz</p>


        {/* <StatisticAdding
        strengthClick={async() => {await addAttributes(stats['learning_points'], "strength");await Stats()}}
        dexterityClick={async() => {await addAttributes(stats['learning_points'], "dexterity");await Stats()}}
        manaClick={async() => {await addAttributes(stats['learning_points'], "mana");await Stats()}}
        hitPointsClick={async() => {await addAttributes(stats['learning_points'], "hitpoints");await Stats()}}
      /> */}
    </section>
}

else if (!learning && shop) {
    return <section className="talkingArea">
        <p onClick={()=>setLearning(true)}>Czy możesz czegoś mnie nauczyć?</p>
        <p onClick={()=>setShop(true)}>Pokaż mi co masz na sprzedaż</p>
        <p>Wroc</p>
    </section>
}
 else return <p>null</p>
    
 
};
