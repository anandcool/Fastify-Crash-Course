const fastify = require('fastify')({
    logger:true
})


//db
const mongoose = require('mongoose')


//db connection
mongoose.connect("mongodb+srv://anand:1234567890@cluster0.8wime.mongodb.net/Fastify?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true})
        .then(res => console.log('MongoDB is ready!!!'))
        .catch(err=> console.log(err))


//routes
fastify.get('/',async(request,reply) =>{
    return {visiter:'Hi From Programming With Project'}
})

const routes = require('./routes/index');

routes.forEach((route,index)=>{
fastify.route(route)
})

//Starting the Server
const start = async () =>{
    try {
        await fastify.listen(3000)
    } catch (error) {
        
    }
}

start()