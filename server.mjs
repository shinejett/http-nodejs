import { createServer } from 'http';

createServer((req, res) => {
  let method = req.method;
  let headers = req.headers;
  res.write('Welcome to my app' + method + headers);
  res.end();
}).listen(process.env.PORT);
