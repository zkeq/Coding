---
title: MySQL | 聚合函数的使用
tags: [MySQL]
description: 本节课主要学习了<br>聚合函数的使用
date: 2022-04-26 22:48:06
categories: MySQL
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

数据操作语言：聚合函数

#### 什么是聚合函数

- 聚合函数在数据的查询分析中，应用十分广泛。聚合函数可以对 `数据求和`、求 `最大值` 和 `最小值` 、求 `平均值` 等等。
- 求公司员工的评价月收入是多少？

```SQL
SELECT AVG(sal+IFNULL(comm,0)) FROM t_emp;
```

```SQL
SELECT AVG(sal+IFNULL(comm,0)) AS avg
FROM t_emp;
```

#### SUM 函数

- `SUM` 函数用于求和，只能用户数字类型，字符类型的统计结果为 0 ，日期类型统计结果是毫秒数相加

```SQL
SELECT SUM(ename) FROM t_emp;

SELECT SUM(sal) FROM t_emp
WHERE deptno IN (10,20);
```

```SQL
SELECT SUM(sal)
FROM t_emp WHERE deptno IN(10,20);
```

#### MAX 函数

- `MAX` 函数用于获得非空值的最大值。

```SQL
SELECT MAX(comm) FROM t_emp;
```

- 问题1：查询10和20部门中，月收入最高的员工？

```SQL
SELECT MAX(sal+IFNULL(comm,0)) FROM t_emp
WHERE deptno IN(10,20)
```

- 问题2：查询员工名字最长的是几个字符？

```SQL
SELECT MAX(LENGTH(ename)) FROM t_emp;
```

#### MIN 函数

- `MIN` 函数用于获得非空值的最小值。

```SQL
SELECT MIN(empno) FROM t_emp;
SELECT MIN(hiredate) FROM t_emp;
```

#### AVG 函数

- `AVG` 函数用于获得非空值的平均值，非数字数据统计结果为 0

```SQL
SELECT AVG(sal+IFNULL(comm,0)) FROM t_emp;

SELECT AVG(ename) FROM t_emp;
```

#### COUNT 函数

- `COUNT(*)` 用于获得包含空值的记录数，`COUNT(列名)` 用于获得包含非空值的记录数。

```SQL
SELECT COUNT(*) FROM t_emp;

SELECT COUNT(comm) FROM t_emp;
```

```SQL
SELECT 
	COUNT(*), COUNT(comm)
FROM t_emp;
```

- 查询 10 和 20 部门中，底薪超过 2000 元并且工龄超过 15 年的员工人数？

```SQL
SELECT COUNT(*) FROM t_emp
WHERE deptno IN(10,20) AND sal>= 2000
AND DATEDIFF(NOW(), hiredate)/365>=15;
```

- 查询 1985 年以后入职的员工，底薪超过公司平均底薪的员工数量？

```SQL
SELECT COUNT(*) FROM t_emp
WHERE hiredate>="1985-01-01"
AND sal>AVG(sal); -- XXXXXXXX
-- 聚合函数永远不能出现在 WHERE 子句里面
```

