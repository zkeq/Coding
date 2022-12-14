---

title: Vercel | Python 云函数文档摘抄
tags: [笔记]
description: 本节课主要学习了<br> Python 云函数文档摘抄
date: 2022-04-20 10:45:51
categories: [置顶文章, 其他] 
cover: https://img.onmicrosoft.cn/2022-04-20/01.png
---
## [Python](https://vercel.com/docs/runtimes#official-runtimes/python)

*The Python Runtime is used by Vercel to compile Python Serverless Functions, that defines a singular HTTP `handler` variable, inheritting from the `BaseHTTPRequestHandler` class, from a `.py` file within an `/api` directory at your project's root.*

Python 平台被用作 vercel 的 Python 云函数编译器，它定义了一个单一的 HTTP `handler` 变量，继承自 `BaseHTTPRequestHandler` 类，并且来自于  `/api` 目录下以 `.py ` 结尾的文件 

*For example, define an `index.py` file inside a `/api` directory as follows:*

示例：这是一个 `/api` 目录下以 `.py ` 结尾的文件 

```python
from http.server import BaseHTTPRequestHandler
from cowpy import cow

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        message = cow.Cowacter().milk('Hello from Python from a Serverless Function!')
        self.wfile.write(message.encode())
        return
```

*An example `index.py` file inside an `/api` directory.*

*Inside `requirements.txt` define:*

在 `requirements.txt` 中这样定义

```
cowpy==1.0.3
```

*An example `requirements.txt` file that defines `cowpy` as a dependency.*

`requirements.txt` 定义了需要 `cowpy` 这个依赖项

*For advanced usage, such as using WSGI or ASGI for your Python projects, see the [Advanced Python Usage section](https://vercel.com/docs/runtimes#advanced-usage/advanced-python-usage).*

有关高级用法，例如在 Python 项目中使用 WSGI 或 ASGI，请参阅 [高级 Python 用法部分](https://vercel.com/docs/runtimes#advanced-usage/advanced-python-usage)。（本文的后半部分）

### [Python Version](https://vercel.com/docs/runtimes#official-runtimes/python/python-version)

*Python projects deployed with Vercel use Python version 3.9.*

使用 Vercel 部署的 Python 项目使用 Python 3.9 版。

*You can specify the version of Python by defining `python_version` in `Pipfile`, like so:*

您可以通过在 `Pipfile` 中定义 `python_version` 来指定 Python 的版本，如下所示：

```
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[packages]
flask = "*"

[requires]
python_version = "3.9"
```

*An example `Pipfile` generated with`pipenv install flask`.*

*Currently, the following Python versions are available:*

目前，有如下版本可用

- 3.9 ([default since November 23rd 2021](https://vercel.com/changelog/python-3-9-is-now-available))
- 3.6 (being deprecated)

**Note:** *The `python_version` must exactly match one of the options above or it will be ignored.*

注意：`python_version` 必须与上述选项之一 完全匹配 ，否则将被忽略。

### [Python Dependencies](https://vercel.com/docs/runtimes#official-runtimes/python/python-dependencies)

> Python 的依赖项

*You can install dependencies for your Python projects by defining them in `requirements.txt` or a `Pipfile` with corresponding `Pipfile.lock`.*

您可以通过在 `requirements.txt` 或具有相应 `Pipfile.lock` 的 `Pipfile` 中定义 Python 项目的依赖项来安装依赖项。

---------------------------

---------------------------

---------------------------

## [Advanced Python Usage](https://vercel.com/docs/runtimes#advanced-usage/advanced-python-usage)

> 高级 Python 用法

*In order to use this Runtime, no configuration is needed. You only need to create a file inside the `api` directory.*

要使用这个云函数，您不需要过多配置。只需要创建在 `api` 目录下创建一个文件。

*The entry point of this Runtime is a glob matching `.py` source files with one of the following variables defined:*

这个运行的入口函数要以 `.py` 结尾，并且具备以下两种特征中的一种。

- *`handler` that inherits from the `BaseHTTPRequestHandler` class.*

  有 `handler` class 属性并且继承于 `BaseHTTPRequestHandler`

- *`app` that exposes a WSGI or ASGI Application.*

  WSGI 或者 ASGI 应用并且有 `app` 的入口。

### [Reading Relative Files in Python](https://vercel.com/docs/runtimes#advanced-usage/advanced-python-usage/reading-relative-files-in-python)

> 在 Python 中读取相关文件

*Python uses the current working directory when a relative file is passed to [open()](https://docs.python.org/3/library/functions.html#open).*

当一个文件被由  `open()` 打开时。

*The current working directory is the base of your project, not the `api/` directory.*

工作目录是以根目录为基础的，而不是 `api/`

*For example, the following directory structure:*

例如，若有如下目录结构

```
├── README.md
├── api
|  ├── user.py
├── data
|  └── file.txt
└── requirements.txt
```

*With the above directory structure, your function in `api/user.py` can read the contents of `data/file.txt` in a couple different ways.*

有了上面的结构， `api/user.py` 中的函数可以通过几种不同的方式读取 `data/file.txt` 的内容。

*You can use the path relative to the project's base directory.*

您可以使用 绝对路径 

```python
# api/user.py
from http.server import BaseHTTPRequestHandler
from os.path import join

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        with open(join('data', 'file.txt'), 'r') as file:
          for line in file:
            self.wfile.write(line.encode())
        return
```

*Or you can use the path relative to the current file's directory.*

或者使用相对路径

```python
# api/user.py
from http.server import BaseHTTPRequestHandler
from os.path import dirname, abspath, join
dir = dirname(abspath(__file__))

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        with open(join(dir, '..', 'data', 'file.txt'), 'r') as file:
          for line in file:
            self.wfile.write(line.encode())
        return
```

### [Web Server Gateway Interface](https://vercel.com/docs/runtimes#advanced-usage/advanced-python-usage/web-server-gateway-interface)

> Web服务器网关接口

*The Web Server Gateway Interface (WSGI) is a calling convention for web servers to forward requests to web applications written in Python. You can use WSGI with frameworks such as Flask or Django.*

Web 服务器网关接口 (WSGI) 是 Web 服务器将请求转发到用 Python 编写的 Web 应用程序的调用约定。 您可以将 WSGI 与 Flask 或 Django 等框架一起使用。

*Instead of defining a `handler`, define an `app` variable in your Python file, when using `vercel.json` config. For example, define a `index.py` file inside your project as follows:*

使用 `vercel.json` 配置时，不要定义 `handler`，而是在 Python 文件中定义 `app` 变量。 例如，在您的项目中定义一个 `index.py` 文件，如下所示：

```python
from flask import Flask, Response
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return Response("<h1>Flask</h1><p>You visited: /%s</p>" % (path), mimetype="text/html")
```

*An example `index.py` file, using Flask for a WSGI application.*

一个示例 `index.py` 文件，将 Flask 用于 WSGI 应用程序。

*Inside `requirements.txt` define:*

在 `requirements.txt` 中定义：

```
flask==1.0.2
```

*An example `requirements.txt` file, listing `flask` as a dependency.*

一个示例 `requirements.txt` 文件，将 `flask` 列为依赖项。

### [Asynchronous Server Gateway Interface](https://vercel.com/docs/runtimes#advanced-usage/advanced-python-usage/asynchronous-server-gateway-interface)

> 异步服务器网关接口

*The Asynchronous Server Gateway Interface (ASGI) is a calling convention for web servers to forward requests to asynchronous web applications written in Python. You can use ASGI with frameworks such as [Sanic](https://sanic.readthedocs.io/).*

异步服务器网关接口 (ASGI) 是 Web 服务器将请求转发到用 Python 编写的异步 Web 应用程序的调用约定。 您可以将 ASGI 与 [Sanic](https://sanic.readthedocs.io/) 等框架一起使用。

*Instead of defining a `handler`, define an `app` variable in your Python file.*

不要定义一个 `handler`，而是在你的 Python 文件中定义一个 `app` 变量。

*For example, define a `index.py` file inside a folder as follows:*

例如，在文件夹中定义一个 `index.py` 文件，如下所示：

```python
from sanic import Sanic
from sanic.response import json
app = Sanic()


@app.route('/')
@app.route('/<path:path>')
async def index(request, path=""):
    return json({'hello': path})
```

*An example `index.py` file, using Sanic for a ASGI application.*

一个示例 `index.py` 文件，将 Sanic 用于 ASGI 应用程序。

*Inside `requirements.txt` define:*

在 `requirements.txt` 中定义：

```
sanic==19.6.0
```

*An example `requirements.txt` file, listing `sanic` as a dependency.*

一个示例 `requirements.txt` 文件，将 `sanic` 列为依赖项。
