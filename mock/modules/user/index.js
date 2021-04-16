// import BaseModel from '../../dataModel/BaseModel'
const BaseModel = require('../../dataModel/BaseModel')

module.exports = [
  {
    url: '/sso/getCurrentUser',
    type: 'get',
    response: () => {
      return new BaseModel(require('./data/token'))
      // return new BaseModel()
    }
  }, {
    url: '/ecp/mineTag',
    type: 'post',
    response: () => {
      return new BaseModel(require('./data/userInfo'))
      // return new BaseModel()
    }
  }
]
