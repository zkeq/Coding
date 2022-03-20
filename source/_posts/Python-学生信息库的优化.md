---
title: Python 学生信息库的优化
description: 本节课主要利用所学知识<br>对前面所写的项目进行了优化
date: 2021-11-03 23:17:06
tags: [对象和异常]
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-10-28/2.jpg
---

### 学生信息库的优化

![3](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-3/3.png)

```python
# coding:utf-8

"""
    学生信息库
"""

class StudentInfo(object):
    def __init__(self, students):
        self.students = students

    def get_by_id(self, student_id):
        return self.students.get(student_id)

    def get_all_students(self):
        for id_, value in self.students.items():
            print('学号: {},姓名{},年龄{},性别{},班级{}'.format(
                id_, value['name'], value['age'], value['sex'], value['class_number']
            ))
        return self.students

    def add(self, **student):
        check = self.check_user_info(**student)
        if check != True:
            print(check)
            return
        self.__add(**student)

    def adds(self, new_students):
        for student in new_students:
            check = self.check_user_info(**student)
            if check != True:
                print(check, student.get('name'))
                continue
            self.__add(**student)

    def __add(self, **student):
        new_id = max(self.students) + 1
        self.students[new_id] = student

    def delete(self, student_id):
        if student_id not in self.students:
            print('{}并不存在'.format(student_id))
        else:
            user_info = self.students.pop(student_id)
            print('学号是{}, {}同学的信息已经被删除了'.format(student_id, user_info['name']))

    def deletes(self, ids):
        for id_ in ids:
            if id_ not in self.students:
                print(f'{id_}不存在学生库中')
                continue
            student_info = self.students.pop(id_)
            print(f'学号{id_} 学生{student_info["name"]} 已被移除')

    def update(self, student_id, **kwargs):
        if student_id not in self.students:
            print('并不存在这个学号:{}'.format(student_id))

        check = self.check_user_info(**kwargs)
        if check != True:
            print(check)
            return

        self.students[student_id] = kwargs
        print('同学信息更新完毕')

    def updates(self, update_students):
        for student in update_students:
            id_ = list(student.keys())[0]
            if id_ not in self.students:
                print(f'学号{id_}不存在')
                continue
            user_info = student[id_]
            check = self.check_user_info(**user_info)
            if check != True:
                print(check)
                continue
            self.students[id_] = user_info
        print('所有用户信息更新完成')

    def search_users(self, **kwargs):
        values = list(self.students.values())
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

        for user in values:  # [{name, sex, age, class_number}, {}]
            # print(user[key])
            # print(value)
            if value in user[key]:
                result.append(user)
        return result

    def check_user_info(self, **kwargs):
        if 'name' not in kwargs:
            return '没有发现学生姓名'
        if 'age' not in kwargs:
            return '没有发现学生年龄'
        if 'sex' not in kwargs:
            return '没有发现学生性别'
        if 'class_number' not in kwargs:
            return '没有发现学生班级'
        return True



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

if __name__ == '__main__':
    students_info = StudentInfo(students)
    user = students_info.get_by_id(1)
    students_info.add(name='dewei', age=34, class_number='A', sex='boy')
    # print(students_info.students)
    users = [
        {'name': 'xiaoming', 'age': 17, 'class_number': 'b', 'sex': 'boy'},
        {'name': 'xiaohong', 'age': 18, 'class_number': 'c', 'sex': 'girl'}
    ]
    students_info.adds(users)
    students_info.get_all_students()
    print('-----------------')
    students_info.deletes([7, 8])
    students_info.get_all_students()
    print('-------------')
    students_info.updates([
        {1: {'name': 'dewei.zhang', 'age': 18, 'class_number': 'A', 'sex': 'boy'}},
        {2: {'name': '小慕同学', 'age': 18, 'class_number': 'A', 'sex': 'boy'}}
    ])
    students_info.get_all_students()
    result = students_info.search_users(name='d')
    print(result)
    result = students_info.search_users(name='小')
    print(result)
    # 如果同学想用年龄字段模糊查询,
    # 需要把年龄改为str类型
    print('---------------')
    result = students_info.search_users(name='')
    print(result)
    
```
