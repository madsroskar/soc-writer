require('dotenv').config();

const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', function(client){
  client.on('event', function(data){});
  client.on('disconnect', function(){});
});

server.listen(parseInt(process.env.SOCKET_PORT));
