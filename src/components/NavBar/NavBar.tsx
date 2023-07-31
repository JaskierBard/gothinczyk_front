import React, { useState }  from "react";
import "./NavBar.css";

export const NavBar = () => {
  const [hero, setHero] = useState<boolean>(false);
  const [equipment, setEquipment] = useState<boolean>(false);
  const [statistics, setStatistics] = useState<boolean>(false);


  return (
      <div className="Nav">
        <section className="action">
          <p>Test</p>
          
        </section>
        <section className="game">
          <p>Punkty akcji: 10</p>
          <p>Aktualne pole: 20</p>
          
        </section>

        
        <section className="hero">
          <p>Postać</p>
          <p>Ekwipunek</p>
          <p>Statystyki</p>
        </section>
        
      </div>
  );
};
