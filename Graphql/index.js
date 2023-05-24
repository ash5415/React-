const express = require('express');
const schema =require('./schema/schema')
// import the express graphql
const expressGraphQL= require('express-graphql').graphqlHTTP;
const app =express();

const port =3001;

app.use('/',expressGraphQL({
    graphql:true,
    schema
}))
app.listen(port,()=>{
    console.log(`server up and running on ${port}`)
});
