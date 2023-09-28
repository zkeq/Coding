---
title: 笔记 |　Axios 速查表
tags: [笔记]
description: 本节课主要学习了<br>Axios 作弊表
date: 2022-07-29 16:35:48
categories: 饥人谷
cover: https://img.onmicrosoft.cn/2022-06-15/5.png
copyright_url: https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index
---

在 `JavaScript` 中，使用 `this` 访问的是当前函数的上下文，它的值是在函数运行时动态绑定的。这意味着，如果你在一个函数内部使用 `this` ，那么它指向的是在运行该函数时，该函数所处的对象。

因此，在 `Axios` 的 `.then()` 方法中使用 `this` 访问数据可能会出现问题，因为 `.then()` 方法可能不是在你的组件内部被调用的，所以 this 的值可能不是指向你的组件的。

有几种解决方法：

使用箭头函数来绑定 `this：`
因为箭头函数不会创建新的作用域，所以它们会继承外部作用域中的 `this`。例如：
```js
axios.get('/some/URL')
  .then(response => {
    // 在这里，this 指向你的组件
    console.log(this.data);
  })
  .catch(error => {
    console.log(error);
  });
```
使用 `bind()` 方法绑定 `this` ：
```js
axios.get('/some/URL')
  .then(function (response) {
    // 在这里，this 指向你的组件
    console.log(this.data);
  }.bind(this))
  .catch(function (error){
    console.log(error);
  });
```
使用结构赋值获取响应数据：
```js
axios.get('/some/URL')
  .then(({ data }) => {
    // 在这里，可以直接使用 data 访问响应数据
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```
使用 `then` 方法之前先将 `this` 存储到一个变量中，然后在 `then` 方法中使用这个变量。例如：
```js
let self = this;
axios.get('/user?ID=12345')
  .then(function (response){
    self.data = response.data;
  })
  .catch(function (error){
    console.log(error);
  });
```


> 箭头函数不会创建自己的 this 上下文，而是会继承自外围（父级）作用域的 this 值。这就意味着，箭头函数中的 this 与普通函数中的 this 不同。

> 在箭头函数内部，this 的值是在定义函数时确定的，而不是在运行时确定的。它会捕获并继承外围作用域中的 this 值，无论该值是什么。

> 种特性常常用于解决传统 JavaScript 中的 this 问题。在传统函数中，this 的值会根据调用方式和上下文发生变化，会导致一些意外的结果。而箭头函数的 this 是固定的，不会被改变，极大地简化了代码的编写和阅读。

> 下面是一个示例来演示箭头函数的 this 特性：

```javascript
const obj = {
  name: 'Alice',
  sayHello() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`); // 输出 "Hello, Alice!"
    }, 100);
  }
};

obj.sayHello();
```

> 在上述示例中，箭头函数作为 setTimeout 的回调函数，它继承了外围作用域中的 this 值，即调用 sayHello 方法的 obj 对象。因此，在箭头函数内部访问 this.name 将会输出 obj.name 的值。

> 需要注意的是，因为箭头函数的 this 值是继承自外围作用域的，所以它无法通过 call、apply 或 bind 方法来改变 this 的指向。你可以在需要使用动态指向的场景中使用普通函数来解决。


# GET 请求

```javascript
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function(response) {
  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
```

# POST 请求

```javascript
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

# 并行请求

```javascript
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
```

# 创建实例

```javascript
var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

# Response

```javascript
axios.get('/user/12345')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

# Config

```javascript
// Global axios defaults

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Custom instance defaults

// Set config defaults when creating the instance
var instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Config order of precedence

// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
var instance = axios.create();

// Override timeout default for the library
// Now all requests will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;

// Override timeout for this request as it's known to take a long time
instance.get('/longRequest', {
  timeout: 5000
});
```

# 拦截器

```javascript
// Intercept request/responses

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  
// Remove interceptor

var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);

// Custom instance interceptors

var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

# 错误处理

```javascript
// Catch error

axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

// Custom HTTP status code error

axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  }
})
```

# 取消请求

```javascript
// Cancel request with cancel token

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');

// Create cancel token

var CancelToken = axios.CancelToken;
var cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// cancel the request
cancel();
```
