module.exports = class BaseModel {
  constructor(data = null, code = '200', msg = '成功') {
    this.data = data
    this.code = code
    this.msg = msg
    this.timestamp = new Date().getTime()
  }
}