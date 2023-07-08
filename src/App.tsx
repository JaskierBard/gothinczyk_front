import React from 'react';
import './App.css';
import { Equipment } from './components/Equipment/Equipment';
import { Statistics } from './components/Statistics/Statistics';
import { StatisticAdding } from './components/Test/AddStatistics';


function App() {
  return (
  <>
    <Statistics/>
    <StatisticAdding/>
    <Equipment/>
  </>
    
  );
}

export default App;
