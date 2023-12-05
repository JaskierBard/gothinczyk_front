import React, { useEffect, useState } from "react";

import "./Reflection.css";

export const Reflection = () => {
const [show, setShow] = useState<any>(true);

// useEffect(() => {
//   const timeoutId = setTimeout(() => {
//     setShow(true);
//   }, 1000);

//   return () => clearTimeout(timeoutId);
// }, []);



return<>

<div className="reflection">
    <div className={show ? "lens-center , move-animation" : ''}></div>
    <div className={show ? "full-flare , move-animation" : ''}></div>

  </div>

</>
    
}
