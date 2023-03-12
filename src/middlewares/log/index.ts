import { NextFunction, Request, Response } from 'express'

export default (req: Request, res: Response, next: NextFunction): void => {
  console.log('Logs: User Ip -> ', req.ip)

  next()
}
