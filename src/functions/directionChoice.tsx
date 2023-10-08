export const directionChoice = (lp: number, base:string) => {
  let style = {
    gridArea: `a${lp}`,
    backgroundImage: `url("./images/plates/${base}.webp")`,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transform: `rotate(0deg)`,
  };
  if (lp === 27) {
    console.log("ahoj");

    style = {
      gridArea: `a${lp}`,
      backgroundImage: `url("./images/plates/direction.png")`,
      backgroundColor: 'rgba(90, 0, 0, 100)',
      transform: `rotate(180deg)`,
    };
  } else if (lp === 7) {
    style = {
      gridArea: `a${lp}`,
      backgroundImage: `url("./images/plates/direction.png")`,
      backgroundColor: 'rgba(0, 0, 90, 100)',
      transform: `rotate(270deg)`,
    };
  } else if (lp === 59) {
    style = {
      gridArea: `a${lp}`,
      backgroundImage: `url("./images/plates/direction.png")`,
      backgroundColor: 'rgba(0, 80, 0, 100)',
      transform: `rotate(0deg)`,
    };
  } else if (lp === 79) {
    style = {
      gridArea: `a${lp}`,
      backgroundImage: `url("./images/plates/direction.png")`,
      backgroundColor: 'rgba(100, 100, 0, 100)',

      transform: `rotate(90deg)`,
    };
  }
  return style;
};
