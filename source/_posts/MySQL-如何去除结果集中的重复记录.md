---
title: MySQL | 如何去除结果集中的重复记录
tags: [MySQL]
description: 本节课主要学习了<br>如何去除结果集中的重复记录
date: 2022-04-25 21:59:56
categories: MySQL
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

#### 数据操作语言：去除重复记录

#### 结果集中的重复记录

- 假如我们要查询员工表有多少种职业，写出来的 `SQL` 语句如下：

![3](https://ik.imagekit.io/zkeq/2022-04-25/03.png)

#### 去除重复记录

- 如果我们需要去除重复的数据，可以使用 `DISTINCT` 关键字来实现

```SQL
SELECT DISTINCT 字段 FROM ......;
```

![3](https://ik.imagekit.io/zkeq/2022-04-25/04.png)

```SQL
SELECT job FROM t_emp;
SELECT DISTINCT job FROM t_emp;
```

#### 注意事项

- 使用 `DISTINCT` 的 `SELECT` 子句中只能查询一列数据，如果查询多列，去除重复记录就会失效。

![3](https://ik.imagekit.io/zkeq/2022-04-25/05.png)

- `DISTINCT` 关键字只能在 `SELECT` 子句中使用一次

![6](https://ik.imagekit.io/zkeq/2022-04-25/06.png)

```SQL
SELECT DISTINCT job FROM t_emp;
SELECT DISTINCT job,ename FROM t_emp;
SELECT DISTINCT job,DISTINCT ename FROM t_emp;
SELECT job,DISTINCT ename FROM t_emp;
```

