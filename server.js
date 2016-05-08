const koa = require('koa')
const app = koa()
const port = process.env.PORT || 3000

app.use(require('koa-static')('./public'))

app.listen(port)

console.log(`Listening on port ${port}...`)
