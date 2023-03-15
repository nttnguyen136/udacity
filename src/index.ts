import * as express from 'express'
import caching from './middlewares/caching'
import log from './middlewares/log'
import routes from './routes'
import { initLogger } from './utilities/logger'

const PORT = 3000

const app = express()

export const logger = initLogger()

app.use(express.static('assets'))

app.use('/api', [log], routes)

app.listen(PORT, () => {
  logger.info(`Server started at localhost:${PORT}`)
})

export default app
