import { checkLevel } from "./checkLevel";

export const getStats = async () => {
  try {
    const res = await fetch(`http://localhost:3001/player/statistic`);
    const data = await res.json();
    await checkLevel(
      10,
      data.statistic[0]["experience"],
      data.statistic[0]["level"]
    );

    const response = await fetch(`http://localhost:3001/player/statistic`);
    const result = await response.json();

    return result.statistic[0];
  } catch (err) {
    console.log(err);
  }
};
