export const buyProduct = async (
  productPrice: number,
  playerGold: number,
  itemId: string,
  type: string,
  playerId: string
) => {
  // jeśli produkt jest drogi to zaptanie czy na pewno kupić
  // jeśli prokukt to strzały, potki to wyskakuje okienko z ilością do zakupienia?
  if (productPrice < playerGold) {
    try {
      const res = await fetch(
        `http://localhost:3001/player/buy`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            productPrice: productPrice,
            type: type,
            itemId: itemId,
            sellerId: 'merchant',
            buyerId: "865055da-1b49-11ee-af61-581122ba8110"
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    const audio = new Audio(
      process.env.PUBLIC_URL + "/audio/Npc/NO_MONEY_1.WAV"
    );
    audio.play();
  }
};

export const sellProduct = async (
  productPrice: number,
  merchantGold: number,
  itemId: string,
  type: string
) => {
  // jeśli produkt jest drogi to zaptanie czy na pewno kupić
  // jeśli prokukt to strzały, potki to wyskakuje okienko z ilością do zakupienia?
  if (productPrice < merchantGold) {
    try {
      const res = await fetch(
        `http://localhost:3001/player/buy`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            productPrice: productPrice,
            type: type,
            itemId: itemId,
            sellerId: "865055da-1b49-11ee-af61-581122ba8110",
            buyerId: 'merchant'
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    const audio = new Audio(
      process.env.PUBLIC_URL + "/audio/Npc/NO_MONEY_2.WAV"
    );
    audio.play();
  }
};
