export const getStats = async () => {
    try {
        const res = await fetch(`http://localhost:3001/player/statistic`)
        const data = await res.json()
        return data.statistic[0]

    } catch (err) {
        console.log( err)
    }
 };
