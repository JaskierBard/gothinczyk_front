import { checkLevel } from "./checkLevel";

export const getStats = async () => {
  try {
    const res = await fetch(`http://localhost:3001/player/statistic`);
    const data = await res.json();
    const exp = await checkLevel(
      data.statistic[0]["experience"],
      data.statistic[0]["level"]
    );

    const response = await fetch(`http://localhost:3001/player/statistic`);
    const result = await response.json();
    return {
      gold:result.statistic[0].gold,
      statistic: result.statistic[0],
      exp: exp 
    }
  } catch (err) {
    console.log(err);
  }
};
