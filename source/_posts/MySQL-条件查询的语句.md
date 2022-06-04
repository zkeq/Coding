---
title: MySQL | 条件查询的语句（一）
tags: [MySQL]
description: 本节课主要学习了<br>数据操作语言：条件查询（一）
date: 2022-04-25 22:13:52
categories: MySQL 
cover: https://img.onmicrosoft.cn/2022-04-19/02.png
---

#### 数据操作语言：条件查询（一）

#### 条件查询

- 很多时候，用户感兴趣的并不是逻辑表里的全部记录，

  而只是他们当中能够满足某一种或某几种条件的记录。这类条件要用 `WHERE` 子句来实现数据的筛选

```SQL
SELECT ...... FROM ..... WHERE 条件 [AND | OR] 条件 ...... ; 
```

![07](https://img.onmicrosoft.cn/2022-04-25/07.png)

```SQL
SELECT empno,ename,sal
FROM t_emp
WHERE deptno=10 AND sal>=2000;
WHERE (deptno=10 OR deptno=20)AND sal>=2000;
```

#### 四类运算符

- `WHERE` 语句中的条件运算会用到以下四种运算符：

| 序号 |   运算符   |
| :--: | :--------: |
|  1   | 数学运算符 |
|  2   | 比较运算符 |
|  3   | 逻辑运算符 |
|  4   | 按位运算符 |

#### 算数运算符

| 序号 | 表达式 | 意义 |   例子    |
| :--: | :----: | :--: | :-------: |
|  1   |   +    | 加法 | 1 + 2 + 3 |
|  2   |   -    | 减法 | 1 - 2 - 3 |
|  3   |   *    | 乘法 |  5 * 35   |
|  4   |   /    | 除法 | 231 / 15  |
|  5   |   %    | 求模 |  10 % 3   |

> 查询 10 部门里面 年收入超过 15K 美金，并且工龄超过二十年 的员工信息

```SQL
SELECT empno,ename,sal,hiredate
FROM t_emp
WHERE deptno=10 AND (sal+IFNULL(comm,0))*12>=15000;
AND DATEDIFF(NOW(),hiredata)/265>=20;

-- 获取当前日期
SELECT NOW()
-- 引入一个新函数 IFNLL 若第一个参数为 NULL 则返回第二个参数
SELECT 10+IFNULL(null,0);
```

#### 比较运算符（一）

| 序号 | 表达式 |   意义   |         例子          |
| :--: | :----: | :------: | :-------------------: |
|  1   |   >    |   大于   |      `age > 18`       |
|  2   |   >=   | 大于等于 |      `age >= 18`      |
|  3   |   <    |   小于   |     `sal < 3000`      |
|  4   |   <=   | 小于等于 |     `sal <= 3000`     |
|  5   |   =    |   等于   |     `deptno = 10`     |
|  6   |   !=   |  不等于  |    `deptno != 30`     |
|  7   |   IN   |   包含   | `deptno IN(10,30,40)` |

> 查询 10,20,30 部门里面，在 1985 年以前入职的员工并且不是 `saselmen` 员工的信息

```SQL
SELECT 
	empno,ename,sal,deptno,hiredate
FROM t_emp
WHERE deptno IN(10,20,30) AND job!="SALESMAN"
AND hiredate<"1985-01-01";
```

#### 比较运算符（二）

| 序号 |   表达式    |    意义    |             例子              |
| :--: | :---------: | :--------: | :---------------------------: |
|  8   |   IS NULL   |    为空    |        `comm IS NULL`         |
|  9   | IS NOT NULL |   不为空   |      `comm IS NOT NULL`       |
|  10  | BETWEEN AND |    范围    |  `sal BETWEEN 2000 AND 3000`  |
|  11  |    LIKE     |  模糊查询  |       `ename LIKE "A%"`       |
|  12  |   REGEXP    | 正则表达式 | `ename REGEXP "[a-zA-Z]{4}" ` |

```sqlite
SELECT 
ename,comm,sal
FROM t_emp WHERE comm IS NOT NULL
```

```SQL
SELECT 
	ename,comm,sal
FROM t_emp WHERE comm IS NULL
AND sal BETWEEN 2000 AND 3000;
```

```SQL
SELECT 
	ename,comm,sal
FROM t_emp WHERE comm IS NULL
AND sal BETWEEN 2000 AND 3000
AND ename LIKE "%A%";

```

```SQL
SELECT 
	ename,comm,sal
FROM t_emp WHERE comm IS NULL
AND sal BETWEEN 2000 AND 3000
AND ename LIKE "_LAKE";
-- _ 运算符
```

```SQL
SELECT 
	ename,comm,sal
FROM t_emp WHERE comm IS NOT NULL
AND sal BETWEEN 1000 AND 3000
AND ename REGEXP "^[\\u4e00-\\u9fa5]{2,4}$";
-- 两到四个字符的中文
```

