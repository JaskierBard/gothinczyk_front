import React from "react";
import "./App.css";
import { Equipment } from "./components/Equipment/Equipment";
import { SkillPanel } from "./components/SkillPanel/SkillPanel";

const player_id = '865055da-1b49-11ee-af61-581122ba8110'

function App() {
  return (
    <>
      <SkillPanel />
      <Equipment id={player_id} character="equipment"/>
    </>
  );
}

export default App;
