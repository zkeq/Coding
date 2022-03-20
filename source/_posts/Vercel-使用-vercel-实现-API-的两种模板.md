---
title: Vercel | 使用 vercel 实现 API 的几种模板
tags: [归档]
description: 本节课主要记录了<br> 使用 vercel 实现 API 的几种模板。
date: 2022-02-27 21:50:17
categories: 笔记
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-03-17/22TC/2022/02/28/c1e42547c69c5.png
---

平时的话我们总会遇到一些简单的 `API` 需求，但是现在的话呢，我又没有服务器..

在一次偶然的机会下，我发现了这个仓库

- [Zfour/python_github_calendar_api: 用python获取github上的用户贡献信息，部署于vercel的api](https://github.com/Zfour/python_github_calendar_api)

让我感到眼前一亮的是 `vercel` 居然可以搭建 `API` ？

接着去翻了一下 `vercel` 的文档，一个仓库免费版可以搭建 `12` 个 `serverless` 服务？

好家伙，这不得整起来。

于是......这个仓库就装满了 `12` 个 `API`  [zkeq/icodeq-api: 自用 API 地址 (github.com)](https://github.com/zkeq/icodeq-api)

![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-03-17/22TC/2022/02/28/a6ac00437a464.png)

`12` 个对于我来说还是少了些

于是...... [zkeq/icodeq-bpi: API 的第二个仓库 (github.com)](https://github.com/zkeq/icodeq-bpi)

![2](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-03-17/22TC/2022/02/28/f167ecc65d64d.png)

这不就好起来了嘛。

废话不说了，上模板

#### 返回 `HTML` 数据模板 // 直接利用 `str.replace()`

```python
# -*- coding: UTF-8 -*-
# 具体例子看我那个 API 仓库
from http.server import BaseHTTPRequestHandler


def index_html_1(url_list, begin_time):

    
    return html

def index_html_2(url_list, begin_time):

    
    return html


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        begin_time = get_timestamp()
        path = self.path
        path = path.replace('?native.theme=1', '')  # 这里是 B 站访问的时候多加的链接...
        url_split = path.split('?')
        if len(url_split) == 1:
            data = index_html_1()
        elif len(url_split) == 2:
            data = index_html_2()
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.end_headers()
        self.wfile.write(data.encode('utf-8'))
        return

```

#### 返回 `JSON` 数据模板

```python
# -*- coding: UTF-8 -*-
import requests
from http.server import BaseHTTPRequestHandler
import json


def getdata(params):

    return returndata

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        path = self.path
        params = path.split('?')[1]
        data = getdata(params)
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))
        return
```

#### 重定向`308` 数据模板

```python
# coding:utf-8
from http.server import BaseHTTPRequestHandler
import os


def get_video(params):

    return _params_data


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        params_data = get_video(params=self.path.split('?')[1])
        self.send_response(308) # vercel 只有 308 跳转才可以缓存 详情见官方文档
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('location', url) # 这个是主要的
        self.send_header('Refresh', '0;url={}'.format(url))
        self.send_header('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate=3600') # vercel 缓存
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write('Redirecting to {} (308)'.format(url).encode('utf-8'))  # 这里无所谓
        return None
```

#### 腾讯云函数 `308` 跳转模板

```python
import json
import requests
from http.server import BaseHTTPRequestHandler


def get_308(params):

    return url


def main_handler(event, context):
    try:
        params = event.get('path').split('/')[-1]
    except IndexError:
        params = ''
    print(params)
    url = get_308(params)
    return{
        "isBase64Encoded": False,
        "statusCode": 308,
        "headers": {"Content-Type":"text/plain",
                    "Refresh": "0;url={}".format(url),
                    "location": url,
                    'Access-Control-Allow-Origin': '*',},
        "body": 'Redirecting to {} (308)'.format(url)
        }
```

#### `Notion` API 返回数据模板

```python
# -*- coding: UTF-8 -*-
# 获取
import json
import requests
from http.server import BaseHTTPRequestHandler

SK = 
ID = 


def get_notion_data():
    global SK
    global ID
    url = "https://api.notion.com/v1/databases/{}/query".format(ID)
    headers = {
        "Accept": "application/json",
        "Notion-Version": "2021-08-16",
        "Content-Type": "application/json",
        "Authorization": SK
    }
    response = requests.request("POST", url, headers=headers).text
    dict_all = json.loads(response)
    short_dict = {}
    for i in dict_all['results']:
        # print(i)
        
    return params


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        data = get_notion_data()
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate')
        self.send_header('Content-type', 'application/json; charset=utf-8')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))
        return

```

其他需要的看我的仓库吧，这里整理这么多应该够日常使用了。

###### 这里需要注意的是

- `vercel` 的云函数 没有 `Node.js` 环境，但是 `Github Action` 有..
- `腾讯云函数的编码问题很麻烦`（这问题好像不给跟进了）
- ![3](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2022-03-17/22TC/2022/02/28/188e79d4ba942.png)

> 相信大家用以上这些模板可以做出来很多有意思的东西。
>
> 🚀 x 10086 
