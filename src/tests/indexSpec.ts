import * as supertest from 'supertest'
import app from '../index'
import resizeImage from '../utilities/resize-image'

const request = supertest(app)

describe('Test endpoint responses', () => {
  it('Should return success code', async () => {
    const fileName = 'icelandwaterfall.jpg'
    const props = {
      width: 400,
      height: 400
    }

    const response = await request.get(
      `/api/image?fileName=${fileName}&width=${props.width}&height=${props.height}`
    )
    expect(response.status).toBe(200)
  })

  it('Should return status code equal 500', async () => {
    const fileName = ''
    const props = {
      width: 400,
      height: 400
    }
    const response = await request.get(
      `/api/image?fileName=${fileName}&width=${props.width}&height=${props.height}`
    )
    expect(response.status).toBe(500)
  })
})

describe('Test resize image', () => {
  it('Should return success', async () => {
    const fileName = 'icelandwaterfall.jpg'
    const fileNameOutput = 'icelandwaterfall_400x400.jpg'
    const props = {
      width: 400,
      height: 400
    }

    const response = await resizeImage(fileName, props)

    expect(response).toBe(fileNameOutput)
  })

  it('Should return error invalid file', async () => {
    const fileName = ''
    const props = {
      width: 400,
      height: 400
    }

    const errorMessage = 'Input file contains unsupported image format'

    let response = ''

    try {
      await resizeImage(fileName, props)
    } catch (e: unknown) {
      response = (e as string).toString()
    }

    expect(response).toContain(errorMessage)
  })

  it('Should return error invalid width', async () => {
    const fileName = ''
    const props = {
      width: -1,
      height: 400
    }

    const errorMessage =
      'Expected positive integer for width but received -1 of type number'

    let response = ''

    try {
      await resizeImage(fileName, props)
    } catch (e: unknown) {
      response = (e as string).toString()
    }

    expect(response).toContain(errorMessage)
  })
})
