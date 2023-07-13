// const levels:any = {1:500, 2:1500, 3: 3000, 4: 5000, 5: 7500,  6:10500, 7: 14000, 8:18000, 9: 22500, 10:27500}
const levels: any = {
  0: 0,
  1: 500,
  2: 1000,
  3: 1500,
  4: 2000,
  5: 2500,
  6: 3000,
  7: 3500,
  8: 4000,
  9: 4500,
  10: 5000,
};

export const checkLevel = async (
  experience: number,
  currentLevel: number
) => {
  let maxLevelKey = null;
  let expDifference = null;
  let levelDifference = 0;

  for (const level in levels) {
    const levelValue = levels[level];
    if (levelValue <= experience) {
      maxLevelKey = level;
      expDifference = levels[Number(maxLevelKey) + 1] - experience;
      levelDifference = Number(maxLevelKey) - currentLevel;
    }
  }

  if (maxLevelKey !== null && Number(maxLevelKey) > currentLevel) {
    console.log("level up");
    levelDifference = Number(maxLevelKey) - currentLevel;

    await updateLearningPoints(levelDifference, "+");
    if (levelDifference !== 0) {
      await updateLevel(levelDifference);
    }
  }

  return expDifference;
};

export const updateLevel = async (lvl: number) => {
  await fetch(`http://localhost:3001/player/statistic/update_lvl/${lvl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ level: lvl }),
  });
  return;
};

export const updateLearningPoints = async (
  learningPoints: number,
  operation: string
) => {
  await fetch(
    `http://localhost:3001/player/statistic/learning_points/${operation}/${learningPoints}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        learningPoints: learningPoints,
        operation: operation,
      }),
    }
  );
  return;
};
