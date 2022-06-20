---
title: 饥人谷前端 | HTTP 请求与响应
tags: [HTTP]
description: 本节课主要学习了<br>HTTP 请求与响应
date: 2022-06-20 14:43:39
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_author: 杭州饥人谷教育科技有限公司
copyright_author_href: https://jirengu.com/
copyright_url: https://xiedaimala.com
copyright_info: 资料来源：饥人谷。任何组织或个人未经许可，禁止转载
---
### 请求与响应模型
![16](https://img.onmicrosoft.cn/2022-06-20/16.png)

### 如何发请求
#### 方法
  - 用 Chrome 地址栏
  - 用 curl 命令
#### 概念
- 帮你发请求的工具叫做（用户代理）
- 英文名叫 `User Agent`

### 如何做出一个响应
#### 需用编程
- [Node.js](https://github.com/FrankFang/nodejs-test/blob/master/server.js) 有一个 http 模块可以做到
- 初始代码已写好，直接用
#### 注意事项
- 这些代码就是服务器代码，一般放在服务器上
- `path` 是不带查询参数的路径 /x
- `query` 是查询参数的对象形式 {a:'1'}
- `queryString` 是查询参数的字符串形式 ?a=1
- `pathWithQuery` 是带查询参数的路径，一般不用
- `request` 是请求对象
- `response` 是响应对象

![17](https://img.onmicrosoft.cn/2022-06-20/17.png)

#### 代码逻辑
语法
- `这种字符串`里面可以回车
- '这种字符串' 里面要回车只能用 \n 表示
逻辑
- 每次收到请求都会把中间的代码执行一遍
- 用 `if else` 判断路径，并返回响应
- 如果是已知路径，一律返回 `200`
- 如果是未知路径，一律返回 `404`
- `Content-Type` 表示内容的「类型/语法」
- `response.write()` 可以填写返回的内容
- `response.end()` 表示响应可以发给用户了

https://github.com/FrankFang/nodejs-test/blob/master/server.js

```js
var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

  if(path === '/'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`二哈`)
    response.end()
  } else if(path === '/x'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`body{color: red;}`)
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你输入的路径不存在对应的内容`)
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


```

遥想当年李爵士

- 世界上第一个服务器程序
- 我们也写一个服务器程序
- 世界上第一个网页
- 我们在 `/` 路径返回一个 `HTML` 内容
- 然后在 `/x` 路径返回一个 `CSS` 内容
- 然后再 `/y` 路径返回一个 `JS` 内容
注意事项
- URL 里的后缀卵用没有，**/y.css 不一定是 CSS 内容**
- `Content-Type` 才是决定文件类型的关键

### 系统学习 HTTP
#### 必须学会什么
- 基础概念（有哪些是必会的）
- 如何调试（用的是 Node.js，可以用 log / debugger）
- 在哪查资料（用的是 Node.js，看 Node.js 文档）
- 标准制定者是谁（HTTP 规格文档：RFC 2616 等）
#### 如何学
- Copy - 抄文档、抄老师
- Run - 放在自己的机器上运行成功
- Modify - 加入一点自己的想法，然后重新运行
#### HTTP 基础概念
##### 请求
- 请求动词 路径加查询参数 协议名/版本
- `Host`: `域名或IP`
- `Accept`: `text/html`
- `Content-Type`: `请求体的格式`
- 回车
- `请求体`（也就是上传内容）
  - 根据 `Content-Type` 来确定上传内容的格式
##### 细节
- 三部分：请求行、请求头、请求体
- 请求动词有 `GET` / `POST` / `PUT` / `PATCH` / `DELETE` 等
- 请求体在 `GET` 请求中一般为空
- 文档位于 `RFC 2616` 第五章
- 大小写不敏感（随意），最好照着我的写
- https://www.rfc-editor.org/rfc/rfc2616
##### 响应
- 协议名/版本 状态码 状态字符串
- `Content-Type`: 响应体的格式
- 回车
- 响应体（也就是下载内容）
- 细节
- 三部分：状态行、响应头、响应体
- 常见的状态码是考点
- 文档位于 RFC 2616 第六章
- https://www.rfc-editor.org/rfc/rfc9110.html
##### 用 `curl` 构造请求
- `curl -v http://127.0.0.1:8888`
  - 设置请求动词
- `-X POST`
  - 注意大小写
- 设置路径和查询参数
  - 直接在 `url` 后面加
- 设置请求头
  - `-H 'Name: Value' 或者 --header 'Name: Value'`
- 设置请求体
  - `-d '内容' 或者 --data '内容'`
##### 用 Node.js 读取请求
- 读取请求动词
  - `request.method`
- 读取路径
  - `request.url` 路径，带查询参数
  - `path` 纯路径，不带查询参数
  - `query` 只有查询参数
- 读取请求头
  - `request.headers['Accept']`
- 读取请求体
  - 比较复杂，先不讲
##### 用 Node.js 设置响应
- 设置响应状态码
  - `response.statusCode = 200`
- 设置响应头
  - `response.setHeader('Content-Type', 'text/html');`
- 设置响应体
  - `response.write('内容')`
  - 第一次没写完的话，可追加内容

![18](https://img.onmicrosoft.cn/2022-06-20/18.png)
```BASH
echo '复制本地~/.ssh/id_rsa.pub内容' >> ~/.ssh/authorized_keys
```
![19](https://img.onmicrosoft.cn/2022-06-20/19.png)
![20](https://img.onmicrosoft.cn/2022-06-20/20.png)
![21](https://img.onmicrosoft.cn/2022-06-20/21.png)
![22](https://img.onmicrosoft.cn/2022-06-20/22.png)
![23](https://img.onmicrosoft.cn/2022-06-20/23.png)

ssh 远程登录

```bash
echo '复制本地~/.ssh/id_rsa.pub内容' >> ~/.ssh/authorized_keys
```

防止 ssh 卡住

```bash
echo "Host *" >> /etc/ssh/ssh_config
echo "  ServerAliveInterval 30" >> /etc/ssh/ssh_config
```

创建应用账户

```bash
adduser frank
mkdir  /home/frank/.ssh
cp ~/.ssh/authorized_keys /home/frank/.ssh/
chmod 755 /home/frank/.ssh/authorized_keys
chown frank:frank /home/frank/.ssh/authorized_keys

adduser frank sudo
```

安装 Node.js 14（课程中为8，但请安装14）

```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt-get update
sudo apt-get install -y nodejs
node -v
npm -v
npx -v

sudo apt install git
```

如果你已经装了8，想要换成14怎么办？

```bash
sudo apt-get remove nodejs

找到 /etc/apt/sources.list.d/nodesource.list 文件，把它的内容全删掉并保存
然后重新执行上方的安装脚本
```

部署应用

```bash
git clone https://github.com/FrankFang/nodejs-test.git
cd nodejs-test
touch log
启动命令：node server.js 8888 > log 2>&1 &
把启动命令做成 start 文件
添加执行权限 chmod +x ./start
运行 sh ./start 得到一个进程号 pid
tail log 看 log 内容
kill -9 pid 可以关掉进程
killall node 可以关掉所有 node 进程
```

如何重启应用

```bash
ssh frank@实例ip
cd nodejs-test
git pull
killall node（因为忘了进程号，实际上可以记下来）
sh ./start
```
