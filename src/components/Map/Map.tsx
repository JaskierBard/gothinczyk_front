import React, { useState } from "react";
import "./Map.css";

export const Map = () => {
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isMouseDown, setIsMouseDown] = useState(false);


  const handleMouseDown = (e: any) => {
    setIsMouseDown(true);
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setPrevPosition({ x: mouseX, y: mouseY });
  };
  const handleMouseLeave = () => {
    if (isMouseDown) {
      handleMouseUp();
    }
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e: any) => {
    if (isMouseDown) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      setPosition({
        x: position.x + (mouseX - prevPosition.x),
        y: position.y + (mouseY - prevPosition.y),
      });
      setPrevPosition({ x: mouseX, y: mouseY });
    }
  };



  const clickPosition = (e: any) => {
    console.log(e.clientX)
    console.log(e.clientY)

  }

  return (
    <>
        <div
          className="frame"
          style={{
            backgroundPosition: `${position.x}px ${position.y}px`,
            cursor: isMouseDown ? "grabbing" : "grab",
          }}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onClick={clickPosition}
        >
        <div style={{
          position:'absolute',
            marginLeft: '10px',
            marginTop: '10px',
            width:'90px',
            height:'30px',
            backgroundColor: 'rgba(0,0,100,0.5)'
          }}>Latarnia</div>
        </div>
        
    </>
  );
};
