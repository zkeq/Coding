---
title: 归档 | ICT 竞赛 陪跑 笔记
tags: [归档]
description: 好久没学习新东西了，没什么事做，正巧老师说有个竞赛，就花了几天听了几节课，陪跑了一下（
date: 2022-11-27 21:25:02
categories: 归档
cover: https://img.onmicrosoft.cn/2022-11-27/2.png
---

> 好久没学习新东西了，没什么事做，正巧老师说有个竞赛，就花了几天听了几节课，陪跑了一下（

今天初赛比赛完了，怎么说呢，有一半的题好像都不会————

就当作是学习了一下吧，学到了一些东西，比如一些基础的知识...

![1](https://img.onmicrosoft.cn/2022-11-27/1.jpg)

最近几个月做了新东西来着，也不是什么都没有干啦，就是一忙起来就没心情更博客了

（在加上口罩原因 弄的很自闭，这些天玩游戏倒是玩的不少....现在也是到家了 接下来一段时间好好提升自己技术才对！

### 云计算HCIA精品课程_4.0

#### 01 云计算的例子跟使用

1. 生活中云计算案例
2. 购买 ECS 申请服务器过程

#### 02 云计算的概念

##### 云计算优势

1. 按需自助服务

   客户可根据自身的需求自行购买服务

2. 无处不在的网络接入

   需要网络才可真正使用所购买的服务

3. 资源池化

   满足用户的按需自助需求；可屏蔽底层资源的差异性

4. 快速弹性伸缩

   资源的使用与释放都是快速实现的，满足用户对资源的不同需求

5. 可计量服务

   可以准确的根据客户的业务进行自动控制和优化资源配置

##### 云计算的定义

![image-20221120184522140](https://img.onmicrosoft.cn/event/ICT.assets/image-20221120184522140.png)

![image-20221120184837239](https://img.onmicrosoft.cn/event/ICT.assets/image-20221120184837239.png)
÷
![image-20221120184945960](https://img.onmicrosoft.cn/event/ICT.assets/image-20221120184945960.png)

#### 03 云计算的起源和发展

![image-20221120185802394](https://img.onmicrosoft.cn/event/ICT.assets/image-20221120185802394.png)

![image-20221120190431042](https://img.onmicrosoft.cn/event/ICT.assets/image-20221120190431042.png)

##### 云计算的发展史

分为互联网发展史和计算的发展史

串行计算：指由一个CPU来负责解决计算问题

并行计算：指同时使用多个计算资源解决计算问题，主要可快速解决大型且复杂的计算问题

分布式计算：将一个需要巨大的计算能力才能解决的问题分成多个小部分，将小部分分配给多个计算处理，最后综合得到结果

网格计算：结合本地和互联网上可用的计算资源形成一个逻辑的整体，来共同解决计算需求

云计算：以上一种或多种计算方式的结合

#### 04 云计算的模式

![image-20221120191832185](https://img.onmicrosoft.cn/event/ICT.assets/image-20221120191832185.png)

##### 云计算的部署模式

私有云：企业利用自有或租用的基础设施资源自建的云、提供给企业内部使用，比如华为 Stack

公有云：云计算提供商在各地搭建云平台，将资源形成各种产品出租给公共使用，比如阿里 腾讯 华为云

社区云/行业云：为特定社区或行业所构建的共享基础设施的云，比如深圳大学城云计算平台

混合云：由两种或两种以上的部署模式组成的云，比如淘宝双11/12306

![image-20221120192626091](https://img.onmicrosoft.cn/event/ICT.assets/image-20221120192626091.png)

![image-20221120192648867](https://img.onmicrosoft.cn/event/ICT.assets/image-20221120192648867.png)

##### 云计算的服务模式

- Laas：基础设施即服务，指将基础设施以服务的形式提供用户使用，比如弹性云服务器、云硬盘等
- Paas：平台即服务，指将平台以服务的形式提供给用户使用，比如新浪云中的云应用SAE
- Saas：软件即服务，指将已经开发好的应用以服务的形式直接提供给用户使用，比如云速建站
- ![](https://img.onmicrosoft.cn/event/ICT.assets/image-20221123135001421.png)
- ABD TRUE

![image-20221123135101546](https://img.onmicrosoft.cn/event/ICT.assets/image-20221123135101546.png)

#### 05 虚拟化的定义

虚拟化简介

![image-20221123141054028](https://img.onmicrosoft.cn/event/ICT.assets/image-20221123141054028.png)

##### 虚拟机是什么？

和普通电脑一样，ECS也是虚拟机 VMware 虚拟机

##### 为什么需要虚拟化

（1）APP：OS：Phy = 1:1:1 ，资源利用率低

（2）增加APP的部署，会导致不同应用之间抢占资源的问题

解决方式：

在一台主机上部署多个虚拟客户机并安装OS，每个OS安装一个APP，这样就解决了上述问题，即APP：OS：Phy = n：n：1.

##### 虚拟化前与虚拟化后

![image-20221126083950271](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126083950271.png)

- 但虚拟机的资源必须是来源于某个服务器

##### 虚拟化的定义

- 虚拟化技术的实现是在系统中加入一个**虚拟化层（逻辑层）**，将下层的资源**（计算、存储或网络）**`抽象成另一种形式的资源`。提供给上层应用使用

#### 06 虚拟化的发展史

##### 虚拟化的好处

- 提高硬件利用率
- 降低耗能，绿色节能
- 提高IT运维效率，系统管理人员减少
- 操作系统和硬件解藕

##### 计算虚拟化发展史

![image-20221126085212908](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126085212908.png)

##### 不同厂商的虚拟化产品

- XEN、KVM、VMware-VSphere、微软-Hyper-V、华为FusionCompute

##### 计算虚拟化中的重要概念

![image-20221126085544159](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126085544159.png)

##### 虚拟机与VMM

![image-20221126085816454](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126085816454.png)

##### VMM的功能

![image-20221126085847216](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126085847216.png)

##### 虚拟化层（VMM）的功能

（1）虚拟资源：VMM将服务器的物理资源抽象转化形成虚拟资源并提供给虚拟机使用，虚拟机使用过程中认为本身是完全占据整个服务器的资源

（2）虚拟环境的调度：可以实现对多个虚拟机的并行访问

（3）提供管理接口：VMM提供管理接口，使得用户可以实现对虚拟机的创建删除迁移等操作

#### 07 虚拟化的特点

- 分区
- 隔离
- 封装
- 独立

##### 虚拟化的特点

（1）分区：在同一个物理服务器上可同时运行多个虚拟机

（2）隔离：在同个服务器上运行的虚拟机互相隔离，互不影响

（3）封装：虚拟机以文件的形式存在，可通过移动文件的方式实现对虚拟机的迁移

（4）相对于硬件独立：对虚拟机进行迁移时，无需对物理服务器做更改

![image-20221126091742450](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126091742450.png)

##### 计算虚拟化的分类

- 根据 Hypervisor所在位置分成I型虚拟化和 II 型虚拟化
  - I型虚拟化：Hypervisor直接安装在物理机上，Hypervisor 的实现方式就是一个特殊定制的操作系统，比如 Xen 和 VMware Vsphere
  - II型虚拟化：物理机首先安装常规的操作系统，比如 Redhat、Windows、Ubantu 等，Hypervisor 作为操作系统上的一个程序模块运行，比如 VMware woerkstation、KVM 都是属于这种类型

对比：

- I 型虚拟化对硬件方面有单独优化，其性能比 II 型高
- II 型虚拟化可支持虚拟化嵌套，也就是说可在虚拟机基础之上再运行虚拟机

![image-20221126092054835](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126092054835.png)

##### 虚拟化嵌套

![image-20221126092740207](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126092740207.png)

#### 08 计算虚拟化-1

##### Ring 等级

![image-20221126093302246](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126093302246.png)

- Ring 0:应用于操作系统内核，具备最高的权限
- Ring 1&2：应用于操作系统的服务，权限次于Ring 0
- Ring 3:应用于用户应用程序，权限最低

##### 用户态和内核态

![image-20221126093738758](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126093738758.png)

- 为了减少有限资源的访问和使用冲突，对不同的操作赋予不同的执行等级，对于 Ring 0 和 Ring 3 保护等级，分别对应于内核态和用户态
- 运行于用户态的程序想要使用操作系统提供的服务程序完成工作时，但因本身权限不足，需要通过用户态切换到内核态，也就是系统调用的过程

##### 系统调用

![image-20221126094150972](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126094150972.png)

##### CPU指令

![image-20221126094250254](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126094250254.png)

- 特权指令：具备特权权限的指令，比如清内存，置时钟等，需要在内核态（Ring 0）下才能执行
- 用户指令：权限时最低的，也称之为非特权指令，在用户态和内核态下都可以执行的指令，也就是说 Ring0 - Ring3 都可以执行

注意事项：为了防止用户程序使用特权指令，用户态下只能使用非特权指令，内核态下可以使用全部指令。

#### 09 计算虚拟化-2

##### CPU虚拟化问题

![image-20221126094834964](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126094834964.png)

##### 特权解除 & 陷入模拟

- 实现虚拟化之后，为了保证虚拟机的正常运行，将虚拟机操作系统对应的 Ring 0 等级降为 RIng 1 或 RIng2，该过程称为特权解除
- 当虚拟机需要执行相关的特权指令时，但因为本身等级的权限不够，会将该指令发送给虚拟化层接受，虚拟化层会模拟相关的操作并返回结果给虚拟机，该过程称为陷入模拟。

![image-20221126095256949](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126095256949.png)

##### CPU 虚拟化漏洞

- 敏感指令：指可以访问系统关键资源的指令，绝大多数的敏感指令是属于特权指令，即存在极少数的敏感指令是属于非特权指令（用户指令），也称之为临界指令
- 补充：在虚拟化场景中，存在 19/21条 临界指令。

#### 10 计算虚拟化-3

![image-20221126123802159](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126123802159.png)

- 虚拟机内核 虚拟化软件 物理机内核

##### CPU虚拟化的实现方式

（1）全虚拟化：当一个进程要调用CPU指令时，Guest OS 认为自己是运行在硬件之上，则直接对虚拟CPU进行调用，但是它无法执行，封装转换为操作系统内核的指令调用，进而通过内核对真正CPU对指令调用，中间会消耗很多资源，性能比较差

（2）半虚拟化：GUest OS的内核经过修改，虚拟机明确知道自己运行在虚拟化环境中，在进行系统调用时，会直接通过主机的内核直接对CPU进行调用，中间减少了虚拟化封装解码等操作，性能大大提升，但对于虚拟机操作系统的内核开发难度较大

![image-20221126124551276](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126124551276.png)

（3）硬件辅助虚拟化：引入新的指令和运行模式（非ROOT模式和ROOT模式），将 RIng 0 赋予 Guest OS 的内核，将 RIng -1 赋予给主机内核，当进行系统调用时，Guest OS 会调用 Ring 0 的特权指令，Ring 0 上的特权指令是假的，被主机的内核捕获之后进而转换为 RIng -1 所能下发的特权指令，这些过程都是由硬件 CPU 处理的，前提是需要CPU支持硬件辅助虚拟化技术

比如 Intel 的（VT-x）、AMD（AMD-V）等

##### 内存虚拟化

![image-20221126125257910](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126125257910.png)

- 内存虚拟化的核心，引入内存映射技术，使得虚拟机认为自己拥有真正的内存资源。

#### 11 计算虚拟化-4

##### I/O虚拟化

（1）全虚拟化：通过 VMM 为虚拟机模拟出与真实设备类似的 IO 设备，当虚拟机对 IO 设备发起 IO 请求时，VMM 截获虚拟机下发的 IO 访问请求，再由 VMM 将真实的访问请求发送到物理设备进行处理。

优点：适用性好，无需对虚拟机操作系统做任何修改

缺点：性能较差，由于VMM需要实时监控虚拟机的IO请求和模拟操作，会消耗主机的资源

（2）半虚拟化：通过建立一个特权级别的虚拟机，用户虚拟机需要安装驱动程序，当需要访问 IO 设备时，虚拟机会通过前端驱动程序把IO请求发送给部署在特权虚拟机上的后端驱动，由后端驱动访问真实的设备驱动完成IO请求

优点：性能好，虚拟机知道自己运行在虚拟化环境中，会自动将IO请求发送给特权虚拟机，减少VMM的损耗

缺点：开发难度大，需要修改操作系统内核使得虚拟机知道对自身IO请求的处理方式

（3）IO 透传：直接将IO设备驱动安装在虚拟机操作系统中，不需要对操作系统做任何更改即可使用

优点：性能好

缺点：成本高，需要特殊硬件支持

![image-20221126125439722](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126125439722.png)

纯虚拟化

![image-20221126125603320](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126125603320.png)

半虚拟化

![image-20221126130035784](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126130035784.png)

IO 透传

![image-20221126130440173](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126130440173.png)

##### KVM I/O操作流程 -默认

![image-20221126130603835](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126130603835.png)

##### KVM I/O操作流程 - Vritio

![image-20221126130741399](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126130741399-9439266.png)

##### KVM 的 IO 处理方式

（1）默认：IO 的请求路径冗长，对于资源的损耗较多

（2）Virtio：IO 请求路径简短，减少了资源的损耗，需要安装特定的 Virtio 驱动

##### 云计算和虚拟化

![image-20221126131039952](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126131039952.png)

- 云计算是可以离开虚拟化的（直接出租实体机）

（1）云计算是属于一种模式，虚拟化是属于一种技术

（2）虚拟化作为搭建云计算平台中技术之一，不是必须的

#### 12 XEN与KVM

##### 主流计算虚拟化技术

![image-20221126131349036](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126131349036.png)

##### Xen 和 KVM

![image-20221126131433036](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126131433036.png)

- XEN 的架构
- XEN（VMM）：位于操作系统和硬件之间，负责为上层运行的操作系统内核提供虚拟化的硬件资源，负责管理和分配这些资源，同时确保上层虚拟机之间的相互隔离。
- Domain U：运行在非特权级别的虚拟机，也称之为用户虚拟机，可以存在多个。
- DOmain 0: XEN 架构下第一台启动的、运行在特权级别的虚拟机，具备一下功能
- （1）直接访问 IO 硬件资源，且给 Domain U 提供虚拟的 IO 设备，包括虚拟硬盘和网络接入等；
- （2）负责管理其他运行在非特权级别的虚拟机
- （3）运行后端驱动和设备驱动，结合 Domain U 的前端驱动来实现 XEN 架构下的 IO 设备的半虚拟化。

Liunx 部署了 KVM 模块之后，会增加三种运行模式

Guest Mode ：此模式主要是指虚拟机，包括虚拟机的 CPU 、 内存 、磁盘等 虚拟设备，该模式被置于一种受限等 CPU 模式下运行

User Mode ：用户空间，主要是运行 Qemu，它用来为虚拟机提供 IO 资源

Kernel Mode ： 内核空间，可真正的访问底层的硬件资源

##### KVM 的体系架构

qemu-kvm：实现 IO 设备的模拟

kvm.ko：内核模块，实现 CPU 和内存的虚拟化

Libvirt：KVM 的管理工具，除了管理 KVM 还能管理 XEN、Hyper-V 等

virsh：KVM 的命令后工具

virt-manager：KVM的图形化管理工具

virt-viewer：GUI 连接程序，连接到已配置好的虚拟机

virt-install：通过命令行的方式，实现对虚拟机的创建工具

##### 为什么要引入 `Libvirt`？

由于 Hypervisor 种类众多，每个 Hypervisor 都有其自身独特的管理工具，参数复杂，难易使用程度不同，没有统一的编程接口实现对他们的管理，有了 Libvirt 之后，向下可对接各种 Hypervisor ，向上可实现各种语言的 API，提供了统一的管理功能

![image-20221126132921547](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126132921547.png)

##### 为什么 XEN 开源社区活跃程序逐渐降低？

1、Citrix 公司将其虚拟化战略中心转移到 桌面

2、2011年，以 IBM，红帽，惠普和英特尔为首成立开放虚拟化联盟，加速KVM推广

3、2014年 XEN 被爆出3个安全漏洞，导致多家 laaS 提供商遭受不同时间停机影响

#### 21 虚拟化中的网络

##### 传统的物理网络

![image-20221126153057911](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126153057911.png)

##### 物理网络包含的设备

![image-20221126153247621](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126153247621.png)

虚拟化中二层交换机的作用

![image-20221126153314926](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126153314926.png)

##### 虚拟化中二层交换机的作用

- 主要是实现流量的接入，按照接入流量的类型，接入交换机可分为管理交换机、存储交换机、业务交换机

![image-20221126153536856](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126153536856.png)

##### 虚拟化中三层交换机的作用

- 在虚拟化网络架构中，会采用高端的三层交换机作为整个网络的核心，所有的流量对应网段的默认网关会配置在该交换机中

![image-20221126153900703](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126153900703.png)

##### 虚拟化中路由器的作用

- 实现数据中心内网与外部网络之间的通信，可实现路由转发和 NAT （网络地址转换）等

![image-20221126154034971](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126154034971.png)

##### 虚拟化中物理网卡的作用

- 物理服务器使用自身的物理网卡连接到网络中，当虚拟机要实现与外部之间的通信，也是需要经过物理网卡

#### 22 网络的基础知识

![image-20221126154345065](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126154345065.png)

##### 交换机的工作原理：

二层交换机接收到以太网帧，将其源 MAC 于接收端口的对于关系写入到MAC表，作为以后的二层转发依据，如果 MAC 表中已有相同的表项，那么就刷新该表项的老化时间。

##### 广播：

![image-20221126155049554](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126155049554.png)

##### 单播：

![image-20221126161155723](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126161155723.png)

##### 二层交换的过程

![image-20221126161243623](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126161243623.png)

#### ![image-20221126161342822](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126161342822.png)

#### 23 虚拟化网络架构

![image-20221126161622522](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126161622522.png)

- 虚拟交换机只能实现二层的功能

![image-20221126174225038](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126174225038.png)

##### 桥接和 NAT

![image-20221126174305406](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126174305406.png)

##### 虚拟交换机

![image-20221126174336834](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126174336834.png)

##### 分布式虚拟交换机

![image-20221126174406810](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126174406810.png)

虚拟交换机

- 原理跟物理交换机一样，能够实现虚拟机之间的通信，甚至也能够实现虚拟机与主机外的网络互通
- 开源的虚拟交换机称之为 OVS 华为针对与 OVS 所进行的二次开发形成称之为 EVS 桥接和 NAT 是可以实现虚拟机访问外部网络的方式

分布式虚拟交换机

- 可以实现将多个物理服务器上的虚拟交换机进行关联，实现统一管理配置操作

#### 27 RAID技术

![image-20221126175143518](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126175143518.png)

- 容量大、性能好、数据保护

##### RAID的数据组织方式

![image-20221126175412417](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126175412417.png)

##### RAID 的校验方式（异或校验）

![image-20221126175618076](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126175618076.png)

##### RAID 的几种状态

![image-20221126175718248](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126175718248.png)

- 具备数据备份功能的 RAID 创建成功后，属于正常工作的状态，当成员盘故障或者掉线，此时RAID 是属于降级的状态，此时会触发数据重构；当成员故障的个数超过允许承受的，此时RAID是属于失效的状态

##### RAID 0 的实现方式

![image-20221126175928060](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126175928060.png)

##### RAID 0 数据丢失

![image-20221126180031431](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126180031431.png)

##### RAID 0

- 数据可并行写入，但是不提供冗余保护

##### RAID 1 数据写入

![image-20221126180129608](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126180129608.png)

##### RAID 1

- 数据多份写入，可提供冗余保护的功能

##### RAID 3 原理

![image-20221126180246017](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126180246017.png)

##### RAID 3

- 通过异或校验实现冗余保护的功能，对于校验盘存在访问瓶颈问题

##### RAID 5 原理

![image-20221126180439642](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126180439642.png)

##### RAID 5 数据恢复

![image-20221126180511352](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126180511352.png)

- RAID 5 又叫 螺旋式校验

##### RAID 5

每块硬盘既是成员盘也是校验盘，解决了 RAID 3 的问题，可允许坏1块

##### RAID 组合 - RAID 10

![image-20221126180743840](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126180743840.png)

##### RAID 10

- 先做 RAID 1 再将两个 RAID 1 组合成 RAID 0 ，可允许组间各坏一块硬盘

##### RAID 6 介绍

![image-20221126181021298](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126181021298.png)

##### RAID 6 P + Q 的工作原理（不了解了）

![image-20221126181107214](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126181107214.png)

##### RAID6 DP 的工作原理

![image-20221126181141989](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126181141989.png)

##### RAID 6

- 可以同时故障两块硬盘  

##### 热备盘

![image-20221126181434098](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126181434098.png)

##### 预拷贝

![image-20221126181554253](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126181554253.png)

##### 重构

![image-20221126181644685](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126181644685.png)

##### RAID 与 LUN 的关系

![image-20221126181714730](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126181714730.png)

物理卷：指多个硬盘组合形成的 RAID 组的别    称

逻辑卷：在物理卷的基础上划分的存储空间，对接给主机使用的基本块设备

##### 创建 LUN 的过程

![image-20221126181932232](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126181932232.png)

##### Pool & Volume & LUN

![image-20221126182214670](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126182214670.png)

##### 集中式存储

![image-20221126182331174](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126182331174.png)

##### 集中式存储的类型

![image-20221126182351547](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126182351547.png)

##### 分布式存储

![image-20221126182912722](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126182912722.png)

##### 副本机制

![image-20221126182938753](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126182938753.png)

##### 文件系统

![image-20221126183107370](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126183107370.png)

##### 文件系统的功能

![image-20221126183126170](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126183126170.png)

### HCIA-Cloud Service V3.0 云服务工程师在线课程

#### 1.云计算基础

##### 1.1.1 云计算基础知识

- 【私有云 共有云 混合云】

###### 云计算的服务模式

![image-20221126183609825](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126183609825.png)

###### 云计算的价值

![image-20221126183721605](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126183721605.png)

###### 云计算的8个通用点

![image-20221126183827258](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126183827258.png)

##### 1.2.1 计算类技术

###### 什么是虚拟化

![image-20221126184046387](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126184046387.png)

![image-20221126184147545](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126184147545.png)

###### 虚拟化与云计算

- 虚拟化是实现云计算的核心技术，但不等同于云计算。云计算的内容维度要比虚拟化大得多。

###### 虚拟化的特点

![image-20221126184417831](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126184417831.png)

###### 计算虚拟化的重要概念

![image-20221126184503390](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126184503390.png)

###### 计算资源就在我们身边

![image-20221126184713835](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126184713835.png)

###### 计算在云计算中的服务形态

![image-20221126184731725](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126184731725.png)

###### 什么是容器

![image-20221126184813752](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126184813752.png)

###### 容器技术发展历史

![image-20221126184930224](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126184930224.png)

- 1979 2008 历史重要节点 2013 最重要 进入大众视野

###### 容器和虚拟化架构对比

![image-20221126185051164](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126185051164.png)

###### 容器和虚拟机的区别

![image-20221126185217074](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126185217074.png)

###### 容器在云计算中的服务形态

![image-20221126185316653](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126185316653.png)

##### 1.2.2 网络类技术

###### 传统网络的基本概念

![image-20221126185550493](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126185550493.png)

###### 传统网络包含的设备

![image-20221126190039820](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190039820.png)

###### 二层交换机的作用

![image-20221126190112144](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190112144.png)

###### 三层交换机的作用

![image-20221126190140219](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190140219.png)

###### 网卡的作用

![image-20221126190222654](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190222654.png)

###### 虚拟网络的基本概念

![image-20221126190241776](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190241776.png)

###### 桥接和 NAT 的作用

![image-20221126190330919](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190330919.png)

- NAT 有 IP 地址的转换

###### 虚拟交换机的作用

![image-20221126190430581](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190430581.png)

##### 1.2.3 存储类技术

###### 主流存储类型

![image-20221126190704789](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190704789.png)

###### 块存储简介

![image-20221126190813195](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190813195.png)

###### 对象存储简介

![image-20221126190930633](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126190930633.png)

###### 企业存储的发展过程

![image-20221126191025372](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126191025372.png)

###### 什么是分布式存储技术

![image-20221126191122785](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126191122785.png)

#### 2.华为云介绍

##### 2.1.1 华为云介绍&华为云应用场景

###### 全球化的连接和服务

![image-20221126191555858](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126191555858.png)

![image-20221126191613692](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126191613692.png)

![image-20221126191636380](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126191636380.png)

![image-20221126201955518](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126201955518.png)

![image-20221126202044228](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126202044228.png)

![image-20221126202054963](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126202054963.png)

![image-20221126203227989](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126203227989.png)

![image-20221126203320366](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126203320366.png)

![image-20221126203406916](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126203406916.png)

![image-20221126205436359](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126205436359.png)

![image-20221126205518336](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126205518336.png)

![image-20221126205819448](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126205819448.png)

![image-20221126210049010](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126210049010.png)

![image-20221126210135985](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126210135985.png)

#### 3.华为云操作入门

#### 4.计算云服务

![image-20221126210825369](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126210825369.png)

![image-20221126210852510](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126210852510.png)

![image-20221126210926878](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126210926878.png)

![image-20221126210935990](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126210935990.png)

![image-20221126210945182](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126210945182.png)

![image-20221126210954717](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126210954717.png)

![image-20221126211002730](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126211002730.png)

![image-20221126211009833](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126211009833.png)

![image-20221126211022619](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126211022619.png)

![image-20221126211030615](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126211030615.png)

![image-20221126211152499](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126211152499.png)

#### 5.网络云服务

![image-20221126213605544](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126213605544.png)

![image-20221126213746015](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126213746015.png)

![image-20221126213758675](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126213758675.png)

![image-20221126213839844](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126213839844.png)

![image-20221126213908206](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126213908206.png)

![image-20221126213922691](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126213922691.png)

![image-20221126213944313](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126213944313.png)

![image-20221126213958999](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126213958999.png)

![image-20221126214033857](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126214033857.png)

![image-20221126214051109](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126214051109.png)

![image-20221126214106280](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126214106280.png)

![image-20221126214128592](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126214128592.png)

![image-20221126220611842](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126220611842.png)

![image-20221126220722461](https://img.onmicrosoft.cn/event/ICT.assets/image-20221126220722461.png)

![image-20221127014733961](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127014733961.png)

![image-20221127014746269](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127014746269.png)

![image-20221127014817109](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127014817109.png)

![image-20221127014839151](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127014839151.png)

![image-20221127014900515](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127014900515.png)

![image-20221127014938518](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127014938518.png)

![image-20221127015832920](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127015832920.png)

![image-20221127015850924](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127015850924.png)

![image-20221127015906411](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127015906411.png)

![image-20221127015927008](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127015927008.png)

![image-20221127015938221](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127015938221.png)

![image-20221127015952259](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127015952259.png)

![image-20221127020008958](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127020008958.png)

![image-20221127020029732](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127020029732.png)

![image-20221127020611288](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127020611288.png)

![image-20221127020636103](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127020636103.png)

![image-20221127020702820](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127020702820.png)

![image-20221127020755732](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127020755732.png)

![image-20221127020821973](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127020821973.png)

![image-20221127020919324](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127020919324.png)

#### 6.存储云服务

![image-20221127021349775](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127021349775.png)

![image-20221127021523249](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127021523249.png)

![image-20221127021605635](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127021605635.png)

![image-20221127021629664](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127021629664.png)

![image-20221127021646109](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127021646109.png)

![image-20221127021702880](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127021702880.png)

![image-20221127021718060](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127021718060.png)

![image-20221127021840993](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127021840993.png)

![image-20221127021903385](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127021903385.png)

![image-20221127022138190](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022138190.png)

![image-20221127022201117](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022201117.png)

![image-20221127022220417](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022220417.png)

![image-20221127022239177](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022239177.png)

![image-20221127022251471](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022251471.png)

![image-20221127022301242](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022301242.png)

![image-20221127022530238](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022530238.png)

![image-20221127022719579](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022719579.png)

![image-20221127022742372](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022742372.png)

![image-20221127022755679](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022755679.png)

![image-20221127022812883](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022812883.png)

![image-20221127022824599](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127022824599.png)

![image-20221127023041424](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127023041424.png)

![image-20221127023122967](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127023122967.png)

#### 7.更多云服务

![image-20221127023408194](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127023408194.png)

![image-20221127080429743](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080429743.png)

![image-20221127080441311](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080441311.png)

![image-20221127080458945](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080458945.png)

![image-20221127080513027](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080513027.png)

![image-20221127080525958](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080525958.png)

![image-20221127080607912](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080607912.png)

![image-20221127080620033](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080620033.png)

![image-20221127080629004](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080629004.png)

![image-20221127080641424](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080641424.png)

![image-20221127080734618](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080734618.png)

![image-20221127080746605](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080746605.png)

![image-20221127080755675](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080755675.png)

![image-20221127080806456](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080806456.png)

![image-20221127080815842](https://img.onmicrosoft.cn/event/ICT.assets/image-20221127080815842.png)