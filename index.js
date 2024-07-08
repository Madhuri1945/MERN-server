const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const {ApolloServer,gql}=require('apollo-server-express')
const typeDefs=require('./schema')
const resolvers=require('./resolvers')
const userApiFromRouter=require('./routes/userRoutes');
const port=3001
const app=express()
app.use(express.json())
app.use(cors())
//const userApiFromRouter=require('./routes/userRoutes');
/*const mongoURI = 'mongodb+srv://madhuridhulipudi19:g8CFQaP521fhA65p@cluster0.3kpxupq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('Mongodb connected')).catch(err=>console.log(err));
const server=new ApolloServer({typeDefs,resolvers});*/

/*async function StartServer(){
    await server.start();
    server.applyMiddleware({app});
    app.use('/users',userApiFromRouter)
    app.listen(port,()=>{console.log("server is live")})

}*/
function add(a,b){
    return a+b;
}
//StartServer()
module.exports=add;
/*beforeAll(async ()=>{
    await StartServer();
})
test('GraphQL server started and running',async()=>{
    const res=await request(app).post('/graphql').send({
        query:`
        query{
        __schema{
        queryType{
        name}}
        }`
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.data.__schema.queryType.name).toBe('Query');
})*/


