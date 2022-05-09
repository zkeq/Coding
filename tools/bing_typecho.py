# coding:utf-8

import requests
import time
import pymysql
import datetime

bing_cid = 13

data = requests.get(
    "https://ghproxy.futils.com/https://raw.githubusercontent.com/zkeq/Bing-Wallpaper-Action/main/README.md")
zh_time = requests.get(
    "https://ghproxy.futils.com/https://raw.githubusercontent.com/zkeq/Bing-Wallpaper-Action/main/data/zh-CN_all.json").json()

# 2022-05-09 02:34:42 转时间类型
time_array = time.strptime(zh_time["LastUpdate"], "%Y-%m-%d %H:%M:%S")
# 转成时间戳
time_stamp = int(time.mktime(time_array))
markdown_content = "<!--markdown-->"
print("获取到今日bing壁纸数据，开始写入数据库...")
print("最近更新时间：" + str(datetime.datetime.fromtimestamp(time_stamp)))
markdown_content += data.text
# 写入 Mysql
db = pymysql.connect(host="localhost", user="root", passwd="123456", db="typecho", charset="utf8")
cursor = db.cursor()
# 更新数据
sql = "UPDATE `typecho_Zkeqcontents` SET `text` = '{}', `modified` = '{}' WHERE `cid` = '{}';".format(markdown_content,
                                                                                                      time_stamp,
                                                                                                      bing_cid)
cursor.execute(sql)
db.commit()
db.close()
print("bing_typecho.py done!")
