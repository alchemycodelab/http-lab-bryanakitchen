const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    
    const request = parseRequest(data.toString());
    
    if(request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: 'Hi', contentType: 'text/plain' }));
    } else if(request.path === '/echo' && request.method === 'POST') {
      // status code 200 and plain text with the request body
      socket.end(createResponse({ body: request.body, contentType: 'text/plain' }));

    } else if(request.path === '/red' && request.method === 'GET') {
      // html with an h1 and the word red
      socket.end(createResponse({ body: '<h1>Red</h1>', contentType: 'text/html' }));

    } else if(request.path === '/green' && request.method === 'GET') {
      // html with an h1 and the word green
      socket.end(createResponse({ body: '<h1>Green</h1>', contentType: 'text/html' }));
      
    } else if(request.path === '/blue' && request.method === 'GET') {
      // html with an h1 and the word blue
      socket.end(createResponse({ body: '<h1>Blue</h1>', contentType: 'text/html' }));
      
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'application/json' }));
    }
  });

});

module.exports = app;
