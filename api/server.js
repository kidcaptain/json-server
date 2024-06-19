// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const { parse } = require('vue/compiler-sfc');

const sfc = `
  <template>
    <h1>This is a heading</h1>
    <p>This is a paragraph</p>
  </template>

  <script>
    export default {
      // ...
    }
  </script>

  <style scoped>
    h1 {
      color: red;
    }
  </style>
`;

const parsed = parse(sfc);
console.log(parsed);
server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
