import { NextFunction, Request, Response } from 'express'
import { logger } from '../..'

export default (req: Request, res: Response, next: NextFunction): void => {
  logger.info('Query ', req.query)

  next()
}
