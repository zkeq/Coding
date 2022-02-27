---
title: Github | 使用 Action 操作 Selenium 方案
tags: [归档]
description: 本文主要讲了了<br> 使用 Action 操作 Selenium 的一种可行方案
date: 2022-02-27 19:22:46
categories: 笔记
cover: https://ufile.22li.cn/22TC/2022/02/27/8d4a557bbf7b1.png
---

> 在日常使用中，我们可能经常有一些需求会用到 `Selenium` 这个 `Python` 库
>
> 经过一番探索，算是找到了一种解决方案（百度看的几篇文章好像报错....)

先看效果图：

![1.png](https://ufile.22li.cn/22TC/2022/02/27/cf6b046747f80.png)

示例地址：

- [Actions · zkeq/icodeq-api (github.com)](https://github.com/zkeq/icodeq-api/actions)

上面的地址如果运行正常的话，就说明本篇教程的内容还适用~

话不多说，开始教程

### 首先，你得有代码吧..

那么我们想要在云端运行的话，首先这个代码要可以在本地运行。

这里提供一段示例的代码。这份代码的操作是打开网易云的 `MV` 界面，然后去获取到当前 `MV` 的真实地址，接着把返回值传递到 `Redis` 上面

```python
# coding:utf-8

from selenium import webdriver
import redis
from lxml import etree
from urllib.parse import unquote
from selenium.webdriver.chrome.options import Options
import os

env_dist = os.environ
PASSWORD = env_dist.get('PASSWORD')

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')


r = redis.Redis(
    host='apn1-destined-giraffe-32369.upstash.io',
    port=32369,
    password=PASSWORD, ssl=True)


def get_video_url(_id):
    browser = webdriver.Chrome('/usr/bin/chromedriver', options=chrome_options)
    browser.get("https://music.163.com/#/mv?id={0}".format(_id))
    browser.switch_to.frame("contentFrame")
    source = browser.page_source
    html = etree.HTML(source)
    video_all = html.xpath('//*[@id="flash_box"]/@data-flashvars')
    print("获取到的数据为: ", video_all)
    print('-' * 100)

    try:
        video_all = video_all[0].split('&')[0].split('=')[1]
    except IndexError:
        video_all = ''
    _video_url = unquote(video_all).replace('http://', 'https://')
    browser.quit()
    return _video_url


def post_mv_2_redis(_video_id, _video_url):
    print('正在将获取到的视频地址放入 Redis 中: ', end=' ')
    print(r.set(_video_id, _video_url, ex=9000))
    return_url = r.get(_video_id)
    return return_url


if __name__ == '__main__':
    video_list = ['14401004', '14351340']
    # video_url = r.get('163_mv_' + video_id)
    # if not video_url:
    for video_id in video_list:
        video_url = get_video_url(video_id)
        print("正在获取 ID: {} 所对应链接: ".format(video_id), video_url)
        post_mv_2_redis('163_mv_' + video_id, video_url)
        print('-' * 100)
    print('执行完毕！')

```

可以看到，这篇文章里面用到了环境变量，因为我们总不能将自己的密码暴露在 `互联网` 上吧  👀

我们在本地的话，设置环境变量可以看这个视频 ( `Windows` )

<video width="100%" height="100%" controls="">
    <source src="https://video-direct-link.vercel.app/bili.mp4?aid=422368479&bvid=BV1Q3411s7mY&cid=460616824" type="video/mp4" />
</video>

在本地配置好了之后，我们就可以上云了（上面的 `Redis` 是一个缓存功能，测试的话不用也行）

`Github Action` 的 `环境变量` 在这里配置 

![2](https://ufile.22li.cn/22TC/2022/02/27/4d4816d1e5cae.png)

我们在这里设置了环境变量之后，就可以在 `Aciton` 中这样读取环境变量

```python
import os

env_dist = os.environ
PASSWORD = env_dist.get('PASSWORD')
```

### 环境变量的问题解决了，我们只需要再解决 配置 `Selenium` 的问题就好啦

想要运行 `Action` 的话，入口在这里

![3](https://ufile.22li.cn/22TC/2022/02/27/cd05425dfd5d7.png)

点击之后，我们可以看到一个 `yml` 后缀的文件，这个文件负责控制 `Action` 的工作流程

我这里先提供一个完整的工作流程供大家参考

```yaml
name: Github 163 mv 2h

# Controls when the action will run. 
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
  schedule:
  # 定时任务，每隔 1 小时执行
    - cron: '36 * * * *'

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  Build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - name: Checkout
        uses: actions/checkout@v2

      # Runs a single command using the runners shell
      - name: 'Set up Python'
        uses: actions/setup-python@v1
        with:
           python-version: 3.7

      - name: 'Install requirements'
        run: |
          pip install -r ./requirements.txt
          npm install crypto-js

      - name: Install ChromeDriver
        run: |
          CHROME_VERSION=$(google-chrome --version | cut -f 3 -d ' ' | cut -d '.' -f 1) \
            && CHROMEDRIVER_RELEASE=$(curl --location --fail --retry 3 http://chromedriver.storage.googleapis.com/LATEST_RELEASE_${CHROME_VERSION}) \
            && curl --silent --show-error --location --fail --retry 3 --output /tmp/chromedriver_linux64.zip "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_RELEASE/chromedriver_linux64.zip" \
            && cd /tmp \
            && unzip chromedriver_linux64.zip \
            && rm -rf chromedriver_linux64.zip \
            && sudo mv chromedriver /usr/local/bin/chromedriver \
            && sudo chmod +x /usr/local/bin/chromedriver \
            && chromedriver --version

      - name: 'Working 163 MV JavaScript Reverse' # 把这个放在前面 是因为后面的那个代码 可能会报错
        env:
          PASSWORD: ${{ secrets.PASSWORD }}
        run: python ./api/get_163_mv_vercel/get-new-url/main_local.py

      - name: 'Working 163 MV Crawler'
        env:
          PASSWORD: ${{ secrets.PASSWORD }}
        run: python ./api/get_163_mv/Action-fresh.py
```

可以看到里面的东西也不是很多，具体的教程可以查看大佬这几篇教程。

- [GitHub Actions 入门教程 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

- [GitHub Actions 教程：定时发送天气邮件 - 阮一峰的网络日志 (ruanyifeng.com)](http://www.ruanyifeng.com/blog/2019/12/github_actions.html)

我们主要需要的部分有这几部分

```yaml
  schedule:
  jobs:
  Build:
    runs-on: ubuntu-latest
    steps:
    	  - name: Checkout
          uses: actions/checkout@v2
        - name: 'Set up Python'
          with:
            python-version: 3.7
        - name: Install ChromeDriver
          env:
            PASSWORD: ${{ secrets.PASSWORD }}
          run: 
            python ./api/get_163_mv/Action-fresh.py
```

这几部分也比较容易理解，就是分别告诉 `Github` 前期要准备什么

比较有含金量的是这个代码：

```yaml
      - name: Install ChromeDriver
        run: |
          CHROME_VERSION=$(google-chrome --version | cut -f 3 -d ' ' | cut -d '.' -f 1) \
            && CHROMEDRIVER_RELEASE=$(curl --location --fail --retry 3 http://chromedriver.storage.googleapis.com/LATEST_RELEASE_${CHROME_VERSION}) \
            && curl --silent --show-error --location --fail --retry 3 --output /tmp/chromedriver_linux64.zip "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_RELEASE/chromedriver_linux64.zip" \
            && cd /tmp \
            && unzip chromedriver_linux64.zip \
            && rm -rf chromedriver_linux64.zip \
            && sudo mv chromedriver /usr/local/bin/chromedriver \
            && sudo chmod +x /usr/local/bin/chromedriver \
            && chromedriver --version
```

### 对的没错，安装 `ChromeDriver` ，这部分代码是我偶然从这个仓库翻到的

- [Microactive/AutoAction](https://github.com/Microactive/AutoAction)

虽然里面的 Action 已经久置且很久没人维护了，但是里面的思路很好，省去了自己配置 `ChromeDriver`  的时间。

配置完这个，再来讲一下这个定时任务

`Github Action` 的 定时任务使用到的是一个叫做 `Cron` 的表达式，但是我不解的是，似乎各个平台都有自己独特的一套标准...

好在 `Github` 有自动提示功能，当你输入之后，会有浮窗告诉你下次运行是什么时间

![3](https://ufile.22li.cn/22TC/2022/02/27/df3fcd26868de.png)

这个的意思是 在每小时的 `:02` 运行，而不是每两分钟运行（下图才是每两分钟运行一次 👀）

![](https://ufile.22li.cn/22TC/2022/02/27/500adf24bc3fa.png)

上面提供的代码块可以当做一个模板用。我感觉很好用....

这里再贴一下那个仓库的源码，供大家参考：

```yaml
name: 'GitHub Actions SCUT SIGN IN'

on:
  watch:
    types: started
  push:
  schedule:
#    - cron: '0 21 * * *'

jobs:
  bot:
    runs-on: ubuntu-latest
    steps:
        - name: 'Checkout codes'
          uses: actions/checkout@v1
        - name: 'Set up Python'
          uses: actions/setup-python@v1
          with:
            python-version: '3.7'
        - name: 'Install requirements'
          run: |
            python -m pip install --upgrade pip
            pip install -r requirements.txt
        - name: Install ChromeDriver
          run: |
            CHROME_VERSION=$(google-chrome --version | cut -f 3 -d ' ' | cut -d '.' -f 1) \
              && CHROMEDRIVER_RELEASE=$(curl --location --fail --retry 3 http://chromedriver.storage.googleapis.com/LATEST_RELEASE_${CHROME_VERSION}) \
              && curl --silent --show-error --location --fail --retry 3 --output /tmp/chromedriver_linux64.zip "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_RELEASE/chromedriver_linux64.zip" \
              && cd /tmp \
              && unzip chromedriver_linux64.zip \
              && rm -rf chromedriver_linux64.zip \
              && sudo mv chromedriver /usr/local/bin/chromedriver \
              && sudo chmod +x /usr/local/bin/chromedriver \
              && chromedriver --version
        - name: 'Get Date'
          run: echo "::set-env name=REPORT_DATE::$(TZ=':Asia/Shenzhen' date '+%Y-%m-%d %T')"
        - name: 'AutoClick'
          env:
            SCUT_USER: ${{ secrets.SCUT_USER }}
            SCUT_PASSWORD: ${{ secrets.SCUT_PASSWORD }}
            N3RO_USER: ${{ secrets.N3RO_USER }}
            N3RO_PASSWORD: ${{ secrets.N3RO_PASSWORD }}
            JIKESS_USER: ${{ secrets.JIKESS_USER }}
            JIKESS_PASSWORD: ${{ secrets.JIKESS_PASSWORD }}
            JIKESS_USER2: ${{ secrets.JIKESS_USER2 }}
            JIKESS_PASSWORD2: ${{ secrets.JIKESS_PASSWORD2 }}
          run: python autoclick.py
        - name: 'Send mail'
          uses: dawidd6/action-send-mail@master
          with:
            server_address: smtp.163.com
            server_port: 465
            username: ${{ secrets.MAIL_USERNAME }}
            password: ${{ secrets.MAIL_PASSWORD }}
            subject: 自动签到脚本 (${{env.REPORT_DATE}})
            body: file://email.txt
            to: 2280674798@qq.com
            from: My Robot
            content_type: text/html
```

这里还需要注意的是，经过上述步骤之后 `Github Action` 已经安装了 `ChromeDriver`，但是我们在 `Python` 脚本中要这样写

```python
from selenium import webdriver

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
browser = webdriver.Chrome('/usr/bin/chromedriver', options=chrome_options)
```

按照以上步骤配置完成之后，应该是可以正常运行的。

需要注意的是 `Github` 的定时功能可能存在 `20` 分钟左右的延迟，不大适合需求高精度时间的项目

但是每次上传代码的时候，都会触发 `Github Action` ，或许可以在本地写定时任务，自动提交代码，从而触发 `Action` 执行？

没尝试过，理论上来说应该可以.....

### 提供一个 `Python` 最小化实践案例来结束本文。

`./test.py`

```python
# coding:utf-8
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--disable-dev-shm-usage')
chromedriver = "/usr/bin/chromedriver"
os.environ["webdriver.chrome.driver"] = chromedriver
driver = webdriver.Chrome(options=chrome_options,executable_path=chromedriver)
driver.get("https://www.baidu.com")
print(driver.title)
driver.quit()
```

`requirements.txt`

```txt
requests==2.23.0
lxml==4.5.1
selenium==3.141.0
```

`/.github/workflows/main.yml`

```yaml
name: selenium

# Controls when the action will run. 
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - name: Checkout
        uses: actions/checkout@v2

      # Runs a single command using the runners shell
      - name: 'Set up Python'
        uses: actions/setup-python@v1
        with:
           python-version: 3.7
      - name: Install ChromeDriver
        run: |
          CHROME_VERSION=$(google-chrome --version | cut -f 3 -d ' ' | cut -d '.' -f 1) \
            && CHROMEDRIVER_RELEASE=$(curl --location --fail --retry 3 http://chromedriver.storage.googleapis.com/LATEST_RELEASE_${CHROME_VERSION}) \
            && curl --silent --show-error --location --fail --retry 3 --output /tmp/chromedriver_linux64.zip "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_RELEASE/chromedriver_linux64.zip" \
            && cd /tmp \
            && unzip chromedriver_linux64.zip \
            && rm -rf chromedriver_linux64.zip \
            && sudo mv chromedriver /usr/local/bin/chromedriver \
            && sudo chmod +x /usr/local/bin/chromedriver \
            && chromedriver --version
      - name: 'Install requirements'
        run: pip install -r ./requirements.txt
      - name: 'Working'
        run: |
          python ./test.py
         
```

测试成功

![7](https://ufile.22li.cn/22TC/2022/02/27/4ae9a17928d7d.png)
