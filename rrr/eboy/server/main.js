// CommonJs
const fastify = require('fastify')({
    logger: true
  })
   fastify.register(require('@fastify/cors'), (instance) => {
    return (req, callback) => {
        const corsOptions = {origin: true
    };
    if (/^localhost$/m.test(req.headers.origin)) {
        corsOptions.origin = false 
    }
    callback(null,corsOptions)
    }
  })

  // Declare a route
  fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })
   
  const users = []

  fastify.post('/user/create', function (request,reply){
    console.log(request.body);
    reply.send({message:'ok'})
  })
  
  // Run the server!
  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
 