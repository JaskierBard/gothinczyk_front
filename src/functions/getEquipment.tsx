export const getItems = async (id:string) => {
  try {
    const res = await fetch(`http://localhost:3001/player/equipment/${id}`);
    const data = await res.json();
    console.log('reset')
    return [
      { weapon: data.weapon },
      { armor: data.armor },
      { magic: data.magic },
      { alchemy: data.alchemy },
      { other: data.other },
    ];
  } catch (err) {
    console.log(err);
  }
};

