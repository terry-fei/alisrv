var Request = require('./request');
var Response = require('./response');

const express = require('express');
const Koa = require('koa');
const serve = require('koa-static');

var app = new Koa();
app.use(serve('.', {}));

app.use(ctx => {
  ctx.body = { hello: 'world'};
});

module.exports.index = function (req, res, context) {
  var request = new Request(req);
  var response = new Response(req, res);
  app.callback()(request, response);
};

// app.listen(3000);
