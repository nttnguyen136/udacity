import { NextFunction, Request, Response } from 'express'
import * as fs from 'fs'
import { FILE_PATH, HTML_TEMPLATE } from '../../const/common'

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { fileName, width, height } = req.query

  console.log({ fileName, width, height })

  if (fileName && typeof fileName === 'string') {
    const imageGen = `${fileName.split('.')[0]}_${width}x${height || width}.${
      fileName.split('.')[1]
    }`

    const file = await fs.existsSync('assets/thump/' + imageGen)

    if (file) {
      res.send(HTML_TEMPLATE.replace(FILE_PATH, imageGen))

      return
    }

    console.log(file)
  }

  next()
}
