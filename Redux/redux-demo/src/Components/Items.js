const Items =(props)=>{
       
    // create a list ///

    const List =({list})=>{
        if(list){
            // eslint-disable-next-line array-callback-return
            return list.map((item,index)=>{
                <div key={index}>
                      <h1> Here is the List of Items:{item.name}</h1>
                </div>
            })
        }
    }
    return(
        <div>{List(props)}</div>
    )
}
export default Items;