---
title: 'Python [案例]实现学生信息库'
date: 2021-10-20 23:15:16
tags: [编程练习]
categories: Python
description: 通过运用前面所学的知识 <br> 完成学生信息库的案例
cover: https://ik.imagekit.io/zkeq/2021-10-20/4.png
---

### [案例]实现学生信息库

![3](https://ik.imagekit.io/zkeq/2021-10-20/3.png)

```python
# coding:utf-8

"""
    学生信息库
"""

students = {
    1: {
        'name': 'dewei',
        'age': 33,
        'class_number': 'A',
        'sex': 'boy'
    },
    2: {
        'name': '小慕',
        'age': 10,
        'class_number': 'B',
        'sex': 'boy'
    },
    3: {
        'name': '小曼',
        'age': 18,
        'class_number': 'A',
        'sex': 'girl'
    },
    4: {
        'name': '小高',
        'age': 18,
        'class_number': 'C',
        'sex': 'boy'
    },
    5: {
        'name': '小云',
        'age': 18,
        'class_number': 'B',
        'sex': 'girl'
    }
}


def check_user_info(**kwargs):
    if 'name' not in kwargs:
        return '没有发现学生姓名'
    if 'age' not in kwargs:
        return '没有发现学生姓名'
    if 'sex' not in kwargs:
        return '没有发现学生姓名'
    if 'class_number' not in kwargs:
        return '没有发现学生姓名'
    return True

def get_all_students():
    for id_, value in students.items():
        print('学号: {},姓名{},年龄{},性别{},班级{}'.format(
            id_, value['name'], value['age'], value['sex'], value['class_number']
        ))
    return students


# result = get_all_students()
# print('----', result)


def add_student(**kwargs):
    check = check_user_info(**kwargs)
    if check != True:
        print(check)
        return

    id_ = max(students) + 1

    students[id_] = {
        'name': kwargs['name'],
        'age': kwargs['age'],
        'sex': kwargs['sex'],
        'class_number': kwargs['class_number']
    }


# add_student(name='小白', age=19, class_number='A', sex='boy')
# get_all_students()


def delete_student(student_id):
    if student_id not in students:
        print('{}并不存在'.format(student_id))
    else:
        user_info = students.pop(student_id)
        print('学号是{}, {}同学的信息已经被删除了'.format(student_id, user_info['name']))


# delete_student(1)
# add_student(name='小白', age=19, class_number='A', sex='boy')
# get_all_students()

def update_student(student_id, **kwargs):
    if student_id not in students:
        print('并不存在这个学号:{}'.format(student_id))

    check = check_user_info(**kwargs)
    if check != True:
        print(check)
        return

    students[student_id] = kwargs
    print('同学信息更新完毕')


update_student(1, name='dewei.zhang', age=33, class_number='A', sex='boy')
get_all_students()


def get_user_by_id(student_id):
    return students.get(student_id)


print(get_user_by_id(3))


def search_users(**kwargs):
    values = list(students.values())
    key = None
    value = None
    result = []

    if 'name' in kwargs:
        key = 'name'
        value = kwargs[key]
    elif 'sex' in kwargs:
        key = 'sex'
        value = kwargs['sex']
    elif 'class_number' in kwargs:
        key = 'class_number'
        value = kwargs[key]
    elif 'age' in kwargs:
        key = 'age'
        value = kwargs[key]
    else:
        print('没有发现搜索的关键字')
        return

    for user in values:
        if user[key] == value:
            result.append(user)
    return result


print('---------')
# users = search_users(age=18)
users = search_users(sex='girl')
print(users)

```
