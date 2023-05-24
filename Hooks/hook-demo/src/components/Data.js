import { useEffect,useState } from "react";

const Fetch =()=>{

    const[data,setData]= useState([]);

    /* we are making the API call here */

    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
        .then(resp => resp.json())
        .then(resp=>{
            setData(resp);
        }).catch(error=>{
            console.log(error)
        })
    })
    return(
        <div>
           
                {
                    data && data.length>0
                    ?
                    data.map((item,index)=>{
                           return <div key={index}>
                                  {item.name}
                    
                           </div>
                    })
                    :
                    <h1> ..... loading....</h1>
                }
           
        </div>
    )
}
export default Fetch;