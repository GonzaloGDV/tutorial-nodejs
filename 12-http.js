const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    return res.end("Here is our short history");
  }
  return res.end(`
      <h1>Ooops!</h1>
      <p>We couldn't find the page you are looking for</p>
      <a href='/'>Back Home</a>
      `);
});

server.listen(5000);
