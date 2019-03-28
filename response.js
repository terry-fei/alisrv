const http = require('http');
const stream = require('stream');
const sanitizeHeaders = require('./sanitize-headers');

const headerEnd = '\r\n\r\n';

const BODY = Symbol();
const HEADERS = Symbol();

function getString(data) {
  if (Buffer.isBuffer(data)) {
    return data.toString('utf8');
  } else if (typeof data === 'string') {
    return data;
  } else {
    throw new Error(`response.write() of unexpected type: ${typeof data}`);
  }
};

module.exports = class Response extends http.ServerResponse {
  static body(res) {
    return Buffer.concat(res[BODY]);
  }

  getHeaders() {
    console.log(this[HEADERS]);
    return this[HEADERS];
  }

  get headers() {
    return this[HEADERS];
  }

  setHeader(key, value) {
    this[HEADERS][key] = value;
    this.res.setHeader(key, value);
  }

  constructor(req, res) {
    super(req);
    this.res = res;
    res.getHeaders = function () {
      console.log('adfadfas headers');
    }

    this[BODY] = [];
    this[HEADERS] = {};

    this._headers = {};

    this.useChunkedEncodingByDefault = false;
    this.chunkedEncoding = false;

    // Object.defineProperty(this, 'statusCode', {
    //   get() {
    //     if (!this._val) return 200;
    //     return this._val;
    //   },
    //   set(val) {
    //     this._val = val;
    //     res.setStatusCode(val);
    //   }
    // });

    const addData = (data) => {
      if (Buffer.isBuffer(data) || typeof data === 'string') {
        this[BODY].push(Buffer.from(data));
      } else {
        throw new Error(`response.write() of unexpected type: ${typeof data}`);
      }
    }

    this.assignSocket(new stream.Writable({
      // sometimes the data is written directly to the socket
      write: (data, encoding, done) => {
        if (typeof encoding === 'function') {
          done = encoding;
          encoding = null;
        }

        if (this._wroteHeader) {
          addData(data);
        } else {
          const string = getString(data, encoding);
          const index = string.indexOf(headerEnd);

          if (index !== -1) {
            const remainder = string.slice(index + headerEnd.length);

            if (remainder) {
              addData(remainder);
            }

            this._wroteHeader = true;
          }
        }

        if (typeof done === 'function') {
          done();
        }
      }
    }));

    this.write = function(data, encoding, callback) {
      if (typeof encoding === 'function') {
        callback = encoding;
        encoding = null;
      }

      addData(data);

      if (typeof callback === 'function') {
        callback();
      }
    }

    this.once('finish', () => {
      res.send(Buffer.concat(this[BODY]));
    });
  }
}
