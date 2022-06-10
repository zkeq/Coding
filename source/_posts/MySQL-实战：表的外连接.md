---
title: MySQL | 实战：表的外连接
tags: [MySQL]
description: 本节课主要学习了<br>数据操作语言：表链接查询（四）
date: 2022-06-10 17:04:09
categories: MySQL
cover: https://img.onmicrosoft.cn/2022-04-19/02.png
---

数据操作语言：表链接查询（四）

### 题目

> 查询每名员工的编号、姓名、部门、月薪、工资等级、工龄、上司编号、上司姓名、上司部门？

```SQL
#查询每名员工的编号、姓名、部门、月薪、工资等级、工龄、上司编号、上司姓名、上司部门？
SELECT
	e.empno,e.ename,d.dname,
	e.sal+IFNULL(e.comm,0),s.grade,
	FLOOR(DATEDIFF(NOW(),e.hiredate)/365),
	t.empno AS mgrno,t.ename AS mname,t.dname AS edname
FROM t_emp e LEFT JOIN t_dept d ON e.deptno=d.deptno
LEFT JOIN t_salgrade s ON e.sal BETWEEN s.losal AND s.hisal
LEFT JOIN
(SELECT e1.empno,e1.ename,d1.dname
FROM t_emp e1 JOIN t_dept d1
ON e1.deptno=d1.deptno
) t ON e.mgr=t.empno;
```

![5](https://img.onmicrosoft.cn/2022-06-09/5.png)

### 外连接的注意事项

- 内连接只保留符合条件的记录，所以查询条件写在 `ON` 子句和 `WHERE` 子句中的效果是相同的。
- 但是外连接里，条件写在 `WHERE` 子句里，不符合条件的记录是会被过滤掉的，而不是保留下来。

![6](https://img.onmicrosoft.cn/2022-06-09/6.png)

![7](https://img.onmicrosoft.cn/2022-06-09/7.png)

- `ON` 子句无论成立还是不成立，里面的值会都会被保留
- 写在 `WHERE` 里面会被过滤掉。

![8](https://img.onmicrosoft.cn/2022-06-09/8.png)

![9](https://img.onmicrosoft.cn/2022-06-09/9.png)

```SQL
SELECT
e.empno,e.ename,d.dname
FROM t_emp e LEFT JOIN t_dept d
ON e.deptno=d.deptno
WHERE e.deptno=10
```

