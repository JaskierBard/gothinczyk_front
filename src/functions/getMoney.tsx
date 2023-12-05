export const getMoney = (items:any) => {
    const findMoney = items.find(
        (item: { hasOwnProperty: (arg: string) => any; other: any[] }) =>
          item.hasOwnProperty("other") &&
          item.other.find((obj) => obj.name === "Złota Moneta")
      );
    
      if (findMoney) {
        const goldenCoinObj = findMoney.other.find(
          (obj: { name: string }) => obj.name === "Złota Moneta"
        );
        return (goldenCoinObj.quantity);
      }
}

