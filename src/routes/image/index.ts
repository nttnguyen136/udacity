import { Router } from 'express'
import {
  ERROR_MESSAGE,
  FILE_PATH,
  HTML_ERROR_TEMPLATE,
  HTML_TEMPLATE
} from '../../const/common'
import resizeImage from '../../utilities/resize-image'

const imageRoutes = Router()

// image?fileName=fjord.jpg&width=500&height=300
imageRoutes.get('/', async (req, res, next) => {
  const { fileName, width, height } = req.query

  if (!fileName) {
    res.status(500).send(HTML_ERROR_TEMPLATE.replace(ERROR_MESSAGE, 'Error'))
  } else {
    resizeImage(
      fileName.toString(),
      {
        width: Number(width || 200), // default width is 200px
        height: Number(height)
      },
      'assets/thump/'
    )
      .then((outputFile) => {
        res.send(HTML_TEMPLATE.replace(FILE_PATH, outputFile))
      })
      .catch((error) => {
        console.log(error)

        res.status(500).send(HTML_ERROR_TEMPLATE.replace(ERROR_MESSAGE, error))
        // next(error)
      })
  }
})

export default imageRoutes
