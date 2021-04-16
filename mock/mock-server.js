const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')

const mockDir = path.join(process.cwd(), 'mock')

// 注册请求
function registerRoutes(app) {
  let mockLastIndex
  const mocks = require('./modules/index')
  for (const mock of mocks) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocks).length
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}

// 移除注册缓存
function unregisterRoutes() {
  Object.keys(require.cache).forEach(e => {
    if (e.includes(mockDir)) {
      delete require.cache[require.resolve(e)]
    }
  })
}

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  const resgistData = registerRoutes(app)

  var mockRoutesLength = resgistData.mockRoutesLength
  var mockStartIndex = resgistData.mockStartIndex
  // hot reload

  chokidar.watch(mockDir, {
    ignored: /mock-server.js/,
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add') {
      try {
        app._router.stack.splice(mockStartIndex, mockRoutesLength)

        unregisterRoutes()

        const resgistData = registerRoutes(app)

        mockRoutesLength = resgistData.mockRoutesLength
        mockStartIndex = resgistData.mockStartIndex

        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
}
