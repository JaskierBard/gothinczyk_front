export const directionChoice = (lp: number, type: string, base:string) => {
  
 if ((lp.toString()).length === 1) {
  let style = {
    gridArea: `a00${lp}`,
    backgroundImage: `url("./images/${type}/${base}.webp")`,
    backgroundColor: 'rgba(0, 0, 0, 100)',
    transform: `rotate(0deg)`,
    opacity: '0.7'
  };
  // console.log(style)
  return style;

 } else if ((lp.toString()).length === 2){
  let style = {
    gridArea: `a0${lp}`,
    backgroundImage: `url("./images/${type}/${base}.webp")`,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transform: `rotate(0deg)`,
    opacity: '0.7'

  };
  return style;
 } else {
  let style = {
    gridArea: `a${lp}`,
    backgroundImage: `url("./images/${type}/${base}.webp")`,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transform: `rotate(0deg)`,
    opacity: '0.7'

  };
  return style;
 }
   
  // if (lp === 27) {
  //   style = {
  //     gridArea: `a${lp}`,
  //     backgroundImage: `url("./images/plates/direction.png")`,
  //     backgroundColor: 'rgba(90, 0, 0, 100)',
  //     transform: `rotate(180deg)`,
  //   };
  // } else if (lp === 7) {
  //   style = {
  //     gridArea: `a${lp}`,
  //     backgroundImage: `url("./images/plates/direction.png")`,
  //     backgroundColor: 'rgba(0, 0, 90, 100)',
  //     transform: `rotate(270deg)`,
  //   };
  // } else if (lp === 59) {
  //   style = {
  //     gridArea: `a${lp}`,
  //     backgroundImage: `url("./images/plates/direction.png")`,
  //     backgroundColor: 'rgba(0, 80, 0, 100)',
  //     transform: `rotate(0deg)`,
  //   };
  // } else if (lp === 79) {
  //   style = {
  //     gridArea: `a${lp}`,
  //     backgroundImage: `url("./images/plates/direction.png")`,
  //     backgroundColor: 'rgba(100, 100, 0, 100)',

  //     transform: `rotate(90deg)`,
  //   };
  // }
};
