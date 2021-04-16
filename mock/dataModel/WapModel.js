module.exports = class WapModel {
  constructor(resultObj = {}, resultCode = '0', systemCode = '', resultMsg = '系统流程处理正常！') {
    this.resultMsg = resultMsg
    this.logicCode = ''
    this.systemCode = systemCode
    this.ipVersion = 'ipv4'
    this.resultCode = resultCode
    this.errorCode = ''
    this.success = true
    this.resultObj = resultObj
    this.currentTime = new Date().getTime()
  }
}
