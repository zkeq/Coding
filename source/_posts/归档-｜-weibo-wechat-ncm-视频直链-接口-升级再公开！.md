---
title: 归档 ｜ weibo/wechat/ncm 视频直链 接口 升级再公开！
tags:
  - 归档
categories:
  - 归档
description: 微博用户视频 / 微信公共平台 / 网易 MV 三个接口已稳定运行 10 个月，现开放使用。
cover: https://img.onmicrosoft.cn/2023-01-20/1.png
date: 2023-01-20 01:35:25
---

### 微博直链解析接口

> 本接口已收录入夏柔公益：https://api.aa1.cn/doc/weibo-mrv1.html

说明：

此接口可以解析微博所有用户上传的视频直链，已稳定10个月，现开放使用。

微博用户最多可上传10GB视频，并且带宽很大，无防盗链，可直接外链引用！

地址：

https://hub.onmicrosoft.cn/public/video/weibo

交互性文档地址：

https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/weibo_public_video_weibo_get

示例地址：

```python
https://hub.onmicrosoft.cn/public/video/weibo?uid=3908615569&cursor=4696609415234742&hd=2
https://hub.onmicrosoft.cn/public/video/weibo?uid=3908615569&cursor=4696609415234742&hd=2&raw=true
https://hub.onmicrosoft.cn/public/video/weibo?uid=1239246050&cursor=4720854242429953&hd=0
https://hub.onmicrosoft.cn/public/video/weibo?uid=1239246050&cursor=4720854242429953&hd=0&raw=true
https://hub.onmicrosoft.cn/public/video/weibo?uid=3908615569&cursor=4729250207239479&hd=2
https://hub.onmicrosoft.cn/public/video/weibo?uid=3908615569&cursor=4729250207239479&hd=2&raw=true
```

参数：

| 参数     | 类型   | 说明                                | 必填 | 默认值  |
| -------- | ------ | ----------------------------------- | ---- | ------- |
| uid      | `int`  | 微博用户 ID                         | 是   |         |
| cursor   | `int`  | 微博视频 ID                         | 是   |         |
| hd       | `int`  | 清晰度 最高清 为 `0` 第二高清为 `1` | 否   | `0`     |
| raw      | `bool` | 是否直接跳转到真实地址              | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值）          | 否   | `False` |

参数图解：

- 上传地址：https://weibo.com/upload/channel

![weibo](https://img.onmicrosoft.cn/2022-3-2/3.png)

返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

返回体示例：

```json
{
    "video_url":"https://f.video.weibocdn.com/o0/lrg2OfPVlx081qpi6vfO0104120bUTyy0E050.mp4?label=mp4_1080p&template=1920x1080.25.0&media_id=4844870163169385&tp=8x8A3El:YTkl0eM8&us=0&ori=1&bf=2&ot=h&lp=000044fILH&ps=mZ6WB&uid=hIkrKuE&ab=9298-g4,8224-g0,7397-g1,8143-g0,8013-g0&Expires=1674123584&ssig=5LJ%2BI79DJV&KID=unistore,video",
    "detail":{
        "uid":7613352035,
        "cursor":4844875365224282,
        "hd":0,
        "cache":"缓存中已存在该视频, 直接返回",
        "cache_time":2651,
        "info":"在请求中添加参数 raw=true 可以直接跳转到视频地址(永久链接，可直接外链引用)"
    }
}
```


### 微信直链解析接口

> 本接口已收录入夏柔公益：https://api.aa1.cn/doc/weixin-mrv1.html

说明：

此接口可以解析微信公共平台所有用户上传的视频直链，已稳定10个月，现开放使用。

微信公共平台最多可上传1H的视频，并且带宽很大，无防盗链，可直接外链引用！

地址：

https://hub.onmicrosoft.cn/public/video/wechat

交互性文档地址：

https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/wechat_public_video_wechat_get

示例地址：

```python
https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2281672366986412045
https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2281672366986412045&raw=true
https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2281669760981450761
https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2281669760981450761&raw=true
```

参数：

| 参数     | 类型   | 说明                                | 必填 | 默认值  |
| -------- | ------ | ----------------------------------- | ---- | ------- |
| wxv      | `int`  | 微博用户 ID                         | 是   |         |
| hd       | `int`  | 清晰度 最高清 为 `0` 第二高清为 `1` | 否   | `0`     |
| raw      | `bool` | 是否直接跳转到真实地址              | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值）          | 否   | `False` |

参数图解：

- 上传地址：https://mp.weixin.qq.com

![wechat](https://img.onmicrosoft.cn/2022-3-2/2.png)

返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

返回体示例：

```json
{
    "video_url":"https://mpvideo.qpic.cn/0bc3vqaasaaa3yal5wyvkfrfblgdbgwaacia.f10002.mp4?dis_k=e7df684c1fc3b4c52386cf6d6639c621&dis_t=1674117856&play_scene=10400",
    "detail":{
        "wxv":"wxv_2281669760981450761",
        "hd":0,
        "cache":"缓存中已存在该视频, 直接返回",
        "cache_time":228,
        "info":"在请求中添加参数 raw=true 可以直接跳转到视频地址(永久链接，可直接外链引用)"
    }
}
```


### 网易云MV直链解析接口

说明：

此接口可以解析网易云官网大部分 MV （非会员可看的都可），已稳定10个月，现开放使用。

清晰度为最高(1080)，和官网最高清晰度同一个画质，并且带宽很大，无防盗链，可直接外链引用！

地址：

https://hub.onmicrosoft.cn/public/video/ncm

交互性文档地址：

https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/ncm_public_video_ncm_get

示例地址：

```python
https://hub.onmicrosoft.cn/public/video/ncm?vid=10882549
https://hub.onmicrosoft.cn/public/video/ncm?vid=10882549&raw=true
```

参数：

| 参数     | 类型   | 说明                       | 必填 | 默认值  |
| -------- | ------ | -------------------------- | ---- | ------- |
| vid      | `int`  | 网易云MV ID                | 是   |         |
| raw      | `bool` | 是否直接跳转到真实地址     | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值） | 否   | `False` |

参数图解：

![ncm](https://img.onmicrosoft.cn/2022-3-2/10.png)

返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

返回体示例：

```json
{
    "video_url":"https://vodkgeyttp8.vod.126.net/cloudmusic/1ea3/core/bba6/71d7147fe191e517fc80124fc34541fc.mp4?wsSecret=e36f985fadcb44aabf353decc712352e&wsTime=1674121640",
    "detail":{
        "vid":10882549,
        "cache":"缓存中已存在该视频, 直接返回",
        "cache_time":5966,
        "info":"在请求中添加参数 raw=true 可以直接跳转到视频地址(永久链接，可直接外链引用)"
    }
}
```

