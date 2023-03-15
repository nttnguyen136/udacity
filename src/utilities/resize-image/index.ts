import * as sharp from 'sharp'

export default async function resizeImage(
  fileName: string,
  {
    width,
    height
  }: {
    width?: number
    height?: number
  },
  outputPath = 'assets/thump'
): Promise<string> {
  // default height same width
  const outputFile = `${fileName.split('.')[0]}_${width}x${height || width}.${
    fileName.split('.')[1]
  }`

  return sharp(`assets/${fileName}`)
    .resize(width, height || width)
    .jpeg({ mozjpeg: true })
    .toFile(`${outputPath}/${outputFile}`)
    .then(() => {
      return outputFile
    })
}
