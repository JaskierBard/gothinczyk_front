import React, { useEffect, useState } from "react";
import "./Equipment.css";
import { getItems } from "../../functions/getEquipment";
import { EquipmentCell } from "./EquipmentCell";
import { getStats } from "../../functions/getStatistic";
import { Pagination } from "../../functions/pagination";
import { EmptyCells } from "./EmptyCells";
interface Props {
  id: string;
  character: string;
}

export const Equipment = (props: Props) => {
  const [items, setItems] = useState<any>(null);
  const [cells, setCells] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [current, setCurrent] = useState<any>();
  const [money, setMoney] = useState<any>(null);


  useEffect(() => {

    Stats();
  },[]);
  const Stats = async () => {
    const result = await getStats()
      setMoney(result?.gold);

  };

  useEffect(() => {
    const AsyncFunction = async () => {
      // setItems(null);
      setItems(await getItems(props.id));
    };
    AsyncFunction();
  }, []);

  

  useEffect(() => {
    const AsyncFunction = async () => {
      const result = await Pagination(value, items);
      setCells(result.cells);
      setCurrent(result.current);
    };
    AsyncFunction();
    
  }, [items, value]);



  const MouseWheelDetector = async (event: any) => {
    if (event.deltaY < 0) {
      if (value < 5) {
        setValue(value);
      } else {
        setValue((prevValue) => prevValue - 5);
      }
    } else {
      if (value < current.length - 15) {
        setValue((prevValue) => prevValue + 5);
      } else {
        setValue(value);
      }
    }
  };

  if (items === null) {
    return <EmptyCells cells={cells} character={props.character}/>
  } else {
    return (
      
      <div className={props.character} onWheel={MouseWheelDetector}>
        {/* <div className="money"><img id="coin" src="./images/other/coin_icon.webp"  alt="" /><p>{money}</p></div> */}

        {current.map((element2: any) => (
          <EquipmentCell
            key={element2.img}
            path={element2}
            // gold={money}
            type={element2.type}
          />
        ))}
        {Array.from({ length: cells }, (value, index) => (
          <div className="cell" key={index}></div>
        ))}
        <div className="showItem">
          <p className="name"></p>
          <p className="price"></p>
          <img
            className={"img"}
            style={{ opacity: 0, width: 100, height: 100 }}
            alt="img"
          />
        </div>
      </div>
    );
  }
};
