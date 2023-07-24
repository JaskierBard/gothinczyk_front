import React, { useState } from "react";
import "./App.css";
import { Equipment } from "./components/Equipment/Equipment";
import { SkillPanel } from "./components/SkillPanel/SkillPanel";
import { Bosper } from "./components/NPC/Bosper";

const player_id = '865055da-1b49-11ee-af61-581122ba8110'

const App = () => {
  const [reset, setReset] = useState<number>(0);


  const resetCounter = () => {
    setReset((reset + 1));
    console.log('app ' + reset)

  };
  return (
    <>
      <SkillPanel />
      <Equipment player_id={player_id} character="equipment" reset={resetCounter} counter={reset}/>
      <Bosper reset={resetCounter} counter={reset}/>

    </>
  );
}

export default App;
