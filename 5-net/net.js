const server = require('net').createServer();

server.on('connection', socket => {

});

server.listen(8000, () => console.log('Server bound'));
