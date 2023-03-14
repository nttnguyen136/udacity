import * as express from 'express'
import caching from './middlewares/caching'
import routes from './routes'

const PORT = 3000

const app = express()

app.use(express.static('assets'))

app.use('/api', [caching], routes)

app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`)
})

export default app
