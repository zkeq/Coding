---
title: Kubernetes | 安全 - Safety
tags:
  - Kubernetes
categories:
  - Kubernetes
description: 本文介绍了 Kubernetes 中的 RBAC（基于角色的访问控制）和准入控制。RBAC 可以通过 Role 和 ClusterRole 定义权限，通过 RoleBinding 和 ClusterRoleBinding 将权限授予用户或用户组。准入控制是 API Server 的插件集合，通过添加不同的插件，实现额外的准入控制规则。
cover: https://img.onmicrosoft.cn/2023-04-20/eb4cf60047dee8c0c2786e95fc0f96ca0f2e666b.jpeg
date: 2023-05-14 03:18:50
---

```
Code_016---2019 尚硅谷Kubernetes教程
链接: https://pan.baidu.com/s/1iYMUBaCq5fq6i4nnMD8V-Q
提取码: zkeq
```

## 1. 机制说明

Kubernetes 作为一个分布式集群的管理工具，保证集群的安全性是其一个重要的任务。API Server 是集群内部
各个组件通信的中介，也是外部控制的入口。所以 Kubernetes 的安全机制基本就是围绕保护 API Server 来设计
的。Kubernetes 使用了认证（Authentication）、鉴权（Authorization）、准入控制（Admission
Control）三步来保证API Server的安全.

![image-20230514032200228](https://img.onmicrosoft.cn/k8s/202305140322255.png)

- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes 集群安全 - 机制说明.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/1%E3%80%81Kubernetes%20%E9%9B%86%E7%BE%A4%E5%AE%89%E5%85%A8%20-%20%E6%9C%BA%E5%88%B6%E8%AF%B4%E6%98%8E.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/1%E3%80%81Kubernetes%20%E9%9B%86%E7%BE%A4%E5%AE%89%E5%85%A8%20-%20%E6%9C%BA%E5%88%B6%E8%AF%B4%E6%98%8E.pdf" type="application/pdf" width="100%" height="500" />

## 2. Authentication

### HTTP Token 认证

- 通过一个 Token 来识别合法用户。

  `HTTP Token` 的认证是用一个很长的特殊编码方式的并且难以被模仿的字符串 - Token 来表达客户的一种方式。Token 是一个很长的很复杂的字符串，每一个 Token 对应一个用户名存储在 API Server 能访问的文件中。当客户端发起 API 调用请求时，需要在 HTTP Header 里放入 Token。

### HTTP Base 认证

- 通过 用户名+密码 的方式认证。
- `用户名+：+密码` 用 `BASE64` 算法进行编码后的字符串放在 `HTTP` `Request` 中的 `Heather` `Authorization` 域里发送给服务端，服务端收到后进行编码，获取用户名及密码。

### 最严格的 HTTPS 证书认证

- 基于 CA 根证书签名的客户端身份认证方式

---

### Ⅰ、HTTPS 证书认证

![image-20230514032630151](https://img.onmicrosoft.cn/k8s/202305140326173.png)

- 最严格的 HTTPS 证书认证：基于 CA 根证书签名的客户端身份认证方式

### Ⅱ、需要认证的节点

![image-20230514032643870](https://img.onmicrosoft.cn/k8s/202305140326885.png)

#### 两种类型

- Kubernetes 组件对 API Server 的访问：`kubectl`、`Controller Manager`、`Scheduler`、`kubelet`、`kube-proxy`

- Kubernetes 管理的 Pod 对容器的访问：Pod（dashboard 也是以 Pod 形式运行）

#### 安全性说明

- `Controller Manager`、`Scheduler` 与 `API Server` 在同一台机器，所以直接使用 `API Server` 的非安全端口访问，`--insecure-bind-address=127.0.0.1`。

- `kubectl`、`kubelet`、`kube-proxy` 访问 `API Server` 就都需要证书进行 `HTTPS` 双向认证。

#### 证书颁发

- 手动签发：通过 `k8s` 集群的跟 `ca` 进行签发 `HTTPS` 证书

- 自动签发：`kubelet` 首次访问 `API Server` 时，使用 `token` 做认证，通过后，`Controller Manager` 会为 `kubelet` 生成一个证书，以后的访问都是用证书做认证了。

### Ⅲ、kubeconfig

`kubeconfig` 文件包含集群参数（CA 证书、`API Server` 地址）、客户端参数（上面生成的证书和私钥）、集群 context 信息（集群名称、用户名）。Kubernetes 组件通过启动时指定不同的 `kubeconfig` 文件可以切换到不同的集群。

### Ⅳ、ServiceAccount

`Pod` 中的容器访问 `API Server`。因为 `Pod` 的创建、销毁是动态的，所以要为它手动生成证书就不可行了。`Kubenetes` 使用了 `Service Account` 解决 `Pod` 访问 `API Server` 的认证问题。

### Ⅴ、Secret 与 SA 的关系

`Kubernetes` 设计了一种资源对象叫做 `Secret`，分为两类，一种是用于 `ServiceAccount` 的 `service-account-token`，另一种是用于保存用户自定义保密信息的 `Opaque`。`ServiceAccount` 中用到包含三个部分：`Token`、`ca.crt`、`namespace`。

- `token` 是使用 `API Server` 私钥签名的 `JWT`。用于访问 `API Server` `时，Server` 端认证。
- `ca.crt`，根证书。用于 `Client` 端验证 `API Server` 发送的证书。
- `namespace`，标识这个 `service-account-token` 的作用域名空间。

> Json web token(JWT),是为了在网络应用环境间传递声明而执行的一种基于 JSON 的开放标准 (RFC 7519). 该token杯设计为紧凑且安全的, 特别适用于分布式站点的单点登录(SSO)场景,JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息, 以便从资源服务器获取资源, 也可以增加一些额外的其他业务逻辑所必需的声明信息, 该 token 也可直接被用于认证, 也可被加密

```bash
kubectl get secret --all-namespaces
kubectl describe secret default-token-5gm9r --namespace=kube-system
```

默认情况下，每个 `namespace` 都会有一个 `ServiceAccount`，如果 `Pod` 在创建时没有指定 `ServiceAccount`，就会使用 `Pod` 所属的 `namespace` 的 `ServiceAccount`。

> 默认挂载目录: `/run/secrets/kubernetes.io/serivceaccount`

### 总结

![image-20230514032742555](https://img.onmicrosoft.cn/k8s/202305140327582.png)

- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes 集群安全 - 认证.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/2%E3%80%81Kubernetes%20%E9%9B%86%E7%BE%A4%E5%AE%89%E5%85%A8%20-%20%E8%AE%A4%E8%AF%81.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/2%E3%80%81Kubernetes%20%E9%9B%86%E7%BE%A4%E5%AE%89%E5%85%A8%20-%20%E8%AE%A4%E8%AF%81.pdf" type="application/pdf" width="100%" height="500" />

## 3. Authorization

上面认证过程，只是确认通信的双方都确认了对方是可信的，可以相互通信。而鉴权是确定请求方有哪些资源的权限。API Server 目前支持以下几种授权策略 （通过 API Server 的启动参数 `--authorization-mode` 设置）

- `AlwaysDeny`：表示拒绝所有的请求，一般用于测试
- `AlwaysAllow`：允许接收所有请求，如果集群不需要授权流程，则可以采用该策略
- `ABAC`（Attribute-Based Access Control）：基于属性的访问控制，表示使用用户配置的授权规则对用户请求进行匹配和控制
- `Webbook`：通过调用外部 REST 服务对用户进行授权
- `RBAC`（Role-Based Access Control）：基于角色的访问控制，现行默认规则

### RBAC 授权模式

RBAC（基于角色的访问控制）是 Kubernetes 1.5 中引入的新功能，现在已经成为默认标准。相对于其他访问控制方式，拥有以下优势：

- 对集群中的资源和非资源均拥有完整的覆盖
- 整个 RBAC 完全由几个 API 对象完成，同其他 API 对象一样，可以用 `kubectl` 或 API 进行操作
- 可以在运行时进行调整，无需重启 API Server

### RBAC 的 API 资源对象说明

RBAC 引入了 4 个新的顶级资源对象：`Role`、`ClusterRole`、`RoleBinding`、`ClusterRoleBinding`，4 种对象类型均可以通过 `kubectl` 与 API 操作。

![image-20230514040041935](https://img.onmicrosoft.cn/k8s/202305140400978.png)

需要注意的是 Kubenetes 并不会提供用户管理，那么 `User`、`Group`、`ServiceAccount` 指定的用户又是从哪里来的呢？ Kubenetes 组件（`kubectl`、`kube-proxy`）或是其他自定义的用户在向 CA 申请证书时，需要提供一个证书请求文件。

```json
{
  "CN": "admin",
  "hosts": [],
  "key": {
    "algo": "rsa",
    "size": 2048
  },
  "names": [
    {
      "C": "CN",
      "ST": "HangZhou",
      "L": "XS",
      "O": "system:masters",
      "OU": "System"
    }
  ]
}

```

API Server 会把客户端证书的 `CN` 字段作为 `User`，把 `names.O` 字段作为 `Group`。

`kubelet` 使用 TLS Bootstaping 认证时，API Server 可以使用 Bootstrap Tokens 或者 Token authentication file 验证 `-token`，无论哪一种，Kubenetes 都会为 token 绑定一个默认的 `User` 和 `Group`。

Pod 使用 ServiceAccount 认证时，`service-account-token` 中的 JWT 会保存 `User` 信息。

有了用户信息，再创建一对角色/角色绑定(集群角色/集群角色绑定)资源对象，就可以完成权限绑定了。

### Role and ClusterRole

在 RBAC API 中，`Role` 表示一组规则权限，权限只会增加（累加权限），不存在一个资源一开始就有很多权限而通过 RBAC 对其进行减少的操作；`Role` 可以定义在一个 namespace 中，如果想要跨 namespace 则可以创建 `ClusterRole`。

```yaml
kind: Role
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]

```

`ClusterRole` 具有与 `Role` 相同的权限角色控制能力，不同的是 `ClusterRole` 是集群级别的，`ClusterRole` 可以用于：

- 集群级别的资源控制（例如 node 访问权限）
- 非资源型 endpoints（例如 `/healthz` 访问）
- 所有命名空间资源控制（例如 pods）

```yaml
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  # "namespace" omitted since ClusterRoles are not namespaced
  name: secret-reader
rules:
- apiGroups: [""]
  resources: ["secrets"]
  verbs: ["get", "watch", "list"]

```

| 授权模式 | 描述 |
| --- | --- |
| AlwaysDeny | 表示拒绝所有的请求，一般用于测试 |
| AlwaysAllow | 允许接收所有请求，如果集群不需要授权流程，则可以采用该策略 |
| ABAC | 基于属性的访问控制，表示使用用户配置的授权规则对用户请求进行匹配和控制 |
| Webbook | 通过调用外部 REST 服务对用户进行授权 |
| RBAC | 基于角色的访问控制，现行默认规则 |

![image-20230514040338194](https://img.onmicrosoft.cn/k8s/202305140403246.png)

## RoleBinding 和 ClusterRoleBinding

RoleBinding 可以将角色中定义的权限授予用户或用户组，RoleBinding 包含一组权限列表(`subjects`)，权限列表中包含有不同形式的待授予权限资源类型(`users`, `groups`, or `service accounts`)；RoleBinding 同样包含对被 Bind 的 Role 引用；RoleBinding 适用于某个命名空间内授权，而 ClusterRoleBinding 适用于集群范围内的授权。

将 `default` 命名空间的 `pod-reader` Role 授予 `jane` 用户，此后 `jane` 用户在 `default` 命名空间中将具有 `pod-reader` 的权限。

```yaml
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io

```

RoleBinding 同样可以引用 ClusterRole 来对当前 namespace 内用户、用户组或 ServiceAccount 进行授权，这种操作允许集群管理员在整个集群内定义一些通用的 ClusterRole，然后在不同的 namespace 中使用 RoleBinding 来引用。

例如，以下 RoleBinding 引用了一个 ClusterRole，这个 ClusterRole 具有整个集群内对 `secrets` 的访问权限；但是其授权用户 `dave` 只能访问 `development` 空间中的 `secrets`(因为 RoleBinding 定义在 `development` 命名空间)。

```yaml
# This role binding allows "dave" to read secrets in the "development" namespace.
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: read-secrets
  namespace: development # This only grants permissions within the "development" namespace.
subjects:
- kind: User
  name: dave
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: secret-reader
  apiGroup: rbac.authorization.k8s.io

```

使用 ClusterRoleBinding 可以对整个集群中的所有命名空间资源权限进行授权；以下 ClusterRoleBinding 样例展示了授权 `manager` 组内所有用户在全部命名空间中对 `secrets` 进行访问。

```yaml
# This cluster role binding allows anyone in the "manager" group to read secrets in any namespace.
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  name: read-secrets-global
subjects:
- kind: Group
  name: manager
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: secret-reader
  apiGroup: rbac.authorization.k8s.io

```

## `Resources`

Kubernetes 集群内一些资源一般以其名称字符串来表示，这些字符串一般会在 API 的 URL 地址中出现；同时某些资源也会包含子资源，例如 logs 资源就属于 pods 的子资源，API 中 URL 样例如下。

```bash
GET /api/v1/namespaces/{namespace}/pods/{name}/log

```

如果要在 RBAC 授权模型中控制这些子资源的访问权限，可以通过 `/` 分隔符来实现，以下是一个定义 pods 资源 logs 访问权限的 Role 定义样例。

```yaml
kind: Role
apiVersion: rbac.authorization.k8s.io/v1beta1
metadata:
  namespace: default
  name: pod-and-pod-logs-reader
rules:
- apiGroups: [""]
  resources: ["pods/log"]
  verbs: ["get", "list"]

```

## `to Subjects`

RoleBinding 和 ClusterRoleBinding 可以将 Role 绑定到 `Subjects`；`Subjects` 可以是 `groups`、`users` 或者 `service accounts`。

`Subjects` 中 `Users` 使用字符串表示，它可以是一个普通的名字字符串，如 `alice`；也可以是 email 格式的邮箱地址，如 `wangyanglinux@163.com`；甚至是一组字符串形式的数字 ID 。但是 `Users` 的前缀 `system:` 是系统保留的，集群管理员应该确保普通用户不会使用这个前缀格式。

`Groups` 书写格式与 `Users` 相同，都为一个字符串，并且没有特定的格式要求；同样 `system:` 前缀为系统保留。

![image-20230514041233196](../../../../../../Library/Application%20Support/typora-user-images/image-20230514041233196.png)

## 实践：创建一个用户只能管理 `dev` 空间

```bash
{
    "CN": "devuser",
    "hosts": [],
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "ST": "BeiJing",
            "L": "BeiJing",
            "O": "k8s",
            "OU": "System"
        }
    ]
}

# 下载证书生成工具
wget https://pkg.cfssl.org/R1.2/cfssl_linux-amd64
mv cfssl_linux-amd64 /usr/local/bin/cfssl
wget https://pkg.cfssl.org/R1.2/cfssljson_linux-amd64
mv cfssljson_linux-amd64 /usr/local/bin/cfssljson

wget https://pkg.cfssl.org/R1.2/cfssl-certinfo_linux-amd64
mv cfssl-certinfo_linux-amd64 /usr/local/bin/cfssl-certinfo

cfssl gencert -ca=ca.crt -ca-key=ca.key -profile=kubernetes /root/devuser-csr.json | cfssljson -bare devuser

# 设置集群参数
export KUBE_APISERVER="https://172.20.0.113:6443"
kubectl config set-cluster kubernetes \
  --certificate-authority=/etc/kubernetes/ssl/ca.pem \
  --embed-certs=true \
  --server=${KUBE_APISERVER} \
  --kubeconfig=devuser.kubeconfig

# 设置客户端认证参数
kubectl config set-credentials devuser \
    --client-certificate=/etc/kubernetes/ssl/devuser.pem \
    --client-key=/etc/kubernetes/ssl/devuser-key.pem \
    --embed-certs=true \
    --kubeconfig=devuser.kubeconfig

# 设置上下文参数
kubectl config set-context kubernetes \
  --cluster=kubernetes \
  --user=devuser \
  --namespace=dev \
  --kubeconfig=devuser.kubeconfig

# 设置默认上下文
kubectl config use-context kubernetes --kubeconfig=devuser.kubeconfig

cp -f ./devuser.kubeconfig /root/.kube/config

kubectl create rolebinding devuser-admin-binding --clusterrole=admin --user=devuser --namespace=dev

```

- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes 集群安全 - 鉴权.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/3%E3%80%81Kubernetes%20%E9%9B%86%E7%BE%A4%E5%AE%89%E5%85%A8%20-%20%E9%89%B4%E6%9D%83.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/3%E3%80%81Kubernetes%20%E9%9B%86%E7%BE%A4%E5%AE%89%E5%85%A8%20-%20%E9%89%B4%E6%9D%83.pdf" type="application/pdf" width="100%" height="500" />

## 4. 准入控制

准入控制是 API Server 的插件集合，通过添加不同的插件，实现额外的准入控制规则。甚至于 API Server 的一些主要的功能都需要通过 Admission Controllers 实现，比如 `ServiceAccount`。

官方文档上有一份针对不同版本的准入控制器推荐列表，其中最新的 1.14 的推荐列表是：

```
NamespaceLifecycle, LimitRanger, ServiceAccount, DefaultStorageClass, DefaultTolerationSeconds, MutatingAdmissionWebhook, ValidatingAdmissionWebhook, ResourceQuota

```

列举几个插件的功能：

- `NamespaceLifecycle`： 防止在不存在的 namespace 上创建对象，防止删除系统预置 namespace，删除 namespace 时，连带删除它的所有资源对象。
- `LimitRanger`：确保请求的资源不会超过资源所在 Namespace 的 `LimitRange` 的限制。
- `ServiceAccount`： 实现了自动化添加 `ServiceAccount`。
- `ResourceQuota`：确保请求的资源不会超过资源的 `ResourceQuota` 限制。


- 若无法正常加载, 请点击查看 PDF 网页版本: [Kubernetes 集群安全 - 准入控制.pdf](https://service.ezviz.com/mobile/download/viewer?file=https://media.onmicrosoft.cn/k8s/4%E3%80%81Kubernetes%20%E9%9B%86%E7%BE%A4%E5%AE%89%E5%85%A8%20-%20%E5%87%86%E5%85%A5%E6%8E%A7%E5%88%B6.pdf)

<embed src="https://media.onmicrosoft.cn/k8s/4%E3%80%81Kubernetes%20%E9%9B%86%E7%BE%A4%E5%AE%89%E5%85%A8%20-%20%E5%87%86%E5%85%A5%E6%8E%A7%E5%88%B6.pdf" type="application/pdf" width="100%" height="500" />