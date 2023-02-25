const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/meat', function (request, reply) {
    console.log(request.query);
    const a = request.query.meat.a
    const b = request.query.meat.b
    
    
    reply.send({ hello: +a + +b })
  })
  
  // Run the server!
  fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })
// node main.js | http://127.0.0.1:3000/meat?v1=4