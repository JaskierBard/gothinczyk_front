import React, { useEffect, useState } from "react";
import "./Equipment.css";
import { getItems } from "../../functions/getEquipment";
import { EquipmentCell } from "./EquipmentCell";
import { Pagination } from "../../functions/pagination";
import { EmptyCells } from "./EmptyCells";
import { getMoney } from "../../functions/getMoney";
interface Props {
  player_id: string;
  character: string;
  counter: number;
  reset: () => void
}

export const Equipment = (props: Props) => {
  const [items, setItems] = useState<any>(null);
  const [cells, setCells] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [current, setCurrent] = useState<any>();
  const [money, setMoney] = useState<any>(null);
  const {reset} = props
  useEffect(() => {
    const AsyncFunction = async () => {
      setMoney(getMoney(items));
    };
    if (items) {
      AsyncFunction();
    }
  }, [items]);

  useEffect(() => {
    const AsyncFunction = async () => {
      setItems(await getItems(props.player_id));
    };
    AsyncFunction();
  }, [props.counter]);

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
    return <EmptyCells cells={cells} character={props.character} />;
  } else {
    return (
      <div className={props.character} onWheel={MouseWheelDetector}>

        {current.map((element2: any) => (
          <EquipmentCell
            Click={async() => {setItems(await getItems(props.player_id))}}
            reset={reset}
            key={element2.img}
            path={element2}
            player_id={props.player_id}
            money={money}
            type={element2.type}
          />
        ))}
        {Array.from({ length: cells }, (value, index) => (
          <div className="cell" key={index}></div>
        ))}
       {props.player_id !== "merchant" ? (
  <div className="showItem">
    <p className="name"></p>
    <p className="price"></p>
    <img
      className={"img"}
      style={{ opacity: 0, width: 100, height: 100 }}
      alt="img"
    />
  </div>
) : null}
      </div>
    );
  }
};
