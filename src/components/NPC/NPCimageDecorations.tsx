import { Flame } from "../common/Flame/Flame"
import { Reflection } from "../common/Reflection/Reflection"

export const NPCView = ({ name }: { name: string }) => {
    if (name === 'Bosper') {
        return <Flame/>

    } else if (name === 'Hakon'){
        console.log(name)
        return <Reflection/>

    } else {
        console.log(name )

        return <div></div>
    }

}