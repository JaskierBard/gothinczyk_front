import React from 'react';
import './App.css';
import { Equipment } from './components/Equipment/Equipment';
import { SkillPanel } from './components/SkillPanel/SkillPanel';



function App() {
  return (
  <>
    <SkillPanel/>
    {/* <StatisticAdding/> */}
    <Equipment/>
  </>
    
  );
}

export default App;
