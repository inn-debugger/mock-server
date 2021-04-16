const Mock = require('mockjs')

const mocks = [
  ...require('./user')
]

const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`/mock-api${url}`),
    type: type || 'all',
    response: (req, res) => {
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

module.exports = mocks.map(e => {
  return responseFake(e.url, e.type, e.response)
})
