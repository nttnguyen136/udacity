export const HTML_TEMPLATE = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <style>
    .container {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #8affbb4d;
    }
  </style>
  <body>
      <div class="container">
        <img src="/thump/__FILE_PATH__" alt="FILE" style="margin: auto"/>
      </div>
  </body>
  </html>
`

export const HTML_ERROR_TEMPLATE = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <style>
    .container {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #8affbb4d;
    }

    .error {
      color: red;
      font-size: 20px;
    }
  </style>
  <body>
      <div class="container">
        <div class="error"> 
        __ERROR_MESSAGE__
        </div>
      </div>
  </body>
  </html>
`

export const FILE_PATH = '__FILE_PATH__'
export const ERROR_MESSAGE = '__ERROR_MESSAGE__'
