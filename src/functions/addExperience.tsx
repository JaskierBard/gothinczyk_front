export const addExperience = async (experience:number) => {
    try {
      const res = await fetch(
        `http://localhost:3001/player/statistic/experience/${experience}`,
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
  };