import React, { useState } from "react";
import "./NPC.css";
import { addAttributes } from "../../functions/addAttributes";
import { Flame } from "../common/Flame/Flame";
import { Equipment } from "../Equipment/Equipment";
import { NPCView } from "./NPCimageDecorations";

interface Props {
    name:string;
    counter: number;
    reset: () => void
  }
  
// export const Bosper = ({strengthClick}:any) => {
    export const NPC = (props:Props) => {

    const [learning, setLearning] = useState<any>(false);
    const [shop, setShop] = useState<any>(false);
    // const [reset, setReset] = useState<number>(0);


    // const resetCounter = ():void => {
    //     setReset((reset + 1));
    //     console.log('bosper ' + reset)
    //   };

if (!learning && !shop) {
    return <div className='npc'>    
        <NPCView name={props.name}/> 

        <img src={`./Npc/${props.name}.jpg`} alt="" />

    <div className="talkingArea">
        <p onClick={()=>setLearning(true)}>Czy mozesz czegos mnie nauczyc?</p>
        <p onClick={()=>setShop(true)}>Pokaz mi co masz na sprzedaz.</p>
        <p>KONIEC</p>
    </div>
    </div>
}

else if (learning && !shop) {
   

    return <div className='npc'>   
        <NPCView name={props.name}/> 
        <img src={`./Npc/${props.name}.jpg`} alt="" />
    <div className="talkingArea">
        {/* <p onClick={strengthClick}>Dodaj sile + 1</p> */}
        <p onClick={()=> addAttributes(5,'strength')}>Dodaj sile + 5</p> 
        <p onClick={()=>setLearning(false)}>Wstecz</p>
        </div>

    </div>

       
}

else if (!learning && shop) {
    return <div className='npc'>    
        <NPCView name={props.name}/> 

    <img src={`./Npc/${props.name}.jpg`} alt="" />
    <Equipment player_id='merchant' character="merchant_goods" reset={props.reset} counter={props.counter}/>
<div className="talkingArea">
       
<p onClick={()=>setShop(false)}>Zakończ handel</p>
    </div>


</div> 
    
}
 else return <p>null</p>
    
 
};
