/**
 * 目标：使用 npm 下载 dayjs 软件包来格式化日期时间
 *  1. （可选）初始化项目清单文件，命令：npm init -y
 *  2. 下载软件包到当前项目，命令：npm i 软件包名称
 *  3. 使用软件包
 */
// 3. 使用软件包
const dayjs = require('dayjs')
const nowDateStr = dayjs().format('YYYY-MM-DD')
console.log(nowDateStr)


// 1.npm init -y            初始化package.json文件
// 2.npm i 包名             下载软件包
// 3.npm i                  安装所有软件包
// 4.npm i nodemon -g       安装全局软件包
// 5.nodemon 目标js文件     执行目标js文件
// 6.npm uni 包名           删除软件包



// 1. 软件包区别：
// * 本地软件包：当前项目内使用，封装属性和方法，存在于 node_modules
// * 全局软件包：本机所有项目使用，封装命令和工具，存在于系统设置的位置

// 2. nodemon 作用：替代 node 命令，检测代码更改，自动重启程序
// 3. 使用：
// 1. 安装：npm i nodemon - g （-g 代表安装到全局环境中）
// 2. 运行：nodemon 待执行的目标 js 文件