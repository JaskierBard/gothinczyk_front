import React from "react";
import "./EquipmentShowItem.css";

export const EquipmentShowItem = () => {


return <div className="showItem">
<p className="name"></p>
<p className="price"></p>
<img
  className={"img"}
  style={{ opacity: 0, width: 100, height: 100 }}
  alt="img"
/>
</div>
}

