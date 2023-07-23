export const Pagination = async (value: number, items:any) => {
    let counter = 30 + value;
    let Cutcounter = value;

    const Array: any = [];
    try {
      items.forEach((element1: any) =>
        Object.values(element1).forEach((item: any) => {
          if (item !== undefined) {
            item.forEach((element2: any) => {
              if (counter > 0 && Cutcounter <= 0) {
                Array.push(element2);
              }
              counter--;
              Cutcounter--;
            });
          }
        })
      );
    } catch (err) {}

    const cells = (30 - Array.length);
    const current = Array;
    return {
        cells: cells,
        current: current,
    }
  };
