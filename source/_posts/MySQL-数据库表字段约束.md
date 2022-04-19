---
title: MySQL | 数据库表字段约束
tags: [MySQL]
description: 本节课主要学习了<br>数据库的 范式 和 字段约束
date: 2022-04-19 23:44:45
categories: MySQL
cover: https://ik.imagekit.io/zkeq/2022-04-19/02.png
---

### 数据定义语言：字段约束

#### 数据库的范式

- 构造数据库必须遵循一定的规则，这种规则就是范式
- 目前关系数据库有 6 种范式，一般情况下，只满足第三范式即可

##### 第一范式：原子性

- 第一范式是数据库的基本要求，不满足这一点就不是关系数据库
- 数据表的每一列都是不可分割的基本数据项，同一列中不能有多个值，也不能存在重复的属性。

![14](https://ik.imagekit.io/zkeq/2022-04-19/14.png)

##### 第二范式：唯一性

- 数据表中的每条记录必须是唯一的。为了实现区分，通常要为表上加一个列用来存储唯一标识，这个唯一属性列被称作主键列

![15](https://ik.imagekit.io/zkeq/2022-04-19/15.png)

##### 第三范式：关联性

- 每列都与主键有直接关系，不存在传递依赖

![16](https://ik.imagekit.io/zkeq/2022-04-19/16.png)

- 依照第三范式，数据可以拆分保存到不同的数据表，依次保持关联

![17](https://ik.imagekit.io/zkeq/2022-04-19/17.png)

#### 字段约束

- MySQL 中的字段约束共有四种：

| 约束名称 | 关键字        | 描述                        |
| -------- | ------------- | --------------------------- |
| 主键约束 | `PRIMARY KEY` | 字段值唯一，且不能为 NULL   |
| 非空约束 | `NOT NULL`    | 字段值不能为 `NULL`         |
| 唯一约束 | `UNIQUE`      | 字段值唯一，且可以为 `NULL` |
| 外键约束 | `FOREIGN KEY` | 保持关联数据的逻辑性        |

- 外键约束是唯一不推荐使用的约束

##### 主键约束

- 主键约束要求字段的值在全表必须唯一，而且不能为 `NULL` 值
- 建议主键一定要使用数据类型，因为数字的检索速度会非常快
- 如果主键是数字类型，还可以设置自动增长

```SQL
CREATE TABLE t_teacher(
	id INT PRIMARY KEY AUTO_INCREMENT,
	... ...
);
```

##### 非空约束

- 非空约束要求字段的值不能为 `NULL` 值
- `NULL` 值为没有值，而不是  `""` 空字符串

```SQL
CREATE TABLE t_teacher(
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(200) NOT NULL,
	married BOOLEAN NOT NULL DEFAULT FALSE
);
```

- `BOOLEAN` 实际为`TINYINT ` 数据类型

##### 唯一约束

- 唯一约束要求字段值如果不为 `NULL`，那么在全表必须唯一

```SQL
CREATE TABLE t_teacher(
	......
	tel CHAR(11) NOT NULL UNIQUE
);
```

##### 以上三种的练习

```SQL
CREATE TABLE t_teacher(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	tel CHAR(11) NOT NULL UNIQUE,
	married BOOLEAN NOT NULL DEFAULT FALSE
);	
```

##### 外键约束（放弃）

- 外键约束用来保证关联数据的逻辑关系

![18](https://ik.imagekit.io/zkeq/2022-04-19/18.png)

- 外键约束的定义是写在字表上的

创建父表

```SQL
CREATE TABLE t_dept(
	deptno INT UNSIGNED PRIMARY KEY,
	dname VARCHAR(20) NOT NULL UNIQUE,
	tel CHAR(4) UNIQUE
);
```

创建子表

```SQL
CREATE TABLE t_emp(
	empno INT UNSIGNED PRIMARY KEY,
	ename VARCHAR(20) NOT NULL,
	sex ENUM("男", "女") NOT NULL, # 枚举的数据类型，挑选一个
	deptno INT UNSIGNED,
	biredate DATA NOT NULL,
	FOREIGN KEY (deptno) REFERENCES t_dept(deptno)
);
```

可执行代码

```SQL
CREATE TABLE t_dept(
	deptno INT UNSIGNED PRIMARY KEY,
	dname VARCHAR(20) NOT NULL UNIQUE,
	tel CHAR(4) UNIQUE
);

CREATE TABLE t_emp(
	empno INT UNSIGNED PRIMARY KEY,
	ename VARCHAR(20) NOT NULL,
	sex ENUM("男", "女") NOT NULL,
	deptno INT UNSIGNED NOT NULL,
	hiredate DATE NOT NULL,
	FOREIGN KEY (deptno) REFERENCES t_dept(deptno)
)
```

##### 外键约束的闭环问题

- 如果形成外键闭环，我们将无法删除任何一张表的记录

![19](https://ik.imagekit.io/zkeq/2022-04-19/19.png)

