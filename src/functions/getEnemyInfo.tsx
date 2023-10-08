export const getEnemyInfo = async (enemy_id:string) => {
    try {
      const res = await fetch(`http://localhost:3001/enemy/${enemy_id}`);
      const data = await res.json();
      console.log(data.result[0])
      return data.result[0];
    } catch (err) {
      console.log(err);
    }
  };