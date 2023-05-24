import { useContext } from "react";
import { TopLevelContext} from "../App";
const ComponentZ =()=>{
        const topLevelData = useContext(TopLevelContext);

        return(
            <div>
                <h1> Hii im from PassingData:{topLevelData}</h1>
            </div>
        )
}

export default ComponentZ;