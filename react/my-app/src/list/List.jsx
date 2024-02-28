const List =({listData})=>{
     const createList =listData.map((item,index) => {
        return(
             <div key={index}>
                 <li>{item}</li>
             </div>
        )
     });
    return createList();
}
export default List;