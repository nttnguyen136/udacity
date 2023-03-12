import { Router } from 'express'
import { FILE_PATH, HTML_TEMPLATE } from '../../const/common'
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
      if (outputFile.error || !outputFile.success) {
        return res.sendStatus(500)
      }

      res.send(HTML_TEMPLATE.replace(FILE_PATH, outputFile.success))
    })
    .catch((error) => next(error))
})

export default imageRoutes
