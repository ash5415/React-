const graphql = require('graphiql');
const axios = require('axios'); 

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLSchema

}=graphql

const Product = new GraphQLObjectType({
    name :'Product',
    fields :{
        name: {
            type: GraphQLString
        },
        price:{
            type: GraphQLString
        },
        id :{
            type:GraphQLInt
        }
    }
})

// query

const RootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        product:{
            type :ProductType
        },
        args:{
            id :{
                type: GraphQLInt
            }
        },
        resolve(parentValue,args){
              return axios.get(`http://localhost:3000/products?id=${args.id}`)
              .then(resp =>{
                resp.data[0]
              }).catch(error =>{
                console.log(error);
              })
        }
    }
});

// mutation  

const mutation = new GraphQLObjectType({
    name :'mutation',
    fields:{
        addProduct:{
            type :ProductType,
            args:{
                name: {
                    type: GraphQLString
                },
                price :{
                    type :GraphQLString
                },
                id :{
                    type:GraphQLInt
                }
            },
            resolve(parentValue,args){
                const{
                    name,
                    price,
                    id
                }=args;
                return axios.post(`http://localhost:3000/products`,{name,price,id})
                .then(resp=>{
                    resp.dat[1]
                }).catch(error =>{
                    console.log(error)
                })
            }
        }
        
    }
})

// create a schema

  module.exports =new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
  });