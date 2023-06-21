export const getWeapons = async () => {
     try {
      const res = await fetch(`http://localhost:3001/player/equipment`);
     const data = await res.json()
    return  data.weapons;
    } catch (err) {
        console.log( err)
    }
 };

 export const getArmors = async () => {
    // console.log('tutak')

     try {
      const res = await fetch(`http://localhost:3001/player/equipment`);
     const data = await res.json()
    //  console.log('hej' + ' ' + data.weapons)
    return data.armors;
    } catch (err) {
        console.log( err)
    }
 };

