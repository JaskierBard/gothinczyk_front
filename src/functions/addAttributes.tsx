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
        }
      }
    );
    return;
  } else {
    const audio = new Audio(process.env.PUBLIC_URL + '/audio/Npc/SVM_14_NOLEARNNOPOINTS.WAV')
    audio.play()
  }
};


