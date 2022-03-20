---
title: Python 百度贴吧爬虫
tags: [Python]
description: 本节课主要学习了<br>如何发送请求获取网页响应以及解析网页.
date: 2021-11-30 15:28:19
categories: 编程练习
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-30/1.png
---

![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-30/2.png)

```python
# coding:utf-8
import requests
from lxml import etree
import json


class Tieba(object):
    def __init__(self, name):
        self.url = 'https://tieba.baidu.com/f?kw={}'.format(name)
        self.heardes = {
            "User-Agent": "Mozilla/4.0 (compatible; MSIE 5.00; Windows 98)"
        }

    def get_data(self, url):
        response = requests.get(url, headers=self.heardes)
        with open("temp.html", "wb") as f:
            f.write(response.content)
        return response.content

    def parse_data(self, data):
        # 创建element对象
        # data = data.decode().replace("<!--", "")
        html = etree.HTML(data)
        el_list = html.xpath('//li[@class=" j_thread_list clearfix thread_item_box"]/div/div[2]/div[1]/div[1]/a')
        print(len(el_list))

        data_list = []
        for el in el_list:
            temp = {}
            temp['title'] = el.xpath("./text()")[0]
            temp['link'] = 'https://tieba.baidu.com' + el.xpath("./@href")[0]
            data_list.append(temp)

        # 获取下一页url
        try:
            next_url = 'https:' + html.xpath('//a[contains(text(),"下一页>")]/@href')[0]
        except:
            next_url = None
        return data_list, next_url

    def save_data(self, data_list):
        for data in data_list:
            with open("temp.json", "a+", encoding='utf-8') as f:
                data_temp = json.dumps(data, ensure_ascii=False)
                print(data_temp)
                f.write(data_temp)
            #     f.write(data)


    def run(self):
        # url
        # hearders
        next_url = self.url

        while True:
            # 发送请求,获取响应
            data = self.get_data(self.url)
            # 从相应中提取数据(数据和翻页用的url)
            data_list, next_url = self.parse_data(data)

            self.save_data(data_list)

            print(next_url)
            # 判断是否终结
            if next_url == None:
                break

if __name__ == '__main__':
    tieba = Tieba("华东理工大学吧")
    tieba.run()

```

