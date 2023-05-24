import { useState } from "react";
import useTitle from "./customHook";

const Title1 =() =>{
    const[record,setRecord] =useState(0);
        useTitle(record);
    return(
        <div>
            <h1> from title1</h1>
            <button onClick ={()=>{setRecord(record +1)}}>Increase</button>
        </div>
    )
}
export default Title1;