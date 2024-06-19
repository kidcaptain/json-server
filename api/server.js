// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
const { parse } = require('@vue/compiler-sfc');

const html = `
  <div class="container">
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
`;

const parsed = parse(html.toString());
console.log(parsed);
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is unning')
})

// Export the Server API
module.exports = server
