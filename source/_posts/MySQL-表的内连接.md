---
title: MySQL | 表的内连接
tags: [MySQL]
description: 本节课主要学习了<br> 数据操作语言：表连接查询（一）
date: 2022-05-16 00:46:20
categories: MySQL
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

数据操作语言：表连接查询（一）

### 从多张表中提取数据

- 从多张表提取数据，必须指定关联的条件。如果不定义关联条件就会出现无条件连接，两张表的数据会交叉连接，产生 `笛卡尔积`。

  ![1](https://ik.imagekit.io/zkeq/2022-05-16/1.png)

- 规定了连接条件的表连接语句，就不会出现笛卡尔积。

  ![2](https://ik.imagekit.io/zkeq/2022-05-16/2.png)

```SQL
# 查询每名员工的部门信息
SELECT e.empno,e.ename,d.dname
FROM t_emp e JOIN t_dept d ON e.deptno=d.deptno;
```

### 表连接的分类

- 表连接分为两种：内连接 和 外连接
- 内连接是结果集中只保留符合连接条件的记录
- 外连接是不管符不符合连接条件，记录都要保留在`结果集`中

### 内连接的简介

- 内连接是最常见的一种表连接，用于查询多张关系表符合连接条件的记录。

  ![3](https://ik.imagekit.io/zkeq/2022-05-16/3.png)

### 内连接的多种语法形式

```SQL
SELECT ...... FROM 表1 JOIN 表2 ON 连接条件;
```

```SQL
SELECT ...... FROM 表1 JOIN 表2 WHERE 连接条件;
```

```SQL
SELECT ...... FROM 表1, 表2 WHERE 连接条件;
```

![4](https://ik.imagekit.io/zkeq/2022-05-16/4.png)

```SQL
# 查询每名员工的部门信息
SELECT e.empno,e.ename,d.dname
FROM t_emp e JOIN t_dept d ON e.deptno=d.deptno;

SELECT e.empno,e.ename,d.dname
FROM t_emp e JOIN t_dept d WHERE e.deptno=d.deptno;

SELECT e.empno,e.ename,d.dname
FROM t_emp e , t_dept d WHERE e.deptno=d.deptno;
```

#### 内连接练习1

- 查询每个员工的 工号、姓名、部门名称、底薪、职位、工资等级？

```SQL
# 查询每个员工的 工号、姓名、部门名称、底薪、职位、工资等级？
SELECT e.empno,e.ename,d.dname,e.sal,e.job,s.grade
FROM t_emp e JOIN t_dept d ON e.deptno=d.deptno
JOIN t_salgrade s ON e.sal BETWEEN s.losal AND s.hisal;
```

- 内连接的数据表不一定必须有同名字段，只要字段之间符合逻辑关系就可以

#### 内连接练习2

- 查询与 `SCOTT` 相同部门的员工都有谁？

```SQL
# 查询与 SCOTT 相同部门的员工都有谁？
SELECT ename
FROM t_emp
WHERE deptno=(SELECT deptno FROM t_emp WHERE ename="SCOTT")
AND ename!="SCOTT";
```

```SQL
# 查询与 SCOTT 相同部门的员工都有谁？

SELECT e2.ename
FROM t_emp e1 JOIN t_emp e2 ON e1.deptno=e2.deptno
WHERE e1.ename="SCOTT" AND e2.ename!="SCOTT";
```

- 相同的数据表也可以做表连接
