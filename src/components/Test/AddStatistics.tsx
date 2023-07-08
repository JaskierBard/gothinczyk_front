import React, { FormEvent } from 'react';
import './AddStatistics.css'



export const StatisticAdding = () => {
//   const [stats, setStats] = useState<any>(null)

  const addExperience = async () => {
    const exp =100
        // e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3001/player/statistic`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({exp: exp}),
            });
            const data = await res.json();
        } finally {
            console.log(`dodano ${exp} doświadczenia`)
        }
    };

    return <div className='add'>
        <button onClick={addExperience}>Dodaj doświadczenie</button><button>Odejmij doświadczenie</button><br />
        <button>Dodaj siłę</button>
        <button>Dodaj zręczność</button>
        <button>Dodaj manę</button>
        <button>Dodaj punkty trafień</button><br />
        <button>Dodaj br. jednoręczna</button>
        <button>Dodaj br. dwuręczna</button>
        <button>Dodaj łuki</button>
        <button>Dodaj kusze</button><br />
        <button></button><br />
        <button></button><br />
        <button></button><br />

    </div>
    
}