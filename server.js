'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
const fs = require('fs');

server.connection({ port: 3000, host: 'localhost' });

server.route({
  method: ['GET'],
  path: '/',
  handler: function (request, reply) {
    let index = fs.readFileSync(`${__dirname}/assets/html/index.html`);
    reply(index)
      .type('text/html');
  }
});

server.route({
  method: ['GET'],
  path: '/api/dataset',
  handler: function(request, reply){
    let dataset = require(`${__dirname}/assets/data/dataset.js`);

    reply(dataset)
      .type('application/javascript');
  }
});

server.route({
    method: ['GET'],
    path: '/js/{script}',
    handler: (req, res) => {
      let scriptName = req.params.script;
      let script = fs.readFileSync(`${__dirname}/assets/js/${scriptName}`);

      res(script)
        .type('application/javascript');
    }
  });

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
