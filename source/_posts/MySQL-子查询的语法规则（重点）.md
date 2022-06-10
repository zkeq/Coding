---
title: MySQL | 子查询的语法规则（重点）
tags: [MySQL]
description: 本节课主要学习了<br>数据操作语言：子查询（一）
date: 2022-06-10 20:54:47
categories: MySQL
cover: https://img.onmicrosoft.cn/2022-04-19/02.png
---

数据操作语言：子查询（一）

### 子查询简介

- 子查询是一种查询中嵌套查询的语句
- 查询底薪超过公司平均底薪的员工的信息
- （`WHERE` 子查询不推荐使用）

![10](https://img.onmicrosoft.cn/2022-06-09/10.png)

```SQL
SELECT empno,ename,sal
FROM t_emp
WHERE sal>=(SELECT AVG(sal) FROM t_emp);
```

### 子查询的分类

- 子查询可以写在三个地方：`WHERE` 子句、`FROM` 子句、`SELECT` 子句，但是只有 `FROM` 子句子查询是最可取的

### WHERE 子查询

- 这种子查询最简单，最容易理解，但是却是效率很低的子查询
- 查询底薪超过公司平均底薪的员工的信息
- （相关子查询）

![11](https://img.onmicrosoft.cn/2022-06-09/11.png)

### FROM 子查询

- 这种子查询只会执行一次，所以查询效率很高
- （不是相关子查询，优先选择）

![12](https://img.onmicrosoft.cn/2022-06-09/12.png)

### SELECT 子查询

- 这种子查询每输出一条记录的时候都要执行一次，查询效率很低
- （相关子查询）

![13](https://img.onmicrosoft.cn/2022-06-09/13.png)

- 不指明则为当前表）

```SQL
# 虽然结果对，但是不敢恭维，因为效率太低了。
SELECT
	e.empno,e.ename,
	(SELECT dname FROM t_dept WHERE deptno=e.deptno)
FROM t_emp e;
```

