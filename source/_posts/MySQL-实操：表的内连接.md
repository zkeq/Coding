---
title: MySQL | 实操：表的内连接
tags: [MySQL]
description: 本节课主要学习了<br>数据操作语言：表连接查询（二）
date: 2022-05-16 01:33:28
categories: MySQL
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

数据操作语言：表连接查询（二）

#### 内连接查询联系1

- 查询底薪超过公司平均底薪的员工信息？

```SQL
# 查询底薪超过公司平均底薪的员工信息？
SELECT e2.empno,e2.ename,e2.sal
FROM t_emp e1 JOIN t_emp e2 WHERE e2.sal>=AVG(e1.sal);

SELECT e.empno,e.ename,e.sal
FROM t_emp e JOIN 
(SELECT AVG(sal) avg FROM t_emp) t
ON e.sal>=t.avg;
```

- 查询 `RESEARCH` 部门的 人数、最高底薪、最低底薪、平均底薪、平均工龄？

```SQL
# 查询 `RESEARCH` 部门的 人数、最高底薪、最低底薪、平均底薪、平均工龄？
SELECT COUNT(*),MAX(e.sal),MIN(e.sal),AVG(e.sal),
AVG(DATEDIFF(NOW(),e.hiredate)/365)
FROM t_emp e JOIN t_dept d ON e.deptno=d.deptno
WHERE d.dname="RESEARCH";

SELECT FLOOR(28.9);

# 查询 `RESEARCH` 部门的 人数、最高底薪、最低底薪、平均底薪、平均工龄？
SELECT COUNT(*),MAX(e.sal),MIN(e.sal),AVG(e.sal),
FLOOR(AVG(DATEDIFF(NOW(),e.hiredate)/365))
FROM t_emp e JOIN t_dept d ON e.deptno=d.deptno
WHERE d.dname="RESEARCH";

SELECT FLOOR(28.9);
SELECT CEIL(1.1);
```

#### 内连接查询联系2

- 查询每种职业的 `最高工资`、`最低工资`、`平均工资`、`最高工资等级` 和 `最低工资等级` ？

```SQL
# 查询每种职业的 `最高工资`、`最低工资`、`平均工资`、`最高工资等级` 和 `最低工资等级` ？

SELECT
e.job,
MAX(e.sal+IFNULL(e.comm,0)),
MIN(e.sal+IFNULL(e.comm,0)),
AVG(e.sal+IFNULL(e.comm,0)),
MAX(s.grade),
MIN(s.grade)
FROM t_emp E JOIN t_salgrade s
on (e.sal+IFNULL(e.comm,0)) BETWEEN s.losal AND s.hisal
GROUP BY e.job

```

- 查询每个底薪超过部门平均底薪的员工信息

```SQL
# 查询每个底薪超过部门平均底薪的员工信息
SELECT e.empno,e.ename,e.sal
FROM t_emp e JOIN 
(SELECT deptno,AVG(sal) AS avg FROM t_emp GROUP BY deptno) t
ON e.deptno=t.deptno AND e.sal>=t.avg;
```

