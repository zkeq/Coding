---
title: MySQL | 分组查询的应用
tags: [MySQL]
description: 本节课主要学习了<br>分组查询的应用
date: 2022-04-27 01:07:45
categories: MySQL
cover: https://img.onmicrosoft.cn/2022-04-19/02.png
---

数据操作语言：分组查询

#### 为什么要分组？

- 默认情况下汇总函数是对全表范围内的数据做统计
- `GROUP BY` 子句的作用是通过一定的规则将一个数据集划分成若干个小的区域，然后针对每个小区域分别进行数据汇总处理

```SQL
SELECT deptno,AVG(sal) FROM t_emp
GROUP BY deptno;
```

```SQL
SELECT deptno,ROUND(AVG(sal)) FROM t_emp
GROUP BY deptno;
-- ROUND 取整
```

#### 逐级分组

- 数据库支持多列分组条件，执行的时候逐级分组。
- 查询每个部分里，每种职位的人员数量和平均底薪

```SQL
SELECT deptno,job,COUNT(*),AVG(sal)
FROM t_emp GROUP BY deptno,job
ORDER BY deptno;
```

```SQL
SELECT deptno,job,COUNT(*),AVG(sal) 
FROM t_emp
GROUP BY deptno,job
ORDER BY deptno
```

#### 对 SELECT 子句的要求

- 查询语句中如果含有 `GROUP BY` 子句，那么 `SELECT` 子句中的内容就必须要遵守规定：
  - `SELECT` 子句中可以包含聚合函数，或者 `GROUP BY` 子句的分组列，其余内容君不可出现在 `SELECT` 子句中。

```SQL
SELECT deptno,COUNT(*),AVG(sal)
FROM t_emp GROUP BY deptno;
```

```SQL
SELECT dept_no,COUNT(*),AVG(sal),sal
FROM t_emp GROUP BY deptno;
-- XXXXXXXXXXXXXX
```

##### 查看规则校验

```SQL
SELECT @@GLOBAL.sql_mode;
SELECT @@SESSION.sql_mode;
```

#### 对分组结果集再次做汇总计算

```SQL
SELECT
	deptno,COUNT(*),AVG(sal),MAX(sal),MIN(sal)
FROM t_emp GROUP BY deptno WITH ROLLUP
-- WITH ROLLUP 汇总
```

![01](https://img.onmicrosoft.cn/2022-04-27/01.png)

```SQL
SELECT deptno,AVG(sal),SUM(sal),MAX(sal),MIN(sal),count(*)
FROM t_emp
GROUP BY deptno WITH ROLLUP
```

#### GROUP_CONCAT 函数

- `GROUP_CONCAT` 函数可以把分组查询中的某个字段拼接成一个字符串

- 查询每个部门内底薪超过2000元的人数和员工命令

```SQL
SELECT deptno,GROUP_CONCAT(ename),COUNT(*)
FROM t_emp WHERE sal>=2000
GROUP BY deptno;
```

```SQL
SELECT deptno,COUNT(*),GROUP_CONCAT(ename)
FROM t_emp
WHERE sal>=2000
GROUP BY deptno;
```

#### 各种子句的执行顺序

- 查询语句中，`GROUP BY` 子句应该被 第几个执行？

`FROM` -> `WHERE` -> `GROUP BY` -> `SELECT` -> `ORDER BY` -> `LIMIT`
