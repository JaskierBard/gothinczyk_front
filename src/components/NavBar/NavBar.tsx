import React, { useEffect, useState }  from "react";
import "./NavBar.css";
import { getMoney } from "../../functions/getMoney";

interface Props {
  reset:number
}

export const NavBar = (props:Props) => {
  
  const [money, setMoney] = useState<number>(222);
  useEffect(() => {
    const AsyncFunction = async () => {
      setMoney(33);
    };
    // if (items) {
    //   AsyncFunction();
    // }
  }, [props.reset]);

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
          <p>Ekwipunek</p>
          <p>Statystyki</p>
          <div><img id="coin" src="./images/other/coin_icon.webp"  alt="" />{money}</div>

        </section>
        
      </div>
  );
};
