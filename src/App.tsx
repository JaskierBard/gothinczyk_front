import React, { useEffect, useState } from "react";
import "./App.css";
import { Equipment } from "./components/Equipment/Equipment";
import { SkillPanel } from "./components/SkillPanel/SkillPanel";
import { NPC } from "./components/NPC/NPC";
import { NavBar } from "./components/NavBar/NavBar";
import { Codes } from "./components/CodesBar/CodesBar";
import { Console } from "./components/common/Console/Console";
import { HpBar } from "./components/common/Bars/HpBar";
import { Background } from "./components/Board/Board";
import { EquipmentShowItem } from "./components/Equipment/EquipmentShowItem";
import { ManaBar } from "./components/common/Bars/ManaBar";
import { Enemy } from "./components/Enemy/Enemy";

const player_id = '865055da-1b49-11ee-af61-581122ba8110'

const App = () => {

  const [showSkillPanel, setShowSkillPanel] = useState<boolean>(false);
  const [showCodes, setShowCodes] = useState<boolean>(false);


  const [reset, setReset] = useState<number>(0);


  const resetCounter = () => {
    setReset((reset + 1));
    console.log('app ' + reset)

  };

  const show = () => {
    setShowSkillPanel(!showSkillPanel);
  };

  const codes = (event:KeyboardEvent) => {
    if (event.key === 'F2') {
      setShowCodes(!showCodes);
      console.log("F2 został naciśnięty");
    } 
    return () => {
      window.removeEventListener('keydown', codes);
    };
   };

  window.addEventListener('keydown', codes);

  return (
    <>
    {showCodes ? <Codes /> : null}

    <Background/>
    <NavBar reset={reset} show={show} />
    {/* <Console/> */}
    
    {/* <EnemyInfo/> */}
    {showSkillPanel ? <SkillPanel /> : null}
      {/* <Equipment player_id={player_id} character="equipment" reset={resetCounter} counter={reset}/> */}
      {/* <EquipmentShowItem/> */}
      {/* <NPC name={'Zuris'} reset={resetCounter} counter={reset}/> */}
      {/* <Enemy/> */}

      {/* <HpBar left={`1450px`} top={`870px`}/>
      <ManaBar/> */}
      

    </>
  );
}

export default App;
