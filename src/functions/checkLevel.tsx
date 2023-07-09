// const levels:any = {1:500, 2:1500, 3: 3000, 4: 5000, 5: 7500,  6:10500, 7: 14000, 8:18000, 9: 22500, 10:27500}
const levels:any = {0:0, 1:500, 2:1000, 3:1500, 4:2000, 5:2500, 6:3000, 7:3500, 8:4000, 9: 4500, 10:5000}


export const checkLevel = async (gainedExperience: number, experience: number, currentLevel: number) => {

// let maxLevel = 0;
let maxLevelKey = null;
let expDifference = null;
let levelDifference = 0;

for (const level in levels) {
  const levelValue = levels[level];
  if (levelValue <= experience) {
    maxLevelKey = level;
    expDifference = levels[(Number(maxLevelKey)+1)] - experience
    // console.log(currentLevel + ' currentLvl')
    // console.log(maxLevelKey + ' levels[maxLevelKey]')
    // console.log(levelDifference + ' levelDifference')
    levelDifference = (Number(maxLevelKey)) - currentLevel

  }
}

if (maxLevelKey !== null && Number(maxLevelKey) > currentLevel) {
    console.log('level up')
    levelDifference = (Number(maxLevelKey)) - currentLevel
    


    
    // console.log(maxLevel + ' maxLevel')

    addLearningPoints(levelDifference)
    if (levelDifference !== 0) {
      updateLevel(levelDifference)
    }
  }
  
return expDifference
   
 }; // Dodać żeby poziom zmieniał sie nie tylko na froncie ale i  w bazie!!


 export const updateLevel = async (lvl:number) => {
      
  await fetch(`http://localhost:3001/player/statistic/update_lvl/${lvl}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({level: lvl}),
  });

};

 export const addLearningPoints = async (lp:number) => {
      
          await fetch(`http://localhost:3001/player/statistic/learning_points/${lp}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({learning: lp}),
          });
      
  };