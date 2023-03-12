import { Router } from 'express'
import log from '../middlewares/log'
import imageRoutes from './image'

const routes = Router()

routes.get('/', log, (_, res) => {
  res.send(' Root Route')
})

routes.use('/image', imageRoutes)

export default routes
