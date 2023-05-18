function getFoodItems(){
    return{
        type:'GET_FOOD_ITEMS',
        payload:[
            {
                id:1, name :'pizza'
            },
            {
                id:2, name:'Bread'
            },
            {
                id:3, name:'Chicken'
            }
        ]
    }
}
export default getFoodItems;