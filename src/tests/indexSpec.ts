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

  it('Should return error code', async () => {
    const fileName = ''
    const props = {
      width: 400,
      height: 400
    }
    const response = await request.get(
      `/api/image?fileName=${fileName}&width=${props.width}&height=${props.height}`
    )
    expect(response.status).toBe(404)
  })
})

describe('Test resize image', () => {
  it('Should return success code', async () => {
    const fileName = 'icelandwaterfall.jpg'
    const fileNameOutput = 'icelandwaterfall_400x400.jpg'
    const props = {
      width: 400,
      height: 400
    }

    const response = await resizeImage(fileName, props)

    expect(response['success']).toBe(fileNameOutput)
  })

  it('Should return success code', async () => {
    const fileName = ''
    const props = {
      width: 400,
      height: 400
    }

    const response = await resizeImage(fileName, props)

    expect(response['error']).toBeTruthy()
  })
})
