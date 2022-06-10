---
title: MySQL | 表的外连接
tags: [MySQL]
description: 本节课主要学习了<br> 数据操作语言：表连接查询（三）
date: 2022-06-09 16:44:44
categories: MySQL
cover: https://img.onmicrosoft.cn/2022-04-19/02.png
---

数据操作语言：表连接查询（三）

### 为什么要使用外连接

- 如果说陈浩是一名临时人员，没有固定的部门编制，那么我们想查询每名员工和他的部门名称，用内连接就会漏掉陈浩，所以要引用外连接的语法才能解决这个问题

![1](https://img.onmicrosoft.cn/2022-06-09/1.png)

### 外连接简介

- 外连接与内连接的区别在于，除了符合条件的记录之外，结果集中还会`保留不符合条件`的记录。

![2](https://img.onmicrosoft.cn/2022-06-09/2.png)

- `LEFT` 左连接 ，查询的条数总数是左表的总数，右表若如则使用 `Null` 填充

![3](https://img.onmicrosoft.cn/2022-06-09/3.png)

```SQL
SELECT e.empno,e.ename,d.dname
FROM t_emp e LEFT JOIN t_dept d
ON e.deptno=d.deptno
```

### 左连接和右连接

- 左外连接就是保留左表所有的记录，与右表做连接。如果右表有符合条件的记录就与左表连接。如果右表没有符合条件的记录，就用 NULL 与左表连接。右外连接也是如此。

```SQL
SELECT e.empno,e.ename,d.dname
FROM t_dept d RIGHT JOIN t_emp e
ON e.deptno=d.deptno
```

### UNION关键字

- UNION关键字可以将多个查询语句的结果集进行合并
  `(查询语句) UNION (查询语句) UNION (查询语句)...`
- 前提是字段的个数和名称都要相同

![4](https://img.onmicrosoft.cn/2022-06-09/4.png)

#### 外连接练习1

- 查询每个部门的名称和部门的人数？

```SQL
SELECT d.dname,COUNT(*)  --  这里不对，会将NULL统计进去
FROM t_dept d LEFT JOIN t_emp e 
on d.deptno=e.deptno
GROUP BY d.deptno;

SELECT d.dname,COUNT(d.deptno)  --  这里不对，会将NULL统计进去
FROM t_dept d LEFT JOIN t_emp e 
on d.deptno=e.deptno
GROUP BY d.deptno;

SELECT d.dname,COUNT(e.deptno)   --  这个才是正确的
FROM t_dept d LEFT JOIN t_emp e 
on d.deptno=e.deptno
GROUP BY d.deptno;
```

- 查询每个部门的名称和部门的人数？如果没有部门的员工，部门名称用`NULL`代替。

- `UNION` 关键字可以将多个查询语句的结果集进行合并

![4](https://img.onmicrosoft.cn/2022-06-09/4.png)

```SQL
(
SELECT d.dname,COUNT(e.deptno)  -- 注意这里的count
FROM t_dept d LEFT JOIN t_emp e 
on d.deptno=e.deptno
GROUP BY d.deptno
) UNION
(
SELECT d.dname,COUNT(*)          -- 注意这里的count
FROM t_dept d RIGHT JOIN t_emp e 
on d.deptno=e.deptno
GROUP BY d.deptno);
```

#### 外连接练习2

- 查询每名员工的编号、姓名、部门、月薪、工资等级、工龄、上司编号、上司姓名、上司部门？
  1. 员工信息
  2. 上司信息

（下节课讲解）
