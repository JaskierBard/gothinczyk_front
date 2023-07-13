import React from "react";
import "./Equipment.css";

interface Props {
  path: any;
  type: any;
  ceil?: number;
}

const weapon = [
  "one_handed two_handed",
  "one_handed",
  "two_handed",
  "bow",
  "ammunition",
];
const armor = ["armor", "belt"];
const magic = ["scroll"];
const alchemy = ["herb", "alkohol", "mana mixture", "heal mixture"];
const other = ["junk"];

export const EquipmentCell = (props: Props) => {
  const Enter = () => {
    const eqhtml: any = document.querySelector(`.img`);
    const eqname: any = document.querySelector(`.name`);
    const eqprice: any = document.querySelector(`.price`);
    if (weapon.includes(props.type)) {
      eqhtml.src = "./images/weapon/" + props.path.img + ".webp";
    } else if (weapon.includes(props.type)) {
      eqhtml.src = "./images/weapon/" + props.path.img + ".webp";
    } else if (armor.includes(props.type)) {
      eqhtml.src = "./images/armor/" + props.path.img + ".webp";
    } else if (magic.includes(props.type)) {
      eqhtml.src = "./images/magic/" + props.path.img + ".webp";
    } else if (alchemy.includes(props.type)) {
      eqhtml.src = "./images/alchemy/" + props.path.img + ".webp";
    } else if (other.includes(props.type)) {
      eqhtml.src = "./images/other/" + props.path.img + ".webp";
    }

    eqname.innerText = props.path.name;
    eqprice.innerText = "Wartość  " + props.path.price;
    eqhtml.style.opacity = 1;
  };

  const Leave = () => {
    const eqhtml: any = document.querySelector(`.img`);
    const eqname: any = document.querySelector(`.name`);
    const eqprice: any = document.querySelector(`.price`);

    eqname.innerText = "";
    eqprice.innerText = "";
    eqhtml.style.opacity = 0;
  };

  return (
    <div className="ceil">
      {(() => {
        if (weapon.includes(props.type)) {
          return (
            <>
              <img
                src={"./images/weapon/" + props.path.img + ".webp"}
                alt=""
                onMouseEnter={Enter}
                onMouseLeave={Leave}
              />
              <p className="quantity">{props.path.quantity}</p>
            </>
          );
        } else if (armor.includes(props.type)) {
          return (
            <>
              <img
                src={"./images/armor/" + props.path.img + ".webp"}
                alt=""
                onMouseEnter={Enter}
                onMouseLeave={Leave}
              />
              <p className="quantity">{props.path.quantity}</p>
            </>
          );
        } else if (magic.includes(props.type)) {
          return (
            <>
              <img
                src={"./images/magic/" + props.path.img + ".webp"}
                alt=""
                onMouseEnter={Enter}
                onMouseLeave={Leave}
              />
              <p className="quantity">{props.path.quantity}</p>
            </>
          );
        } else if (alchemy.includes(props.type)) {
          return (
            <>
              <img
                src={"./images/alchemy/" + props.path.img + ".webp"}
                alt=""
                onMouseEnter={Enter}
                onMouseLeave={Leave}
              />
              <p className="quantity">{props.path.quantity}</p>
            </>
          );
        } else if (other.includes(props.type)) {
          return (
            <>
              <img
                src={"./images/other/" + props.path.img + ".webp"}
                alt=""
                onMouseEnter={Enter}
                onMouseLeave={Leave}
              />
              <p className="quantity">{props.path.quantity}</p>
            </>
          );
        }
      })()}
    </div>
  );
};
