
export const buyProduct = async (productPrice:number, playerGold:number, itemId:string, type:string) => {
    // jeśli produkt jest drogi to zaptanie czy na pewno kupić
    // jeśli prokukt to strzały, potki to wyskakuje okienko z ilością do zakupienia?
    if (productPrice<playerGold) {
        try {
            const res = await fetch(
              `http://localhost:3001/player/buy/${productPrice}/${itemId}/${type}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await res.json();
            console.log(data)
          } catch (error) {
            console.log(error);
          }
        
    } else {
        const audio = new Audio(process.env.PUBLIC_URL + '/audio/Npc/NO_MONEY_1.WAV')
        audio.play()
    }
}   