# coding:utf-8

import requests
import os

data = requests.get("https://raw.githubusercontent.com/zkeq/Bing-Wallpaper-Action/main/README.md")
zh_time = requests.get("https://raw.githubusercontent.com/zkeq/Bing-Wallpaper-Action/main/data/zh-CN_all.json").json()

time = zh_time["LastUpdate"]
print(time)

# 打开 source/bing/index.md
f = open(os.path.join("source", "bing", "index.md"), "w")
f.write("""---
title: Bing 壁纸 每日更新
top_img: https://bing.icodeq.com
aside: false
date: {}
---

> If the date you see is 2 days ago, press `Ctrl + F5` to force a refresh, Maybe because I have `workbox` enabled.

""".format(time))
f.write(data.text)
f.close()