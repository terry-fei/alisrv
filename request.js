const http = require('http');
const url = require('url');

module.exports = class Request extends http.IncomingMessage {
  constructor(req) {
    super({
      encrypted: true,
      remoteAddress: req.clientIP,
      address: () => {
        return { port: 443 };
      }
    });

    Object.assign(this, req, {
      ip: req.clientIP,
      complete: true,
      httpVersion: '1.1',
      httpVersionMajor: '1',
      httpVersionMinor: '1',
      headers: req.headers,
      url: url.format({
        pathname: req.path,
        query: req.queries
      })
    });
  }
}
