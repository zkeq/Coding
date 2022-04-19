---
title: MySQL | 数据库的索引机制
tags: [MySQL]
description: 本节课主要学习了<br>数据库的索引机制（好处与用法）
date: 2022-04-20 01:00:33
categories: MySQL
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png

---

### 数据排序的好处

- 一旦数据排序之后，查找的速度就会翻倍，现实世界跟程序世界都是如此

#### 如何创建索引

![20](https://ik.imagekit.io/zkeq/2022-04-19/20.png)

```SQL
CREATE TABLE t_message(
	id INT UNSIGNED PRIMARY KEY,
	content VARCHAR(200) NOT NULL,
	type ENUM("公告", "通报", "个人通知") NOT NULL,
	create_time TIMESTAMP NOT NULL,
	INDEX idx_type (type)
)
```

#### 如何添加与删除索引

![21](https://ik.imagekit.io/zkeq/2022-04-19/21.png)

```SQL
DROP INDEX idx_type ON t_message;
CREATE INDEX idx_type ON t_message(type);
SHOW INDEX FROM t_message;
ALTER TABLE t_message ADD INDEX idx_type(type);
```

![22](https://ik.imagekit.io/zkeq/2022-04-19/22.png)

#### 索引的使用原则

- 数据库很大，而且经常被查询的数据表可以设置索引
- 索引只添加在经常被用作索引条件的字段上面
- 不要在大字段上创建索引
