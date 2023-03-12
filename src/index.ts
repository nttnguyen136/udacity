import * as express from 'express'
import routes from './routes'

const port = 3000

const app = express()

app.use(express.static('assets'))

app.use('/api', routes)

app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})

export default app
