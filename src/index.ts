import * as express from 'express'

const port = 3000

const app = express()

app.get('/api', (req, res) => {
  res.send('Hello, world!')
})

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})

export default app
