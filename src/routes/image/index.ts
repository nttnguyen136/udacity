import { Router } from 'express'
import resizeImage from '../../utilities/resize-image'

const imageRoutes = Router()

// image?fileName=fjord.jpg&width=500&height=300
imageRoutes.get('/', async (req, res, next) => {
  const { fileName, width, height } = req.query

  if (!fileName) {
    res.sendStatus(404)
    return
  }

  return resizeImage(
    fileName.toString(),
    {
      width: Number(width || 200), // default width is 200px
      height: Number(height)
    },
    'assets/thump/'
  )
    .then((outputFile) => {
      if (outputFile.error) {
        return res.sendStatus(500)
      }

      res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
          <div>
            <img src="/thump/${outputFile.success}" alt="${fileName}" style="margin: auto"/>
          </div>
      </body>
      </html>
    `)
    })
    .catch((error) => next(error))
})

export default imageRoutes
