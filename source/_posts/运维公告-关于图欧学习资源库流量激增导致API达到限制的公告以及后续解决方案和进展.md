---
title: 运维公告 | 关于图欧学习资源库流量激增导致API达到限制的公告以及后续解决方案和进展
tags: [运维]
description: 关于图欧学习资源库流量激增导致API达到限制的公告以及后续解决方案和进展
date: 2022-07-19 13:15:33
categories: [A置顶文章, 公共] 
cover: https://img.onmicrosoft.cn/2022-07-19/5.jpg
---

- 图欧学习资源库：https://tuostudy.com

您跳转到此页面的原因是学习资源库流量太大了，导致API访问次数激增，达到上游服务限制，无法访问...

我们已经尝试修复，相关的工作已经在进行中，预计6天左右完成全部部署。

以下是图欧君发布公告：

> 由于流量太大，网站暂时崩溃了
> 
> 进不去网站的你们可以先来我网站的备份网盘上浏览与学习（网站上的内容这个网盘里面都有，只不过分类是按照学习的人群来分类（比如中小学四六级考研专区等等都分类好了），但是资源比我网站上的资源更加多更加全）
> 
> 然后网站大佬还在修复中，如果修复成功了会第一时间通知大家，你们可以进群关注最新的进展


- 图欧学习资源库·阿里盘：https://tuo.icodeq.com/alipan

- 图欧学习资源库·百度盘：https://tuo.icodeq.com/baidu

- 图欧学习资源库·夸克盘：https://tuo.icodeq.com/quark

{% gallery %}
![](https://img.onmicrosoft.cn/2022-07-19/1.webp)
![](https://img.onmicrosoft.cn/2022-07-19/2.webp)
![](https://img.onmicrosoft.cn/2022-07-19/13.jpg)
{% endgallery %}


原文：https://t.bilibili.com/684456378054475810?spm_id_from=333.999.0.0

-------------------------------------

本文将实时更新本次事件的相关进展和后续处理情况。

### `2022-07-17`

- 图欧君正式发布介绍视频

### `2022-07-17~2022-07-18`

- 图欧君视频上热门，资源站流量变大，陆续收到相关的告警信息，此时的架构为 `replit` 教育版服务器架构

- 平均在线人数20人左右

### `2022-07-18`

- 流量翻倍，网站速度变慢....

- 时不时收到监控的告警信息

### `2022-07-18 中午`

- 意识到可能当前的架构并不能支撑即将到来的用户群体

- 采购了一台服务器并进行了相关的迁移工作

### `2022-07-18 下午`

- 监控平台：https://uptime.icodeq.com/status/admin

- 平均在线人数超过100人...

- 持续告警....短短几小时发布几十条 `网站掉线/网站上线` 消息

- 经过排查后得知是访问次数过多，达到了 `微软的单账户API次数限制` ，见下图

![](https://img.onmicrosoft.cn/2022-07-19/6.png)

### `2022-07-18 晚上`

- 开始着手备份账号，使用迁移平台开始拷贝到备份账号上

![](https://img.onmicrosoft.cn/2022-07-19/7.jpg)

- 见图 `Never run` 即本次迁移命令

- 此时的监控告警仍在继续....几小时发出几十条告警消息

- 网站同时在线人数到达 200 人..

### `2022-07-19 早上`

- 单个账号迁移工作已完成 `1/3`

![](https://img.onmicrosoft.cn/2022-07-19/8.png)

### `2022-07-19 早上`

- 新启用10个备份账号，准备开发一套自动切换账号的脚本（技术栈确定为 `Python`）

![](https://img.onmicrosoft.cn/2022-07-19/9.png)

### `2022-07-19 中午`

- 因流量过大导致的崩溃时间过长，故发布此公告，在资源站发出报错后即跳转至本公告。

- 此时资源站在线人数突破 `300` 人（运维压力好大（（

![](https://img.onmicrosoft.cn/2022-07-19/10.png)

### `2022-07-19 中午 14:30`

- 由 `Python FastAPI` 框架搭建的账号自动热切换脚本编写完成，等待账号存储数据迁移完成后即可上线

![](https://img.onmicrosoft.cn/2022-07-19/11.png)

### `2022-07-19 下午 17:40`

- 经过近 `20` 个小时的迁移，首批数据备份已完成近一半（`910GB` / `1.92TB`）
- 首次迁移完成后，将由主备份账号向 `10` 个子账号进行数据分发，全部分发完成后即可恢复业务...
- 预计迁移业务已完成 `1/5`，符合预期进展

![12](https://img.onmicrosoft.cn/2022-07-19/12.png)

### `2022-07-19 晚上`

- `Vercel` 账号达到限制额度，将网站全站转移到小号上面
- 开始想办法节约资源，首先想到的是通过将静态文件托管至cdn.其余文件依旧走vercel的流量
- 但是这样仍然无法解决流量过大的问题，并且此时的后备账号资源仍然不可用
- 故尝试启用 `tuostatic.onmicrosoft.cn` 域名来进行cdn缓存源站，减少服务器压力
- 并将错误页面由本文章修改至cdn临时缓存站
- 但是原域名并不想舍弃，并且这个域名太长了不大好记
- 故尝试使用 `ClientWorker` 来进行路由获取 
  - https://clientworker.js.org/
- 请了 [Cyfan](https://blog.cyfan.top)大佬来适配站点
- 由于时间太晚暂时启用 `tuostatic.onmicrosoft.cn` 来应对夜间的流量
  - （流量此时变小

![12](https://img.onmicrosoft.cn/2022-07-19/14.png)

### `2022-07-20 上午`

- 由 `ClientWorker` 驱动的主站正式部署，并且增加一个 `cdn源站`，实现异地双热备份。
- 此时已经将全部的流量压力导至自用 `CDN` `vercel` 仅作为 `ClientWorker` 安装媒介使用
- 修改相关源码，使其适配 `ClientWorker 2.3.2`，修复无法预览文件的 `BUG`
- 正式上线 `tuostudy.onmicrosoft.cn` CDN 域名，用来缓存用到的静态资源，并将 `tuostatic.onmicrosoft.cn` 重定向到新域名
- 首批迁移工作已经进行 `80%`，此时服务器压力大幅度改善，网站在线率提升

![12](https://img.onmicrosoft.cn/2022-07-19/15.png)

### `2022-07-21`

- `CDN` 日流量稳定在 `1G` 左右，修复相应的文件头，添加防盗链，并且不影响播放器的直接调用
- 继续跟进 `ClientWorker` 版本，更新版本至 `2.4.0` 和 `2.4.2`
  - 反馈BUG，大佬修复了 `post` 无 `body` 的 bug
  - 修复一些情况卡死的bug
  - 网站流量逐渐稳定，在线人数180人左右，服务器压力稳定

### `2022-07-22`
- 主账号下载次数达到限制，原因为止，切换至备用账号一段时间后切回主号，恢复正常
  - 暂时暂停第二波账号备份，为主账号的再次崩溃做预案
- 为 `CDN` 账号增加可用资源，购入流量资源做储备
- 再次跟进 `ClientWorker` 版本，更新版本至 `2.5.2` 期间出现网页假死的情况，紧急退回至 `2.4.2`，暂时恢复正常
  - 刷新相关 `CDN` 缓存，经过排查确实是升级 `ClientWorker` 版本导致的 BUG

### `2022-07-23`
- 跟进 `ClientWorker` 版本，至 `2.6.0` ，反馈配置不兼容问题后跟进至 `2.6.1`
- 更新相关的文件，增加缓存，此时的网页内容访问再次提升，存于浏览器 `15分钟` CDN缓存，优化用户访问体验
- 网站速度得到进一步提示，见如下视频：

<video id="p1" width="100%" height="100%" controls=""  data-poster="https://img.onmicrosoft.cn/2022-07-19/5.jpg">
  <source src="https://img.onmicrosoft.cn/2022-07-19/fast.mp4" type="video/mp4" />
</video>

<script>
(
function () {
const p_1 = new Plyr('#p1');

}
)()
</script>

### `本文实时更新，更多进展第一时间同步`