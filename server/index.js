const http = require('http');

const server = require('./server');

const PORT = process.env.EXPRESS_HOST_PORT;

http.createServer(server).listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}.`);

});
