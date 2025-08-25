---
title: Golang | 山竹记账 Go 后端版学习笔记
date: 2025-08-25 15:02:04
tags:
  - Golang
  - Go
  - 后端开发
  - 记账应用
  - Web开发
  - API开发
categories:
  - 编程学习
  - Golang
description: 山竹记账应用的 Go 后端版本开发学习笔记，包含项目架构设计、API 接口开发、数据库操作、中间件使用等核心技术要点的详细记录和总结。
cover: https://media.onmicrosoft.cn/%E6%88%AA%E5%B1%8F2025-08-25%2018.35.14.png
---

### Hello GoLang
#### 执行 Go 命令

- 运行 go version 得到 go version go1.xx.x linunx/amd64

#### 创建 Hello 项目

- pwd 得到 /workspaces/oh-my-env
- mkdir hello; code hello 得到新窗口，关闭旧窗口
- go mod init github.com/frankfang/hello 用于初始化目录
如果没有看到 go.mod，点击 Refresh Explorer
- 创建 main.go
- go build . && ./hello 你也可以用 go run . 代替这两句话

```bash
/w/hello # ❯❯❯ go version
go version go1.20.3 linux/amd64
/w/hello # ❯❯❯ pwd
/workspace/hello
/w/hello # ❯❯❯ go mod init
go: cannot determine module path for source directory /workspace/hello (outside GOPATH, module path must be specified)

Example usage:
        'go mod init example.com/m' to initialize a v0 or v1 module
        'go mod init example.com/m/v2' to initialize a v2 module

Run 'go help mod init' for more information.
/w/hello # ❯❯❯ go mod init github.com/zkeq/hello-go                                                          ✘ 1 
go: creating new go.mod: module github.com/zkeq/hello-go
```

创建 `main.go`

```go
package main

func main(){
	println("hello")
}
```

`println` 函数不常用,可以用 `fmt.Println`, 输入 `fmt.pl` 即可补全

```go
package main

import "fmt"

func main() {
	fmt.Println("hello")
}
```

运行 `go run .`

```bash
/w/hello # ❯❯❯ go build .
/w/hello # ❯❯❯ ./hello-go
hello
/w/hello # ❯❯❯ go run .
hello
```

编译到 `Windows` 命令

```bash
GOOD=windows GOARCH=amd64 go build -o hello-go.exe
```

### Go 语法

#### 变量

```go
var a int = 42
var b, c int = 1, 2
var (
  a1     int = 42
  b1, c1 int = 1, 2
)
```

`:=` 反而不能指定了类型, 但是用的人更多

```go
d := 100
e, f := 200, 300
```

自己测试

```go
package main

import "fmt"

func main() {
	var a = 1
	var b, c = 1, 2
	var (
		d = 1
		f = 3
	)
	fmt.Println(a, b, c, d, f)
}
```

#### 常量

```go
const (
  C0 = iota
  C1
  C2
)
fmt.Println(C0, C1, C2) // "0 1 2"
```

猜猜结果

```go
const (
  C1 = iota + 1
  C2
  C3
)
fmt.Println(C1, C2, C3)

// 1 2 3
```

```go
const (
  C1 = iota + 1
  _
  C3
  C4
)
fmt.Println(C1, C3, C4)

// 1 3 4
```

```go
const (
  C1 = 1 << iota
  C2
  C3
  C4
)
fmt.Println(C1, C2, C3, C4)

// 1 2 4 8
```

##### iota 总结

iota 即希腊字母 ι
- iota 是其英文发音
- GoLang 中 iota 默认为 0，每行加 1
- 使用 iota 可以减少 hard code（写死的代码）
- 只能用在 const () 中
- 每个 const 都会重置

#### for 循环

```go
i := 1
for i <= 3 {
  fmt.Println(i)
  i++
}

for j := 1; j <= 3; j++ {
  fmt.Println(j)
}
```

```go
k := 1
for {
  if k > 3 {
      break
  }
  fmt.Println("可能无限循环")
  k++
}
```

##### for 循环特点

跟 JS 不一样的地方
- 不加 ( )，加了会被删
- for 接 0 个表达式等价于 JS 的 while(true)
- for 接 1 个表达式等价于 JS 的 while(condition)
- for 接 3 个表达式等价于 JS 的 for(初始化, 判断, 后续)

#### if else

```go
if num := 9; num < 0 {
  fmt.Println(num, "负数")
} else if num < 10 {
  fmt.Println(num, "一位数")
} else {
  fmt.Println(num, "多位数")
}
```

##### if else 特点

跟 JS 不一样的地方
- 推荐不加 ( )
- if 接一个表达式等价于 JS 的 if(condition)
- if 接两个表达式没有等价的 JS 常见写法

#### switch case

```go
switch time.Now().Weekday() {
case time.Saturday, time.Sunday:
  fmt.Println("休息日")
default:
  fmt.Println("工作日")
}
```

##### switch case 判断类型

```go
var i any = true
switch t := i.(type) {
case bool:
  fmt.Println("布尔")
case int:
  fmt.Println("整数")
default:
  fmt.Printf("未知类型 %T\n", t)
}
```

##### switch case 特点

与 JS 不一样的地方
- 不推荐加 ( )
- 不要加 break
- 一个 case 可以有多个值，用逗号隔开

#### 函数

```go
func f1(x, y int) (int, int) {
  return x + y, x * y
}
func f2(x, y int) (sum, product int) {
  sum = x + y
  product = x * y
  return
}
func main() {
  a, b := f1(3, 4)
  c, d := f2(5, 6)
  fmt.Println(a, b, c, d)
}
```

- 函数里面不能声明有名字的函数

自己练习
```go
package main

import (
	"fmt"
)

func add(a int, b int) int {
	return a + b
}

func main() {
	var add2 = func(a, b int) int {
		return a + b
	}

	fmt.Println(add2(1, 2))
	add(1, 2)
}
```

```go
package main

import (
	"fmt"
)

func add(a int, b int) int {
	return a + b
}

func main() {
	i := func(a, b int) int {
		return a + b
	}(1, 2)

	fmt.Println(i)
	add(1, 2)
}
```

#### 可变参数函数
```go
func sum(numbers ...int) int {
  total := 0
  for _, n := range numbers {
    total += n
  }
  return total
}
func main() {
  fmt.Println(sum(1, 2))
  fmt.Println(sum(1, 2, 3))
  nums := []int{1, 2, 3, 4}
  fmt.Println(sum(nums...))
}
```

#### 匿名函数

```go
func main() {
  sum := func(a, b int) int {
    return a + b
  }
  fmt.Println(sum(1, 2))
}
```

```go
func(c int) {
  fmt.Println(c)
}(3)
```

##### 函数特点

与 JS/TS 不一样的地方
- 返回值可以提前定义名字，return 可缩写
- numbers ...int 表示多个 int 参数组成的数组
- 立即执行函数不需要 Hack

#### 数据类型

简单值类型
- 数字（14种）：int32、float64
- 字符串
- 布尔

复杂值类型
- 结构体（struct）
- 数组（定长）：[3]int

引用类型
- 指针：*int
- 切片：[]int
- 哈希表：map[string]int
- 函数
- 通道：chan int
- 接口：interface {}

```go
package main

import (
	"fmt"
)

func main() {
	var a int64 = 64 // int 多少位跟操作系统有关
	var b uint64 = 64
	var f float64 = 64
	var f2 float64 = 64.0 // float 一般是64位
	f3 := 64.0
	var c complex64 = 1 + 2i
	fmt.Println(a, b, f, f2, f3, c)

	var s string = "hello"
	s1 := "hello"
	s2 := 'h' // int32
	fmt.Println(s, s1, s2)

	// 打印 s2
	fmt.Printf("%c\n", s2)

	n := true
	if n { // n 只能是布尔, 不能是字符串 或者 nil
		fmt.Println("n is true")
	} else {
		fmt.Println("n is false")
	}
}

```

#### 值类型

- 该类型的变量直接存放值

#### 结构体

```go
type Point struct{ X, Y int }

p1 := Point{1, 2}
fmt.Println(p1.X, p1.Y)

p2 := Point{X: 3, Y: 4}
fmt.Println(p2.X, p2.Y)
```

自己练习

```go
package main

import "fmt"

type User struct {
	Username string
	Age      int
}

func main() {
	u := User{Username: "zkeq", Age: 18}
	u2 := User{Username: "test", Age: 19}
	u3 := User{"zkeq", 20}
	fmt.Println(u, u2, u3, u.Username, u.Age)
}
```

#### 把结构体当做参数

```go
type Point struct{ X, Y int }
func modify(p Point) {
  p.X = 42
}
func main() {
  p1 := Point{1, 2}
  modify(p1)
  fmt.Println(p1)
}

// A {42, 2}
// B {1, 2}
```

实在要改的话可以这样改

```go
package main

import "fmt"

type Point struct{ X, Y int }

func modify(p *Point) {
	(*p).X = 42
    // p.Y = 42 也可以 直接取, 是一个 语法糖
}
func main() {
	p1 := Point{1, 2}
	modify(&p1)
	fmt.Println(p1)
}
```

#### * 与 &

用于类型
- `var a *int` 表示 `a` 存 `int` 的地址
- 此时称 `a` 为指针

用于值
- `&b` 表示 `b` 的地址
- `*c` 表示指针 `c` 对应的值

讲师: `我个人认为，用 var a &int 表示 a 存 int 的地址，更符合语义`

#### 把结构体当做参数2

```go

type Point struct{ X, Y int }
func modify(p *Point) {
  (*p).X = 42 ---> 语法糖 p.X = 42
}
func main() {
  p1 := Point{1, 2}
  modify(&p1)
  fmt.Println(p1)
}

```

#### 结构体的特点

与 JS 的不同之处
- 结构体是值类型，不是引用类型，不能与 JS 的对象进行类比
- Go 只支持传值，不过可以把地址当做值 modify(&p1)
- 结构体支持 label，用于各种功能；JS 没有 label

```js
function x(o){
    o.name = 'xxx'
}

const obj = {
    name: 'zkeq'
}

x(obj)
console.log(obj)

// { name: 'xxx' } // js 会自己传地址
```

#### 结构体变字符串

```go
type User struct {
  ID       string `json:"id"` // json 标记 key 的大小写规定
  UserName string `json:"username"`
  Email    string `json:"email"`
}
```

```go
func main() {
  u := User{
    ID:       "1",
    UserName: "test",
    Email:    "test@test.com",
  }

  bytes, err := json.Marshal(u)
  if err != nil {
    panic(err)
  }

  fmt.Println(string(bytes))
}
```

#### 数组（定长）

```go
a := [5]int{1, 2, 3}
a[1] = 20
fmt.Println(a) // [1 20 3 0 0]
```

自己练习

```go
package main

import (
	"fmt"
)

func main() {
	a := [...]int{1, 2, 3}
	a[1] = 20
	fmt.Println(a, len(a)) // [1 20 3 0 0]

}

```

#### 数组特点

> 不怎么用到数组, 不怎么关注就行了

与 `JS` 的不同之处
- 数组是值类型，不是引用类型，不能与 `JS` 的数组进行类比
- 数组长度是固定的
- 可以用 `len(a)` 获取数组的长度，而不是 `a.length`

