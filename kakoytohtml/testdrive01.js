const fastify = require('fastify')({
    logger: true
  })
  const users = []
  // Declare a route
//   fastify.get('/meat', function (request, reply) {
//     console.log(request.query);
//     const a = request.query.meat.a
//     const b = request.query.meat.b
    
    
//     reply.send({ hello: +a + +b })
//   })
  fastify.post('/users/add',function (request, reply){
    const login = request.body.login
    const password = request.body.password
    if (login == 'Петя'){
        reply.status(400)
        reply.send({message:'Иван'})
        return
    }
    if(password.length < 8){
        reply.status(400)
        reply.send({message:'Пароль меньше 8 символов '})
        return
    }
    
    if(login.length === 0){
    reply.status(400)
    reply.send({message:'Логин пустой'})
    return
    }

    users.push({login,password})
    console.log(users);
    reply.send({message:{success:true}})
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