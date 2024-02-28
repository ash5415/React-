import List from'./List';
const ListItem =()=>{
    const items = [
        "car", 'cat', 'can'
    ];
    return(
        <div>
             <ul>
                <List listData ={items}/>
             </ul>
        </div>
    )
}
export default ListItem;