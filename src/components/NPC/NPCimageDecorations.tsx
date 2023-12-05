import { Flame } from "../common/Flame/Flame"
import { Shine } from "../common/Flame/Shine/Shine"
import { Reflection } from "../common/Reflection/Reflection"

export const NPCView = ({ name }: { name: string }) => {
    if (name === 'Bosper') {
        return <Flame/>

    } else if (name === 'Hakon'){
        console.log(name)
        return <Shine/>

    } else {
        console.log(name )

        return <div></div>
    }

}