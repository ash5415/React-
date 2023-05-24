import { useState } from "react";
import useTitle from "./customHook";

const Title2 = ()=>{
    const [record,setRecord]=useState(0);

    useTitle(record)
    return(
        <div>
            <h2> im from title2</h2>
            <button onClick={()=>{setRecord(record -1)}
            }>Decrease</button>
        </div>
    )
}

export default Title2;