export const getAll = async () => {
  try {
    const res = await fetch(`http://localhost:3001/player/equipment`);
    const data = await res.json();
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

export const getMerchantGoods = async () => {
  try {
    const res = await fetch(`http://localhost:3001/player/merchant_goods`);
    const data = await res.json();
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
