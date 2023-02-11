const fastify = require('fastify')({
    logger: true
  })
  
  // Declare a route
  fastify.get('/:firstNumber/:secondNumber', function (request, reply) {
    console.log(request.params);
    const a = request.params.firstNumber
    const b = request.params.secondNumber
    
    
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