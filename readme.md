# mock-server

## 安装

```
npm install
```

## 运行
```
node api-server
```

## 修改配置
配置文件 mock/config.js
``` javascript
// config.js
module.export = {
  // 请求基础路径  请求路径 = 基础路径 + 模块路径
  baseUrl: '/mock-api',
  // 端口号
  port: 8081
}
```

## 复制到其他项目中
* 复制 mock 文件夹，api-server.js
* 复制package.json中，复制dependencies中的4个依赖
``` json
"dependencies": {
  "chalk": "^4.1.0",
  "chokidar": "^3.3.1",
  "express": "^4.17.1",
  "mockjs": "^1.1.0"
}
```
* 在目标项目中安装依赖
``` powershell
npm install
```
* 运行mock server
