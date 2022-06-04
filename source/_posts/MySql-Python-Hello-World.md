---
title: MySQL | Python Hello World
tags: [MySQL]
description: 本节课主要学习了<br>如何通过 `Pymysql` 来完成 `Hello World` 操作。
date: 2022-04-19 00:48:12
categories: MySQL
cover: https://img.onmicrosoft.cn/2022-04-19/02.png
---

感谢 [@xcsoft](https://github.com/soxft) 大佬带小白入门.....

![1](https://img.onmicrosoft.cn/2022-04-19/01.png)

## 代码

```Python
import pymysql.cursors

# Connect to the database
connection = pymysql.connect(host='localhost',
                             user='py',
                             password='MsXMAFiaaSKRei6j',
                             database='py',
                             cursorclass=pymysql.cursors.DictCursor)

with connection:
    # Create a new cursor
    # 这个游标的意思，应该是跟鼠标差不多？
    with connection.cursor() as cursor:
        sql_create = """
                    CREATE TABLE `users` (
                    `id` int(11) NOT NULL AUTO_INCREMENT,
                    `email` varchar(255) COLLATE utf8_bin NOT NULL,
                    `password` varchar(255) COLLATE utf8_bin NOT NULL,
                    PRIMARY KEY (`id`)
                    ) 
                    ENGINE=InnoDB 
                    DEFAULT 
                    CHARSET=utf8mb4 
                    COLLATE=utf8mb4_bin
                    AUTO_INCREMENT=1 ;
                    """
        # 首先建表
        cursor.execute(sql_create)
        # 只需要建表一次哦
        # Create a new record
        # 再执行语句
        sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
        cursor.execute(sql, ('webmaster@python.org', 'very-secret'))
        # 执行完毕之后就关闭这个连接
    # connection is not autocommit by default. So you must commit to save
    # your changes.
    # 想要保存数据，就要提交？
    connection.commit()

    with connection.cursor() as cursor:
        # Read a single record
        sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
        cursor.execute(sql, ('webmaster@python.org',))
        result = cursor.fetchone()
        print(result)
```

