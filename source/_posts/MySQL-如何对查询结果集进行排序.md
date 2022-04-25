---
title: MySQL | 如何对查询结果集进行排序
tags: [MySQL]
description: 本节课主要学习了<br> 如何对查询结果集进行排序
date: 2022-04-25 21:19:43
categories: MySQL
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

#### 数据操作语言：结果集排序

- 如果没有设置，查询语句不会对结果集进行排序。也就是说，如果想让结果集按照某种顺序排列，就必须使用 `ORDER BY` 子句。

```SQL
SELECT ...... FROM ...... ORDER BY 列名 [ASC | DESC];
```

```SQL
SELECT ename,sal FROM t_emp ORDER BY sal;
```

```SQL
SELECT empno,ename,sal,deptno FROM t_emp ORDER BY sal DESC;
```

#### 排序关键字

- `ASC` 代表升序（默认），`DESC` 代表降序
- 如果排序列是数字类型，数据库就按照数字大小排序，如果是日期类型就按日期大小排序，如果是字符串就按照字符集序号排序。

```SQL
SELECT ename,sal FROM t_emp ORDER BY hiredate DESC;
```

```SQL
SELECT empno,ename,hiredate,deptno FROM t_emp ORDER BY ename ASC;
SELECT empno,ename,hiredate,deptno FROM t_emp ORDER BY hiredate DESC;
```

#### 排序字段内容相同的情况

- 默认情况下，如果两条数据排序字段内容相同，那么排序会是什么样子？

#### xxxxxxxxxx CREATE TABLE t_message(    id INT UNSIGNED PRIMARY KEY,    content VARCHAR(200) NOT NULL,    type ENUM("公告", "通报", "个人通知") NOT NULL,    create_time TIMESTAMP NOT NULL,    INDEX idx_type (type));​DROP INDEX idx_type ON t_message;CREATE INDEX idx_type ON t_message(type);SHOW INDEX FROM t_message;ALTER TABLE t_message ADD INDEX idx_type(type);SQL

- 我们可以使用 `ORDER BY` 规定首要排序条件和次要排序条件。

  数据库会先按照首要排序条件排序，如果遇到首要排序内容相同的记录，那么就会启用次要排序条件接着排序。

![2](https://ik.imagekit.io/zkeq/2022-04-25/02.png)

```SQL
SELECT empno,ename,sal,hiredate FROM t_emp ORDER BY sal DESC,hiredate ASC;
```

```SQL
SELECT 
	empno,ename,deptno,sal
FROM t_emp
ORDER BY deptno,sal DESC;
```

```SQL
SELECT 
	empno,ename,sal
FROM t_emp ORDER BY sal DESC LIMIT 0,5;
```

#### 排序 + 分页

- `ORDER BY` 子句书写的时候放在 `LIMIT` 子句的前面

  `FROM` -> `SELECT` -> `ORDER BY` -> `LIMIT`

