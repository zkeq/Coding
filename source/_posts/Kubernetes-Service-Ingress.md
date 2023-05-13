---
title: Kubernetes | Service - Ingress
tags:
  - Kubernetes
categories:
  - Kubernetes
description: Kubernetes中的Service和Ingress是用于管理网络流量的重要组件。Service负责将流量路由到Pod，而Ingress则负责将流量路由到不同的Service。此外，本文还介绍了Kubernetes中的不同代理模式、ClusterIP、Headless Service、NodePort、LoadBalancer和ExternalName，并提供了相关的YAML文件示例。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-05-10 23:21:32
---

```
Code_016---2019 尚硅谷Kubernetes教程
链接: https://pan.baidu.com/s/1iYMUBaCq5fq6i4nnMD8V-Q
提取码: zkeq
```

## Kubernetes | Service 的概念

- `SVC` 负责监测他所匹配的 `Pod` 的信息, 并且把他加入到 `SVC` 的 `Endpoints` 中, 从而实现负载均衡的功能,
- 如何后期有变化的话, `SVC` 会进行信息同步, `Nginx` 指向这个 `SVC`, 会将请求转发至正常工作的 `Pod`, 不需要我们在 `Nginx` 做任何的修改. 这就是 `SVC` 的机制.
- 引入 `SVC` 之后, 如果服务有 `扩容、伸缩` 等操作 都不会对上一层的服务造成影响.
- `SVC` 也叫做 服务发现.

![image-20230510235318134](https://img.onmicrosoft.cn/k8s/202305102353167.png)

Kubernetes `Service` 定义了这样一种抽象：一个 `Pod` 的逻辑分组，一种可以访问它们的策略——通常称为微服务。这一组 `Pod` 能够被 `Service` 访问到，通常是通过 `Label Selector`。

![image-20230510232951797](https://img.onmicrosoft.cn/k8s/202305102329932.png)

- 多标签没问题 只要不少 标签就可以了 

`Service` 能够提供负载均衡的能力，但是在使用上有以下限制：

只提供 4 层负载均衡能力，而没有 7 层功能，但有时我们可能需要更多的匹配规则来转发请求，这点上 4 层负载均衡是不支持的。

## Service 的类型

`Service` 在 K8s 中有以下四种类型：

- `ClusterIP`：默认类型，自动分配一个仅 Cluster 内部可以访问的虚拟 IP。
- `NodePort`：在 `ClusterIP` 基础上为 `Service` 在每台机器上绑定一个端口，这样就可以通过 `<NodeIP>:NodePort` 来访问该服务。
- `LoadBalancer`：在 `NodePort` 的基础上，借助 cloud provider 创建一个外部负载均衡器，并将请求转发到 `<NodeIP>:NodePort`。
- `ExternalName`：把集群外部的服务引入到集群内部来，在集群内部直接使用。没有任何类型代理被创建，这只有 Kubernetes 1.7 或更高版本的 `kube-dns` 才支持。

![image-20230510233012571](https://img.onmicrosoft.cn/k8s/202305102330596.png)

## VIP 和 Service 代理

在 Kubernetes 集群中，每个 Node 运行一个 `kube-proxy` 进程。`kube-proxy` 负责为 `Service` 实现了一种 VIP（虚拟 IP）的形式，而不是 `ExternalName` 的形式。在 Kubernetes v1.0 版本，代理完全在 userspace。在 Kubernetes v1.1 版本，新增了 iptables 代理，但并不是默认的运行模式。从 Kubernetes v1.2 起，默认就是 iptables 代理。在 Kubernetes v1.8.0-beta.0 中，添加了 ipvs 代理。在 Kubernetes 1.14 版本开始默认使用 ipvs 代理。

在 Kubernetes v1.0 版本， `Service` 是 “4层”（TCP/UDP over IP）概念。在 Kubernetes v1.1 版本，新增了 `Ingress API`（beta 版），用来表示 “7层”（HTTP）服务。

**为何不使用 round-robin DNS？**

- DNS 有缓存，DNS 服务器可能会缓存 `Service` 的 IP 地址，这样会导致 `Service` 的负载均衡失效。

## 代理模式的分类

### Ⅰ、userspace 代理模式

![image-20230510233027052](https://img.onmicrosoft.cn/k8s/202305102330083.png)

### Ⅱ、iptables 代理模式

![image-20230510233036136](https://img.onmicrosoft.cn/k8s/202305102330162.png)

### Ⅲ、ipvs 代理模式

这种模式，`kube-proxy` 会监视 Kubernetes `Service` 对象和 `Endpoints`，调用 `netlink` 接口以相应地创建 ipvs 规则并定期与 Kubernetes `Service` 对象和 `Endpoints` 对象同步 ipvs 规则，以确保 ipvs 状态与期望一致。访问服务时，流量将被重定向到其中一个后端 `Pod`。与 iptables 类似，ipvs 于 netfilter 的 hook 功能，但使用哈希表作为底层数据结构并在内核空间中工作。这意味着 ipvs 可以更快地重定向流量，并且在同步代理规则时具有更好的性能。此外，ipvs 为负载均衡算法提供了更多选项，例如：

- `rr`：轮询调度
- `lc`：最小连接数
- `dh`：目标哈希
- `sh`：源哈希
- `sed`：最短期望延迟
- `nq`：不排队调度

> 注意: ipvs 模式假定在运行 kube-proxy 之前在节点上都已经安装了 IPVS 内核模块. 当 kube-proxy 以 ipvs 代理模式启动时, kube-proxy 将验证节点上是否安装了 IPVS 模块, 如果未安装, 则 kube-proxy 将回退到 iptables 模式.
> 
> ipvs 模式现在已经成为了一个标准.

![image-20230510233050609](https://img.onmicrosoft.cn/k8s/202305102330634.png)

## ClusterIP

![image-20230511000740533](https://img.onmicrosoft.cn/k8s/202305110007586.png)

- 集群内部访问的 IP

`clusterIP` 主要在每个 node 节点使用 iptables / `ipvs`，将发向 `clusterIP` 对应端口的数据，转发到 `kube-proxy` 中。然后 `kube-proxy` 自己内部实现有负载均衡的方法，并可以查询到这个 `service` 下对应 `pod` 的地址和端口，进而把数据转发给对应的 `pod` 的地址和端口。

![image-20230510233109568](https://img.onmicrosoft.cn/k8s/202305102331593.png)

为了实现图上的功能，主要需要以下几个组件的协同工作：

- `apiserver`：用户通过 `kubectl` 命令向 `apiserver` 发送创建 `service` 的命令，`apiserver` 接收到请求后将数据存储到 `etcd` 中。
- `kube-proxy`：Kubernetes 的每个节点中都有一个叫做 `kube-proxy` 的进程，这个进程负责感知 `service`、`pod` 的变化，并将变化的信息写入本地的 iptables / `ipvs` 规则中。
- `iptables` / `ipvs`：使用 `NAT` 等技术将 `virtualIP` 的流量转至 `endpoint` 中。

创建 `myapp-deploy.yaml` 文件

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deploy
  namespace: default
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
      release: stabel
  template:
    metadata:
      labels:
        app: myapp
        release: stabel
        env: test
    spec:
      containers:
      - name: myapp
        image: wangyanglinux/myapp:v2
        imagePullPolicy: IfNotPresent
        ports:
        - name: http
          containerPort: 80
```

创建 `Service` 信息

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp
  namespace: default
spec:
  type: ClusterIP
  selector:
    app: myapp
    release: stabel
  ports:
  - name: http
    port: 80
    targetPort: 80
```

![image-20230511041224191](https://img.onmicrosoft.cn/k8s/202305110412248.png)

## Headless Service

有时不需要或不想要负载均衡，以及单独的 `Service IP`。遇到这种情况，可以通过指定 `ClusterIP(spec.clusterIP)` 的值为 “None” 来创建 `Headless Service`。这类 `Service` 并不会分配 `Cluster IP`，`kube-proxy` 不会处理它们，而且平台也不会为它们进行负载均衡和路由。

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-headless
  namespace: default
spec:
  selector:
    app: myapp
  clusterIP: "None"
  ports:
  - port: 80
    targetPort: 80

[root@k8s-master mainfests]# dig -t A myapp-headless.default.svc.cluster.local. @10.96.0.10
```

> 举个例子，假设您有一个 StatefulSet，需要每个 Pod 的 IP 地址，您可以使用 Headless Service 以便查询每个 Pod 的 DNS 记录，而无需使用 Service 的负载均衡功能。
>
> 另一个例子是，如果您使用外部负载均衡器，您可能希望将请求直接路由到每个 `Pod` 的 `IP`，而不是通过 `Service` 的 `Cluster IP`。这时你可以使用 `Headless Service`，而不需要为每个 `Pod` 配置单独的负载均衡规则。
> 
> 要查询 `Headless Service` 中每个 `Pod` 的 `DNS` 记录，可以使用以下命令：
> 
> ```
> dig -t A <headless-service-name>.<namespace>.svc.cluster.local
> ```
> 
> 例如，在上述示例中，要查询 `myapp-headless` 服务中的每个 `Pod` 的 `DNS` 记录，可以使用以下命令：
> 
> ```
> dig -t A myapp-headless.default.svc.cluster.local
> ```
> 

## NodePort

![image-20230511035239296](https://img.onmicrosoft.cn/k8s/202305110352373.png)

![image-20230511035431576](https://img.onmicrosoft.cn/k8s/202305110354610.png)

`nodePort` 的原理在于在 node 上开了一个端口，将向该端口的流量导入到 `kube-proxy`，然后由 `kube-proxy` 进一步到给对应的 `pod`。

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp
  namespace: default
spec:
  type: NodePort
  selector:
    app: myapp
    release: stabel
  ports:
  - name: http
    port: 80
    targetPort: 80
```

## LoadBalancer

![image-20230511035706076](https://img.onmicrosoft.cn/k8s/202305110357120.png)

`loadBalancer` 和 `nodePort` 其实是同一种方式。区别在于 `loadBalancer` 比 `nodePort` 多了一步，就是可以调用 `cloud provider` 去创建 `LB` 来向节点导流。

![image-20230510233122608](https://img.onmicrosoft.cn/k8s/202305102331631.png)

## ExternalName

![image-20230511035826303](https://img.onmicrosoft.cn/k8s/202305110358336.png)

这种类型的 Service 通过返回 CNAME 和它的值，可以将服务映射到 externalName 字段的内容（例如：hub.atguigu.com）。ExternalName Service 是 Service 的特例，它没有 selector，也没有定义任何的端口和 Endpoint。相反的，对于运行在集群外部的服务，它通过返回该外部服务的别名这种方式来提供服务。

```yaml
kind: Service
apiVersion: v1
metadata:
  name: my-service-1
  namespace: default
spec:
  type: ExternalName
  externalName: hub.atguigu.com
```

当查询主机 `my-service.defalut.svc.cluster.local`（`SVC_NAME.NAMESPACE.svc.cluster.local`）时，集群的 DNS 服务将返回一个值 `my.database.example.com` 的 `CNAME` 记录。访问这个服务的工作方式和其他的相同，唯一不同的是重定向发生在 DNS 层，而且不会进行代理或转发。


- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes Service.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/1%E3%80%81Kubernetes%20Service.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/1%E3%80%81Kubernetes%20Service.pdf" type="application/pdf" width="100%" height="500" />


## Kubernetes | Ingress 资料信息

Ingress-Nginx github 地址：https://github.com/kubernetes/ingress-nginx

Ingress-Nginx 官方网站：https://kubernetes.github.io/ingress-nginx/

![image-20230511043020092](https://img.onmicrosoft.cn/k8s/202305110430138.png)

![image-20230511043050051](https://img.onmicrosoft.cn/k8s/202305110430086.png)

## 部署 Ingress-Nginx

```bash
kubectl apply -f mandatory.yaml
kubectl apply -f service-nodeport.yaml
```

![image-20230511044013564](https://img.onmicrosoft.cn/k8s/202305110440337.png)

## Ingress HTTP 代理访问

deployment、Service、Ingress Yaml 文件

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: nginx-dm
spec:
  replicas: 2
  template:
    metadata:
      labels:
        name: nginx
    spec:
      containers:
      - name: nginx
        image: wangyanglinux/myapp:v1
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-svc
spec:
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
  selector:
    name: nginx
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nginx-test
spec:
  rules:
  - host: www1.atguigu.com
    http:
      paths:
      - path: /
        backend:
          serviceName: nginx-svc
          servicePort: 80
```

![image-20230511044348195](https://img.onmicrosoft.cn/k8s/202305110443227.png)

## Ingress HTTPS 代理访问

创建证书，以及 cert 存储方式

```bash
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=nginxsvc/O=nginxsvc"
kubectl create secret tls tls-secret --key tls.key --cert tls.crt
```

deployment、Service、Ingress Yaml 文件

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nginx-test
spec:
  tls:
  - hosts:
    - foo.bar.com
    secretName: tls-secret
  rules:
  - host: foo.bar.com
    http:
      paths:
      - path: /
        backend:
          serviceName: nginx-svc
          servicePort: 80
```

## Nginx 进行 BasicAuth

```bash
yum -y install httpd
htpasswd -c auth foo # 在这里会让输入你的密码
kubectl create secret generic basic-auth --from-file=auth
```

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: ingress-with-auth
  annotations:
    nginx.ingress.kubernetes.io/auth-type: basic
    nginx.ingress.kubernetes.io/auth-secret: basic-auth
    nginx.ingress.kubernetes.io/auth-realm: 'Authentication Required - foo'
spec:
  rules:
  - host: foo2.bar.com
    http:
      paths:
      - path: /
        backend:
          serviceName: nginx-svc
          servicePort: 80
```

## Nginx 进行重写

| 名称                                                  | 描述                                                         | 值   |
| ----------------------------------------------------- | ------------------------------------------------------------ | ---- |
| http://nginx.ingress.kubernetes.io/rewrite-target     | 必须重定向流量的目标URI                                      | 串   |
| http://nginx.ingress.kubernetes.io/ssl-redirect       | 指示位置部分是否仅可访问SSL（当Ingress包含证书时，默认为True） | 布尔 |
| http://nginx.ingress.kubernetes.io/force-ssl-redirect | 即使Ingress未启用TLS，也强制重定向到HTTPS                    | 布尔 |
| http://nginx.ingress.kubernetes.io/app-root           | 定义Controller必须重定向的应用程序根，如果它在'/'上下文中    | 串   |
| http://nginx.ingress.kubernetes.io/use-regex          | 指示Ingress上定义的路径是否使用正则表达式                    | 布尔 |

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: nginx-test
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: <http://foo.bar.com:31795/hostname.html>
spec:
  rules:
  - host: foo10.bar.com
    http:
      paths:
      - path: /
        backend:
          serviceName: nginx-svc
          servicePort: 80
```

![image-20230511045609965](https://img.onmicrosoft.cn/k8s/202305110456993.png)

- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes Service.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/1%E3%80%81Kubernetes%20Service.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/2%E3%80%81Kubernetes%20Ingress.pdf" type="application/pdf" width="100%" height="500" />


#### 参考资料
- https://blog.csdn.net/cloudUncle/article/details/82937342
- https://blog.csdn.net/cloudUncle/article/details/82940598