import React, { useState } from "react";
import "./Map.css";

export const Map = () => {
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);

    

   const borderLight = (x: number, y: number) => {

      if(x==0 && y==0){
        let style ={
            backgroundPosition: `${position.x}px ${position.y}px`,
            cursor: isMouseDown ? "grabbing" : "grab",
            boxShadow: 'inset 15px 15px 8px -10px #9c2d2d'
        }
        return style
      }else if (x==0) {
        let style ={
            backgroundPosition: `${position.x}px ${position.y}px`,
            cursor: isMouseDown ? "grabbing" : "grab",
            boxShadow: 'inset 15px 0px 8px -10px #9c2d2d'
        }
        return style
        
      }else if((y==0)){
        let style ={
            backgroundPosition: `${position.x}px ${position.y}px`,
            cursor: isMouseDown ? "grabbing" : "grab",
            boxShadow: 'inset 0px 15px 8px -10px #9c2d2d'
        }
        return style
      }else{
        let style ={
            backgroundPosition: `${position.x}px ${position.y}px`,
            cursor: isMouseDown ? "grabbing" : "grab",
            
        } 
        return style

      }
  }



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
      let toX = position.x + (mouseX - prevPosition.x)
      let toY = position.y + (mouseY - prevPosition.y)

      if (toX>0) {
        toX = 0
      }

      if (toY>0) {
        toY = 0
      }

      if (toX<(-1930)) {
        toX = -1930
      }

      if (toY<(-1080)) {
        toY = -1080
      }


        setPosition({
            x: toX,
            y: toY,
          });
      
    //   setPosition({
    //     x: position.x + (mouseX - prevPosition.x),
    //     y: position.y + (mouseY - prevPosition.y),
    //   });
      setPrevPosition({ x: mouseX, y: mouseY });
    }
  };



  const clickPosition = (e: any) => {
    // console.log(position.x)
    // console.log(position.y)

  }

  return (
    <>
        <div
          className="frame"
          style={borderLight(position.x, position.y)}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onClick={clickPosition}
        >
        {/* <div style={{
          position:'absolute',
            marginLeft: '10px',
            marginTop: '10px',
            width:'90px',
            height:'30px',
            backgroundColor: 'rgba(0,0,100,0.5)'
          }}>Latarnia</div> */}
        </div>
        
    </>
  );
};
