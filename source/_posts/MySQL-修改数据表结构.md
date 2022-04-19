---
title: MySQL | 修改数据表结构
tags: [MySQL]
description: 本节课主要学习了<br>如何 修改数据表结构 增删改数据表字段
date: 2022-04-19 23:11:26
categories: MySQL
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

## 数据定义语言：字段约束

### 添加字段

![10](https://ik.imagekit.io/zkeq/2022-04-19/10.png)

```mysql
ALTER TABLE student
ADD address VARCHAR(200) NOT NULL,
ADD home_tel char(11) NOT NULL;
```

### 修改字段类型和约束

![11](https://ik.imagekit.io/zkeq/2022-04-19/11.png)

```mysql
ALTER TABLE student
MODIFY home_tel VARCHAR(20) NOT NULL;

DESC student;
```

### 修改字段名称

![12](https://ik.imagekit.io/zkeq/2022-04-19/12.png)

```mysql
DESC student;

ALTER TABLE student
CHANGE address home_address VARCHAR(200) NOT NULL;
```

### 删除字段

![13](https://ik.imagekit.io/zkeq/2022-04-19/13.png)

```mysql
DESC student;

ALTER TABLE student
DROP home_address,
DROP home_tel;
```

### 总结语句

```mysql
ALTER TABLE student # DDL 语句 没有操作数据类型
ADD address VARCHAR(200) NOT NULL,
ADD home_tel char(11) NOT NULL;

ALTER TABLE student # DDL 语句 没有操作数据类型
MODIFY home_tel VARCHAR(20) NOT NULL;

DESC student;

ALTER TABLE student # DDL 语句 没有操作数据类型
CHANGE address home_address VARCHAR(200) NOT NULL;

ALTER TABLE student # DDL 语句 没有操作数据类型
DROP home_address,
DROP home_tel;
```

