import { createServer } from 'http';

createServer((req, res) => {
  res.write('Welcome to my app');
  res.end();
}).listen(process.env.PORT);
