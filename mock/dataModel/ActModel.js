module.exports = class DataModel {
  constructor(resultObj = {}, resultCode = '0', errorCode = '0', resultMsg = '系统流程处理正常！') {
    this.resultObj = resultObj
    this.resultCode = resultCode
    this.errorCode = errorCode
    this.resultMsg = resultMsg
  }
}
