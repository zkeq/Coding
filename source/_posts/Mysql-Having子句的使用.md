---
title: Mysql | Having子句的使用
tags: [Mysql ]
description: 本节课主要学习了<br>Having子句的使用
date: 2022-04-27 02:47:08
categories: Mysql 
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

数据操作语言：HAVING 子句

#### 分组查询遇到的困难？

- 查询部门平均底薪超过2000元的部门编号

```SQL
错误示范
SELECT deptno FROM t_emp
WHERE AVG(sal) >=2000 -- 错在这里出现了聚合函数
GROUP BY deptno;
```

```SQL
引入 HAVING 子句
SELECT deptno
FROM t_emp
GROUP BY deptno HAVING AVG(sal)>=2000;
```

#### HAVING 子句的用途

- 查询每个部门中，1982 年以后入职的员工超过 2 个人的部门编号。

```SQL
SELECT deptno FROM t_emp
WHERE hiredate>="1982-01-01"
GROUP BY deptno HAVING COUNT(*) >= 2
ORDER BY deptno ASC;
```

```SQL
# 查询每个部门中，1982年以后入职的员工超过2个人的部门编号
SELECT deptno
FROM t_emp
WHERE hiredate>="1982-01-01"
GROUP BY deptno HAVING COUNT(*)>=2;
```

```SQL
# 查询每个部门中，1982年以后入职的员工超过2个人的部门编号
SELECT deptno
FROM t_emp
WHERE hiredate>="1982-01-01"
GROUP BY deptno HAVING COUNT(*)>=2 AND AVG(sal)>=2000;
```

```SQL
错误示范
# 查询每个部门中，1982年以后入职的员工超过2个人的部门编号
SELECT deptno
FROM t_emp
WHERE hiredate>="1982-01-01"
GROUP BY deptno HAVING COUNT(*)>=2 AND sal>=AVG(sal);
```

#### HAVING 子句的特殊用法

- 按照数字 `1` 分组，`MySQL` 会依据 `SELECT` 子句中的列进行分组，`HAVING` 子句也可以正常使用

```SQL
SELECT deptno,COUNT(*) FROM t_emp
GROUP BY 1;

SELECT deptno,COUNT(*) FROM t_emp
GROUP BY 1 HAVING deptno IN(10,20);
-- 不建议这么写，浪费资源
```

```SQL
SELECT deptno,COUNT(*) 
FROM t_emp
WHERE deptno IN(10,20)
GROUP BY 1;
-- 推荐这么写
```

