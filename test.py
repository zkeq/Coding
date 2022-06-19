# coding: utf-8
# 读取 data.json 里面的内容

import json

with open('data.json', 'r') as f:
    data = json.load(f)

    print(data)


# 输出结果
# 写入 data.json 里面的内容

def write_json(data):
    with open('data.json', 'w') as f:
        json.dump(data, f)