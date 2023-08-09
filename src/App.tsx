import React, { useState } from "react";
import "./App.css";
import { Equipment } from "./components/Equipment/Equipment";
import { SkillPanel } from "./components/SkillPanel/SkillPanel";
import { NPC } from "./components/NPC/NPC";
import { NavBar } from "./components/NavBar/NavBar";
import { Codes } from "./components/CodesBar/CodesBar";
import { Console } from "./components/common/Console/Console";
import { Bars } from "./components/common/Bars/Bars";
import { Background } from "./components/Board/Board";

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

  return (
    <>
    {/* <Codes/> */}
    <Background rollResult={10} turn={"Blue"}/>
    <NavBar reset={reset} show={show}/>
    <Console/>
    
      
    {showSkillPanel ? <SkillPanel /> : null}
      <Equipment player_id={player_id} character="equipment" reset={resetCounter} counter={reset}/>
      <NPC name={'Zuris'} reset={resetCounter} counter={reset}/>
      <Bars/>
      

    </>
  );
}

export default App;
