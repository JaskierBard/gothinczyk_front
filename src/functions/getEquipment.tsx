export const getAll = async () => {
     try {
      const res = await fetch(`http://localhost:3001/player/equipment`);
     const data = await res.json()
    return [{'weapon': data.weapon}, {'armor' : data.armor}, {'magic' : data.magic},{'alchemy' : data.alchemy}, {'other' : data.other}]
    
     
    } catch (err) {
        console.log( err)
    }
 };

//  export const getArmors = async () => {
//     // console.log('tutak')

//      try {
//       const res = await fetch(`http://localhost:3001/player/equipment`);
//      const data = await res.json()
//     //  console.log('hej' + ' ' + data.weapons)
//     return data.armors;
//     } catch (err) {
//         console.log( err)
//     }
//  };

//  export const getAlchemy = async () => {
//      try {
//       const res = await fetch(`http://localhost:3001/player/equipment`);
//      const data = await res.json()
//     return data.alchemy;
//     } catch (err) {
//         console.log( err)
//     }
//  };

//  export const getMagic = async () => {
//     try {
//      const res = await fetch(`http://localhost:3001/player/equipment`);
//     const data = await res.json()
//    return data.magic;
//    } catch (err) {
//        console.log( err)
//    }
// };

// export const getOther = async () => {
//     try {
//      const res = await fetch(`http://localhost:3001/player/equipment`);
//     const data = await res.json()
//    return 
//    } catch (err) {
//        console.log( err)
//    }
// };

