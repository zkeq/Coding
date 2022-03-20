---
title: Python 阶段编程练习(二十三)
tags: [高级函数,编程练习]
description: 利用前面所学知识<br>完成自己的任务。
date: 2021-11-12 02:10:13
categories: Python
cover: https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/6.png
---

作业案例1

![1](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/1.png)

```python
# coding:utf-8

import logging
import json
import os

'''
   学生信息库
   1: 将学生信息存入一个json文件中， 添加读与写json的函数
   2: 我们要将用户添加修改和删除的行为记录到日志中，添加与修改都用info代表
      而delete将要用warn警告来提示
'''

class NotArgError(Exception):
    def __init__(self, message):
        self.message = message

class MissPathError(Exception):
    def __init__(self, message):
        self.message = message

class FormatError(Exception):
    def __init__(self, message):
        self.message = message

class StudentInfo(object):
    def __init__(self, students_path, log_path):
        self.students_path = students_path
        self.log_path = log_path
        self.log = self.__log()

        self.__init_path()
        self.__read()

    def __log(self):
        if os.path.exists(self.log_path):
            mode = 'a'
        else:
            mode = 'w'
        logging.basicConfig(
            level=logging.DEBUG,
            format='%(asctime)s-%(filename)s-%(lineno)d-%(levelname)s-%(message)s',
            filename=self.log_path,
            filemode=mode
        )
        return logging

    def __init_path(self):
        if not os.path.exists(self.students_path):
            raise MissPathError('没有相关的地址文件 %s' % self.students_path)

        if not os.path.isfile(self.students_path):
            raise TypeError('当前的studentspath不是一个文件')

        if not self.students_path.endswith('.json'):
            raise FormatError('当前不是一个json文件')

    def __read(self):
        with open(self.students_path, 'r') as f:
            try:
                data = f.read()
            except Exception as e:
                raise e
        self.students = json.loads(data)

    def __save(self):
        with open(self.students_path, 'w') as f:
            json_data = json.dumps(self.students)
            f.write(json_data)


    def get_by_id(self, student_id):
        return self.students.get(student_id)

    def get_all_students(self):
        for id_, value in self.students.items():
            print('学号：{}, 姓名:{}, 年龄:{}, 性别:{}, 班级:{}'.format(
                id_, value['name'], value['age'], value['sex'], value['class_number']
            ))
        return self.students

    def add(self, **student):
        try:
            self.check_user_info(**student)
        except Exception as e:
            raise e
        self.__add(**student)
        self.__save()
        self.__read()

    def adds(self, new_students):
        for student in new_students:
            try:
                self.check_user_info(**student)
            except Exception as e:
                print(e, student.get('name'))
                continue
            self.__add(**student)
        self.__save()
        self.__read()

    def __add(self, **student):
        if len(self.students) == 0:
            new_id = 1
        else:
            keys = list(self.students.keys())
            _keys = []
            for item in keys:
                _keys.append(int(item))
            new_id = max(_keys) + 1
        self.students[new_id] = student
        self.log.info('学生%s被注册了' % student['name'])

    def delete(self, student_id):
        if student_id not in self.students:
            print('{} 并不存在'.format(student_id))
        else:
            user_info = self.students.pop(student_id)
            print('学号是{}, {}同学的信息已经被删除了'.format(student_id, user_info['name']))
            self.log.warning('学号是{}, {}同学的信息已经被删除了'.format(student_id, user_info['name']))
        self.__save()
        self.__read()
    def deletes(self, ids):
        for id_ in ids:
            if id_ not in self.students:
                print(f'{id_} 不存在学生库中')
                continue
            student_info = self.students.pop(id_)
            print(f'学号{id_} 学生{student_info["name"]} 已被移除')
            self.log.warning(f'学号{id_} 学生{student_info["name"]} 已被移除')
        self.__save()
        self.__read()

    def update(self, student_id, **kwargs):
        if student_id not in self.students:
            print('并不存在这个学号:{}'.format(student_id))
        try:
            self.check_user_info(**kwargs)
        except Exception as e:
            raise e

        self.students[student_id] = kwargs
        self.__save()
        self.__read()
        print('同学信息更新完毕')

    def updates(self, update_students):
        for student in update_students:
            try:
                id_ = list(student.keys())[0]
            except IndexError as e:
                print(e)
                continue
            if id_ not in self.students:
                print(f'学号{id_} 不存在')
                continue
            user_info = student[id_]
            try:
                self.check_user_info(**user_info)
            except Exception as e:
                print(e)
                continue
            self.students[id_] = user_info
        print('所有用户信息更新完成')
        self.__save()
        self.__read()

    def search_users(self, **kwargs):

        assert len(kwargs) == 1, '参数数量传递错误'

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
            raise NotArgError('没有发现搜索的关键字')

        for user in values:  # [{name, sex, age, class_number}, {}]
            if value in user[key]:
                result.append(user)
        return result

    def check_user_info(self, **kwargs):
        assert len(kwargs) == 4, '参数必须是4个'

        if 'name' not in kwargs:
            raise NotArgError('没有发现学生姓名参数')
        if 'age' not in kwargs:
            raise NotArgError('缺少学生年龄参数')
        if 'sex' not in kwargs:
            raise NotArgError('缺少学生性别参数')
        if 'class_number' not in kwargs:
            raise NotArgError('缺少学生班级参数')

        name_value = kwargs['name']  # type(name_value)
        age_value = kwargs['age']
        sex_value = kwargs['sex']
        class_number_value = kwargs['class_number']
        # isinstace(对比的数据, 目标类型） isinstance(1, str)

        if not isinstance(name_value, str):
            raise TypeError('name应该是字符串类型')
        if not isinstance(age_value, int):
            raise TypeError('age 应该是整型')
        if not isinstance(sex_value, str):
            raise TypeError('sex应该是字符串类型')
        if not isinstance(class_number_value, str):
            raise TypeError('class_number应该是字符串类型')



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
    student_info = StudentInfo('students.json')
    user = student_info.get_by_id(1)
    student_info.add(name='dewei', age=34, class_number='A', sex='boy')
    users = [
        {'name': 'xiaoming', 'age': 17, 'class_number': 'B', 'sex': 'boy'},
        {'name': 'xiaohong', 'age': 18, 'class_number': 'C', 'sex': 'girl'}
    ]
    student_info.adds(users)
    student_info.get_all_students()
    print('------')
    student_info.deletes([7, 8])
    student_info.get_all_students()
    print('-------')
    student_info.updates([
        {1: {'name': 'dewei.zhang', 'age': 18, 'class_number': 'A', 'sex': 'boy'}},
        {2: {'name': '小慕同学', 'age': 18, 'class_number': 'A', 'sex': 'boy'}}
    ])
    student_info.get_all_students()
    result = student_info.search_users(name='d')
    print(result)
    result = student_info.search_users(name='小')
    print(result)
    print('------')
    result = student_info.search_users(name='')
    print(result)
    result = student_info.search_users(name='小')
    print(result)
    print('-----')
    result = student_info.search_users (name='')
    print(result)
```

### 作业

> 亲爱的朋友们，经过这一阶段的学习，大家已经掌握了在Python中如何进行函数的定义与调用、文件基本操作、模块化思想······，也熟悉了Python中一些基本的内置函数和方法的运用，接下来让我们动手实践下——编写“数字猜猜猜”小游戏。

##### 题目要求：

*根据现实生活中的猜数字游戏的游戏规则，运用Python语言模拟实现猜数字游戏的的基本功能，请学员们参考真实的猜数字游戏规则和如下的程序运行效果图进行代码编写，以实现“数字猜猜猜”小游戏的基本功能。游戏规则介绍如下：*

玩家根据提示进行数字区间起始位置和终止位置的输入

1. 依据 1 中输入的数字区间，产生该区间内一个随机数，用于进行猜测比对的终值
2. 提示用户输入所猜测的数字，与 2 中产生的随机数字进行比对，并将相应的信息写入指定的日志文件（日志文件名称：record.txt；日志文件路径：与.py文件处于同一级目录）
3. 依据 3 中的比对结果。若两者不等，打印友好提示，重复 3、4 步骤；若两者相等，则退出该函数，执行下列语句
4. 当猜测的值不在指定区间内时，不需要统计次数和记录
5. 打印如效果图所示，用以提示游戏结束的信息

##### 运行效果图:

1. 成功运行效果图：

   ![2](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/2.jpg)

2. 输入区间起始值和区间终止值相等效果图：

   ![3](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/3.jpg)

3. 输入区间起始值大于区间终止值效果图：

   ![4](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/4.jpg)

4. 输入区间起始值和终止值为非数字字符效果图：

   ![5](https://cdn.read.html5.qq.com/image?src=circle&q=0&r=0&imgflag=0&cdn_cache=1800&w=0&h=0&imageUrl=https://learnonly-7.oss-cn-qingdao.aliyuncs.com/2021-11-11/5.jpg)

##### 代码(不想写了,包括上面那个..都不是我写的, 好累 好困 去睡了  回头再看) 

```python
#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2021/8/27 21:38
# @Author   : InsaneLoafer
# @File     : mooc_test.py

import logging
import os
import random


def init_log(path):
    if os.path.exists(path):
        mode = 'a'
    else:
        mode = 'w'
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s %(filename)s %(lineno)d %(message)s',
        filename=path,
        filemode=mode
    )
    return logging

def guess_number():
    print('********************欢迎进入数字踩踩踩游戏********************')
    start = input('数字区间起始值：')
    end = input('数字区间终止值：')
    if not start.isdigit() or not end.isdigit():
        print('您输入的区间数字为非数字字符！！请重新启动程序。')
        exit()
    else:
        start = int(start)
        end = int(end)
        count = 0
        if start == end:
            print('您输入的区间数字相同！！请重新启动程序。')
            exit()
        elif start > end:
            print('您输入的区间数字大小有误！！请重新启动程序。')
            exit()

        else:
            print('所产生的的随机数字区间为：[{}, {}]'.format(start, end))
            random_number = random.randint(start, end)

            while True:
                count += 1
                number = int(input('请继续输入您猜测的数字：'))
                if number not in range(start,end+1):
                    print('对不起您输入的数字未在指定区间内！！！')
                    continue
                elif number > random_number:
                    init_log('record.txt')
                    print('*********')
                    print('Higher than the anwser')
                    continue
                elif number < random_number:
                    init_log('record.txt')
                    print('*********')
                    print('Lower than the anwser')
                    continue
                elif number == random_number:
                    init_log('record.txt')
                    print('*********')
                    print('恭喜你！只用了{}次就赢得了游戏'.format(count))
                    break

if __name__ == '__main__':
    guess_number()
```
