---
title: MySQL | 条件查询的语句（二）
tags: [MySQL ]
description: 本节课主要学习了<br> 数据操作语言：条件查询（二）
date: 2022-04-25 23:34:58
categories: MySQL 
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

数据操作语言：条件查询（二）

#### 逻辑运算符

| 序号 | 表达式 |   意义   |             例子              |
| :--: | :----: | :------: | :---------------------------: |
|  1   |  AND   |  与关系  |   `age > 18 AND sex = "男"`   |
|  2   |   OR   |  或关系  | `empno = 8000 OR deptno = 20` |
|  3   |  NOT   |  非关系  |       `NOT deptno =20`        |
|  4   |  XOR   | 异或关系 |   `age > 18 XOR sex = "男"`   |

```SQL
SELECT
	ename,deptno
FROM t_emp
WHERE NOT deptno IN(10,20);
WHERE NOT deptno IN(10,20) XOR sal>=2000;
```

#### 二进制按位运算

- 二进制位运算的实质是将参与运算的两个操作数，按对应的二进制数逐位进行逻辑运算。

```
SELECT 3 & 7;
```

![08](https://ik.imagekit.io/zkeq/2022-04-25/08.png)

##### 按位运算符

| 序号 | 表达式 |   意义   |   例子    |
| :--: | :----: | :------: | :-------: |
|  1   |   &    | 位与关系 |  `3 & 7`  |
|  2   |   \|   | 位或关系 |  `3 | 7`  |
|  3   |   ~    |  位取反  |  ``~10`   |
|  4   |   ^    |  位异或  |  `3 ^ 7`  |
|  5   |   <<   |   左移   | `10 << 1` |
|  6   |   >>   |   右移   | `10 >> 1` |

WHERE 子句的注意事项

- WHERE 子句中，条件执行的顺序是从左到右的。所以我们应该把索引条件，或者筛选掉记录最多的条件写在最左侧

![10](https://ik.imagekit.io/zkeq/2022-04-25/10.png)

- 子句优先级
  - 索引条件最左边，再是筛选最多的，最后是普通条件

#### 各种子句的执行顺序

- 条件查询中，WHERE 子句应该是第几个执行？

​	`FROM -> WHERE -> SELECT -> ORDER BY -> LIMIT`
