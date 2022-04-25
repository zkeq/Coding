---
title: MySQL | 数据库的基本查询
tags: [MySQL ]
description: 本节课主要学习了<br> 数据库的基本查询
date: 2022-04-25 19:56:54
categories: MySQL 
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

### 数据操作语言：普通查询

#### 记录查询

- 最基本的查询语句是由 `SELECT` 和 `FROM` 关键字组成的

```SQL
SELECT * FORM t_emp;
SELECT empnpo, ename, sal FROM t_emp;
```

- `SELECT` 语句屏蔽了物理层的操作。用户不必关心数据的真实存储，交由数据库高效的查找数据

```sql
USE demo;
SELECT * FROM t_emp;
SELECT empno,ename,sal FROM t_emp;
```

#### 使用列命名

- 通常情况下，`SELECT` 子句中使用了表达式，那么这列的名字就默认为表达式，因此需要一种对列名重命名的机制。

```SQL
SELECT
	empno,
	sal*12 AS "income"
FROM t_emp;
```

```sql
SELECT empno,sal*12 AS "icome" FROM t_emp;
```

#### 查询语句的子句执行顺序

```sql
SELECT
	empno,
	sal*12 AS "income"
FROM t_emp;
```

1. 语法分析与优化
   - 读取 `SQL` 语句
2. `FORM`
   - 选择数据来源
3. `SELECT`
   - 选择输出内容

#### 数据分页

- 比如我们查看朋友圈，只会加载少量部分信息，不用一次性加载全部朋友圈，那样只会浪费 `CPU` 时间、内存和网络带宽
- 如果结果集的记录很多，则可以使用 `LIMIT` 关键字限定结果集数量。

```SQL
 SELECT ...... FROM ... LIMIT 起始位置, 偏移量;
```

![1](https://ik.imagekit.io/zkeq/2022-04-25/01.png)

```sql
SELECT empno, ename FROM t_emp LIMIT 10, 5;
```

#### 数据分页的简写用法

- 如果 `LIMIT` 子句只有一个参数，它表示的是偏移量，起始值默认为 0

```sql
SELECT empno, ename FROM t_emp LIMIT 10;
SELECT empno, ename FROM t_emp LIMIT 0,10;
```

`FROM` -> `SELECT` -> `LIMIT`
