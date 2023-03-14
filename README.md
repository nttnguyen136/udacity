
# Image Processing API


## Development server
### Build

```bash
$ npm run build
```

### Start development server

```bash
$  npm run start
```

### Running unit tests

```bash
$  npm run test
```

## Dependencies

1. [Express](https://www.npmjs.com/package/express): Web application framework 
2. [Jasmine](https://www.npmjs.com/package/jasmine): JavaScript testing framework 3. for browsers and Node
4. [Sharp](https://www.npmjs.com/package/sharp): resize an image
5. [Supertest](https://www.npmjs.com/package/supertest): A driven library for testing HTTP servers

## Run 

```
http://localhost:3000/api/image?fileName={{FILE_NAME}}&width={{WIDTH}}&height={{HEIGHT}}

Example: 
http://localhost:3000/api/image?fileName=fjord.jpg&width=500&height=451
```
FILE_NAME is only support behind (in assets folder):
- encenadaport.jpg
- fjord.jpg
- icelandwaterfall.jpg
- palmtunnel.jpg
- santamonica.jpg

## Test result 

![test_result](https://github.com/nttnguyen136/udacity/blob/main/test_result.png?raw=true)

