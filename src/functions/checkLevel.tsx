const levels:any = {1:500, 2:1500, 3: 3000, 4: 5000, 5: 7500,  6:10500, 7: 14000, 8:18000, 9: 22500, 10:27500}

export const checkLevel = async (gainedExperience: number, experience: number, currentLevel: number) => {

let maxLevel = 0;
let maxLevelKey = null;

for (const level in levels) {
  const levelValue = levels[level];
  if (levelValue <= experience && levelValue >= maxLevel) {
    maxLevel = levelValue;
    maxLevelKey = level;
  }
}
if (experience<500) {
    maxLevelKey = 0
}
if (maxLevelKey !== null && Number(maxLevelKey) > currentLevel) {
    console.log('level up')
  }
// console.log('experience ' + experience)
//   console.log('current level ' + currentLevel)

return maxLevelKey
   
 };
