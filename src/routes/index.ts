import { Router } from 'express'
import caching from '../middlewares/caching'
import log from '../middlewares/log'
import imageRoutes from './image'

const routes = Router()

routes.get('/', log, (_, res) => {
  res.send(' Root Route')
})

routes.use('/image', [caching], imageRoutes)

export default routes
