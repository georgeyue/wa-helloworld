var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
var http_port = process.env.PORT || 1337;

server.connection({
    host: 'localhost',
    port: http_port
});

// Add the route
server.route({
    method: ['GET'],
    path:'/',
    handler: function (request, reply) {
       reply('Hapi said: Hello World!');
    }
});

// Start the server
server.start();
