# coding:utf-8

import requests
import os

data = requests.get("https://raw.githubusercontent.com/zkeq/Bing-Wallpaper-Action/main/README.md")
zh_time = requests.get("https://raw.githubusercontent.com/zkeq/Bing-Wallpaper-Action/main/data/zh-CN_all.json").json()

time = zh_time["LastUpdate"]
last_pic = "https://www.bing.com" + zh_time["data"][0]["url"]

# 打开 source/bing/index.md
f = open(os.path.join("source", "bing", "index.md"), "w")
f.write("""
---
title: Bing 壁纸 每日更新
date: {0}
cover: {1}
---
""".format(time, last_pic))
f.write(data.text)