var Request = require('./request');
var Response = require('./response');

const express = require('express');
const Koa = require('koa');

var app = new Koa();

app.use(ctx => {
  ctx.body = '<h1>Hello Jser</h1>';
});

module.exports.index = function (req, res, context) {
  var request = new Request(req);
  var response = new Response(req, res);
  app.callback()(request, response);
};
