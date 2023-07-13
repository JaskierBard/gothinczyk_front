export const addAttributes = async (
  learningPoints: number,
  attribute: string
) => {
  if (learningPoints > 0) {
    await fetch(
      `http://localhost:3001/player/statistic/add_attributes/${attribute}/${learningPoints}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          learningPoints: learningPoints,
          attribute: attribute,
        }),
      }
    );
    return;
  } else {
    console.log("not enough learning points");
  }
};
