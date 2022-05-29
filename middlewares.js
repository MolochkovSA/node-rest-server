import { NODE_ENV } from './config.js';

export function responseSendWrapper(req, res, next) {
  const originalSendFunc = res.send.bind(res)
  res.send = function (body) {
    res.locals.body = body
    return originalSendFunc(body)
  }
  next()
}

export function queryLogger(req, res, next) {
  res.on('finish', () => {
    console.log(
      `Request:
  Method: ${req.method}
  URL: ${req.url}
  Headers: ${JSON.stringify(req.headers)}
  Query: ${JSON.stringify(req.query)}
  Body:  ${JSON.stringify(req.body)}
Response:
  Code: ${res.statusCode}
  Headers: ${JSON.stringify(res.getHeaders())}
  Body: ${res.locals.body}`
    )
  })
  next()
}

export function queryTimeLogger(req, res, next) {
  const startRequest = performance.now();
  res.on('finish', () => {
    console.log(
      `${'*'.repeat(20)}${new Date().toLocaleString()} Request time: ${(
        performance.now() - startRequest
      ).toFixed(3)} ms${'*'.repeat(20)}`
    )
  })
  next()
}

export function routeNotFoundHandler (req, res) {
  res.status(404).send('Not Found');
}

export function serverErrorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(NODE_ENV === 'production'
    ? 'Internal Server Error' :
    { message: err.message, stack: err.stack }
  );
}