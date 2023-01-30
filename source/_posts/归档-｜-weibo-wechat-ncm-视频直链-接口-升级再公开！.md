---
title: 归档 ｜ weibo wechat ncm douyin haokan kuaishou pipix 视频直链 接口 升级再公开！
tags: [归档]
categories: [A置顶文章, 归档]
description: 微博用户视频 / 微信公共平台 / 网易 MV / 抖音 / 百度好看 / 快手 / 皮皮虾  三个接口已稳定运行 10 个月，现开放使用。
cover: https://img.onmicrosoft.cn/2023-01-20/1.png
date: 2023-01-20 01:35:25
---

<meta name="referrer" content="no-referrer">


### 微博直链解析接口

> 本接口已收录入夏柔公益：https://api.aa1.cn/doc/weibo-mrv1.html

<video id="p1" width="100%" height="100%" controls=""  data-poster="https://img.onmicrosoft.cn/2023-01-20/1.png">
  <source src="https://hub.onmicrosoft.cn/public/video/weibo?uid=3908615569&cursor=4729250207239479&hd=2&raw=true" type="video/mp4" />
</video>

#### 说明：

- 此接口可以解析微博所有用户上传的视频直链，已稳定10个月，现开放使用。

- 微博用户最多可上传10GB视频，并且带宽很大，无防盗链，可直接外链引用！

#### 地址：

- https://hub.onmicrosoft.cn/public/video/weibo

#### 交互性文档地址：

- https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/weibo_public_video_weibo_get

#### 示例地址：

```python
https://hub.onmicrosoft.cn/public/video/weibo?uid=3908615569&cursor=4696609415234742&hd=2
https://hub.onmicrosoft.cn/public/video/weibo?uid=3908615569&cursor=4696609415234742&hd=2&raw=true
https://hub.onmicrosoft.cn/public/video/weibo?uid=1239246050&cursor=4720854242429953&hd=0
https://hub.onmicrosoft.cn/public/video/weibo?uid=1239246050&cursor=4720854242429953&hd=0&raw=true
https://hub.onmicrosoft.cn/public/video/weibo?uid=3908615569&cursor=4729250207239479&hd=2
https://hub.onmicrosoft.cn/public/video/weibo?uid=3908615569&cursor=4729250207239479&hd=2&raw=true
```

#### 参数：

| 参数     | 类型   | 说明                                | 必填 | 默认值  |
| -------- | ------ | ----------------------------------- | ---- | ------- |
| uid      | `int`  | 微博用户 ID                         | 是   |         |
| cursor   | `int`  | 微博视频 ID                         | 是   |         |
| hd       | `int`  | 清晰度 最高清 为 `0` 第二高清为 `1` | 否   | `0`     |
| raw      | `bool` | 是否直接跳转到真实地址              | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值）          | 否   | `False` |

#### 参数图解：

- 上传地址：https://weibo.com/upload/channel

![weibo](https://img.onmicrosoft.cn/2022-3-2/3.png)

#### 返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

#### 返回体示例：

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

<video id="p2" width="100%" height="100%" controls=""  data-poster="https://img.onmicrosoft.cn/2023-01-20/1.png">
  <source src="https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2281669760981450761&raw=true" type="video/mp4" />
</video>

#### 说明：

- 此接口可以解析微信公共平台所有用户上传的视频直链，已稳定10个月，现开放使用。

- 微信公共平台最多可上传1H的视频，并且带宽很大，无防盗链，可直接外链引用！

#### 地址：

- https://hub.onmicrosoft.cn/public/video/wechat

#### 交互性文档地址：

- https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/wechat_public_video_wechat_get

#### 示例地址：

```python
https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2281672366986412045
https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2281672366986412045&raw=true
https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2281669760981450761
https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2281669760981450761&raw=true
```

#### 参数：

| 参数     | 类型   | 说明                                | 必填 | 默认值  |
| -------- | ------ | ----------------------------------- | ---- | ------- |
| wxv      | `int`  | 微博用户 ID                         | 是   |         |
| hd       | `int`  | 清晰度 最高清 为 `0` 第二高清为 `1` | 否   | `0`     |
| raw      | `bool` | 是否直接跳转到真实地址              | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值）          | 否   | `False` |

#### 参数图解：

- 上传地址：https://mp.weixin.qq.com

![wechat](https://img.onmicrosoft.cn/2022-3-2/2.png)

#### 返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

#### 返回体示例：

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

<video id="p3" width="100%" height="100%" controls=""  data-poster="https://img.onmicrosoft.cn/2023-01-20/1.png">
  <source src="https://hub.onmicrosoft.cn/public/video/ncm?vid=10882549&raw=true" type="video/mp4" />
</video>

#### 说明：

- 此接口可以解析网易云官网大部分 MV （非会员可看的都可），已稳定10个月，现开放使用。

- 清晰度为最高(1080)，和官网最高清晰度同一个画质，并且带宽很大，无防盗链，可直接外链引用！

#### 地址：

- https://hub.onmicrosoft.cn/public/video/ncm

#### 交互性文档地址：

- https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/ncm_public_video_ncm_get

#### 示例地址：

```python
https://hub.onmicrosoft.cn/public/video/ncm?vid=10882549
https://hub.onmicrosoft.cn/public/video/ncm?vid=10882549&raw=true
```

#### 参数：

| 参数     | 类型   | 说明                       | 必填 | 默认值  |
| -------- | ------ | -------------------------- | ---- | ------- |
| vid      | `int`  | 网易云MV ID                | 是   |         |
| raw      | `bool` | 是否直接跳转到真实地址     | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值） | 否   | `False` |

#### 参数图解：

![ncm](https://img.onmicrosoft.cn/2022-3-2/10.png)

#### 返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

#### 返回体示例：

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


### 抖音直链解析接口

<video id="p4" width="100%" height="100%" controls=""  data-poster="https://img.onmicrosoft.cn/2023-01-20/1.png">
  <source src="https://hub.onmicrosoft.cn/public/video/tiktok?aweme_id=7188370071226551589&hd=0&raw=true&no_cache=false" type="video/mp4" />
</video>

#### 说明：

- 此接口可以解析抖音用户视频，无水印

- 清晰度可自定义，默认最高，但有防盗链，外链引用需 `<meta name="referrer" content="no-referrer">`！

#### 地址：

- https://hub.onmicrosoft.cn/public/video/tiktok

#### 交互性文档地址：

- https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/tiktok_public_video_tiktok_get

#### 示例地址：

```python
https://hub.onmicrosoft.cn/public/video/tiktok?aweme_id=7188370071226551589
https://hub.onmicrosoft.cn/public/video/tiktok?aweme_id=7188370071226551589&raw=true
https://hub.onmicrosoft.cn/public/video/tiktok?aweme_id=7184754304920620347
https://hub.onmicrosoft.cn/public/video/tiktok?aweme_id=7184754304920620347&raw=true
```

#### 参数：

| 参数     | 类型   | 说明                       | 必填 | 默认值  |
| -------- | ------ | -------------------------- | ---- | ------- |
| aweme_id    | `int`  | 抖音视频 ID               | 是   |         |
| hd       | `int`  | 清晰度，0为最高清晰度，1为高清，2为标清，3为流畅 | 否   | `0` |
| raw      | `bool` | 是否直接跳转到真实地址     | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值） | 否   | `False` |

#### 参数图解：

![tiktok](https://img.onmicrosoft.cn/2023/01/20/1ae538fe-b06f-4084-a66f-ae2d420616a0.png)

#### 返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| video_list           | 视频直链列表 |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

#### 返回体示例：

```json
{
    "video_url":"https://v6-default.douyinvod.com/fdc30b3bf2ac7bdf4632c35001c24dc3/63ccb115/video/tos/cn/tos-cn-ve-15c001-alinc2/oMceQEuL1nAtPFFbKreSB7HgVBTAKCVaoPbf8D/?a=0&ch=26&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1881&bt=1881&cs=0&ds=3&ft=WG6aWxqqRR0sTHC4NDn2Ncy3kIXbvLrTymxcx4kZcRAzEvjThb&mime_type=video_mp4&qs=0&rc=ZThoOjs7OTw8NDtoNTM3ZEBpajh4cjw6ZmdvaDMzNGkzM0BeLS8zLjFiXmIxLi02YjEzYSNfZ2gvcjRfc25gLS1kLS9zcw%3D%3D&l=2023012011441082E111C32B6BF93DD29D&btag=8000",
    "video_list":[
        "https://v6-default.douyinvod.com/fdc30b3bf2ac7bdf4632c35001c24dc3/63ccb115/video/tos/cn/tos-cn-ve-15c001-alinc2/oMceQEuL1nAtPFFbKreSB7HgVBTAKCVaoPbf8D/?a=0&ch=26&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1881&bt=1881&cs=0&ds=3&ft=WG6aWxqqRR0sTHC4NDn2Ncy3kIXbvLrTymxcx4kZcRAzEvjThb&mime_type=video_mp4&qs=0&rc=ZThoOjs7OTw8NDtoNTM3ZEBpajh4cjw6ZmdvaDMzNGkzM0BeLS8zLjFiXmIxLi02YjEzYSNfZ2gvcjRfc25gLS1kLS9zcw%3D%3D&l=2023012011441082E111C32B6BF93DD29D&btag=8000",
        "https://v9-default.douyinvod.com/331bdfbc3797032e11ab935542785e25/63ccb115/video/tos/cn/tos-cn-ve-15c001-alinc2/oMceQEuL1nAtPFFbKreSB7HgVBTAKCVaoPbf8D/?a=0&ch=26&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=1881&bt=1881&cs=0&ds=3&ft=WG6aWxqqRR0sTHC4NDn2Ncy3kIXbvLrTymxcx4kZcRAzEvjThb&mime_type=video_mp4&qs=0&rc=ZThoOjs7OTw8NDtoNTM3ZEBpajh4cjw6ZmdvaDMzNGkzM0BeLS8zLjFiXmIxLi02YjEzYSNfZ2gvcjRfc25gLS1kLS9zcw%3D%3D&l=2023012011441082E111C32B6BF93DD29D&btag=8000",
        "https://api.amemv.com/aweme/v1/play/?video_id=v0200fg10000ceqlvdbc77u92okuj5bg&line=0&file_id=6a44e0920e1841e9a9e64818672e05ab&sign=97edf66e961ed9b20c4435399b655ada&is_play_url=1&source=PackSourceEnum_AWEME_DETAIL",
        "https://api5-normal-dsa.amemv.com/aweme/v1/play/?video_id=v0200fg10000ceqlvdbc77u92okuj5bg&line=1&file_id=6a44e0920e1841e9a9e64818672e05ab&sign=97edf66e961ed9b20c4435399b655ada&is_play_url=1&source=PackSourceEnum_AWEME_DETAIL"
    ],
    "detail":{
        "aweme_id":7184754304920620347,
        "hd":0,
        "cache":"缓存中已存在该视频, 直接返回",
        "cache_time":2844,
        "info":"在请求中添加参数 raw=true 可以直接跳转到视频地址(永久链接，可直接外链引用)"
    }
}
```


### 百度好看视频解析接口

<video id="p5" width="100%" height="100%" controls=""  data-poster="https://img.onmicrosoft.cn/2023-01-20/1.png">
  <source src="https://hub.onmicrosoft.cn/public/video/haokan?vid=12891811088132952202&hd=0&raw=true&no_cache=false" type="video/mp4" />
</video>

#### 说明：

- 此接口可以解析百度好看视频直链

- 清晰度可自定义，默认最高，但有防盗链，外链引用需 `<meta name="referrer" content="no-referrer">`！

#### 地址：

- https://hub.onmicrosoft.cn/public/video/haokan

#### 交互性文档地址：

- https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/haokan_public_video_haokan_get

#### 示例地址：

```python
https://hub.onmicrosoft.cn/public/video/haokan?vid=12891811088132952202
https://hub.onmicrosoft.cn/public/video/haokan?vid=12891811088132952202&raw=true
```

#### 参数：

| 参数     | 类型   | 说明                       | 必填 | 默认值  |
| -------- | ------ | -------------------------- | ---- | ------- |
| vid    | `int`  | 好看视频 ID               | 是   |         |
| hd       | `int`  | 清晰度，0为最高清晰度，1为高清，2为标清，3为流畅 | 否   | `0` |
| raw      | `bool` | 是否直接跳转到真实地址     | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值） | 否   | `False` |

#### 参数图解：

![tiktok](https://img.onmicrosoft.cn/2023/01/20/6d280d10-2ec0-4ec8-9c14-e6de73fd3b57.png)

#### 返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| video_list           | 视频直链列表 |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

#### 返回体示例：

```json
{
    "video_url":"https://vd4.bdstatic.com/mda-kaqx7vaambk80iu7/v1-cae/sc/mda-kaqx7vaambk80iu7.mp4?v_from_s=hkapp-haokan-hbf&auth_key=1674225958-0-0-1a4ea2ac66c14a6396358760247f70b9&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=0958579983&vid=12891811088132952202&abtest=",
    "detail":{
        "vid":"12891811088132952202",
        "hd":0,
        "cache":"缓存中已存在该视频, 直接返回",
        "cache_time":2848,
        "info":"在请求中添加参数 raw=true 可以直接跳转到视频地址(永久链接，可直接外链引用)"
    }
}
```


### 快手视频解析接口

<video id="p6" width="100%" height="100%" controls=""  data-poster="https://img.onmicrosoft.cn/2023-01-20/1.png">
  <source src="https://hub.onmicrosoft.cn/public/video/kuaishou?photo_id=3xet8vhefke3cg2&hd=0&raw=true&no_cache=false" type="video/mp4" />
</video>

#### 说明：

- 此接口可以解析快手视频直链

- 视频编码格式可选 `h264` / `h265` ，默认 `h264`，无防盗链，可直接外链引用。

#### 地址：

- https://hub.onmicrosoft.cn/public/video/kuaishou

#### 交互性文档地址：

- https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/kuaishou_public_video_kuaishou_get

#### 示例地址：

```python
https://hub.onmicrosoft.cn/public/video/kuaishou?photo_id=3xpwd6jthnivz52
https://hub.onmicrosoft.cn/public/video/kuaishou?photo_id=3xpwd6jthnivz52&raw=true
```

#### 参数：

| 参数     | 类型   | 说明                       | 必填 | 默认值  |
| -------- | ------ | -------------------------- | ---- | ------- |
| vid    | `int`  | 快手视频 ID               | 是   |         |
| hd       | `int`  | 视频编码格式: `0` 为 `h264`, `1` 为 `h265` | 否   | `0` |
| raw      | `bool` | 是否直接跳转到真实地址     | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值） | 否   | `False` |

#### 参数图解：

![tiktok](https://img.onmicrosoft.cn/2023/01/21/1fac8a74-0f28-4e69-9924-9be62c7bda7a.png)

#### 返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| h264_url            | `h264` 视频直链       |
| h265_url            | `h265` 视频直链       |
| data           | 视频详细元信息 |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

#### 返回体示例：

```json
{
    "video_url": "https://v1.kwaicdn.com/upic/2023/01/19/16/BMjAyMzAxMTkxNjU1MDJfMTkwMDU1NDY2OV85NDAwMjcwODU2M18wXzM=_b_B22765d8f3247377b803799283fcd4d5a.mp4?pkey=AAX33uLdxUz7UwEeqpsxOnKmLtmiV4TPMGWBuvpdNAB4e2EXklFSftAe_IabLEnKRisEBiyJqAnabKz5hiT-33sKi2CbzB4kFVed_HueAneWMCwLS70BkmspbqARdfL2zPg&tag=1-1674307804-unknown-0-5a0hiawvdo-b43304ac379bdff0&clientCacheKey=3xet8vhefke3cg2_b.mp4&di=793e10c4&bp=10004&tt=b&ss=vp",
    "h264_url": "https://v1.kwaicdn.com/upic/2023/01/19/16/BMjAyMzAxMTkxNjU1MDJfMTkwMDU1NDY2OV85NDAwMjcwODU2M18wXzM=_b_B22765d8f3247377b803799283fcd4d5a.mp4?pkey=AAX33uLdxUz7UwEeqpsxOnKmLtmiV4TPMGWBuvpdNAB4e2EXklFSftAe_IabLEnKRisEBiyJqAnabKz5hiT-33sKi2CbzB4kFVed_HueAneWMCwLS70BkmspbqARdfL2zPg&tag=1-1674307804-unknown-0-5a0hiawvdo-b43304ac379bdff0&clientCacheKey=3xet8vhefke3cg2_b.mp4&di=793e10c4&bp=10004&tt=b&ss=vp",
    "h265_url": "https://v2.kwaicdn.com/upic/2023/01/19/16/BMjAyMzAxMTkxNjU1MDJfMTkwMDU1NDY2OV85NDAwMjcwODU2M18wXzM=_hd15_B81fe4167d480e9f14bad25fbb7189eaf.mp4?pkey=AAVKtyHOxyK9mKX4c9tJbT8-Ets8VcZlNMC_1SncX02ufbrGXqQawzlWkEpZnLHeWml5_OPxtmiGWkIchnilul2AFe5LqKMKoQJ9pqqy9rhDo88eeWfrWrHFRqp-AmNzZ8o&tag=1-1674307804-unknown-0-pzqmff6res-54dc755765c801b6&clientCacheKey=3xet8vhefke3cg2_hd15.mp4&di=793e10c4&bp=10004&tt=hd15&ss=vp",
    "data": {
        "id": "3xet8vhefke3cg2",
        "duration": 27266,
        "caption": "春节的仪式感，从这份祝福开始！（川展） #春节气氛组已就位  #火焰蓝守护平安  #召唤兔年 ",
        "likeCount": "6735",
        "realLikeCount": 6735,
        "coverUrl": "https://p2.a.yximgs.com/upic/2023/01/19/16/BMjAyMzAxMTkxNjU1MDJfMTkwMDU1NDY2OV85NDAwMjcwODU2M18wXzM=_ccc_Bdfe5286494a8d0d5c9537f037f481dd9.jpg?tag=1-1674307804-xpcwebdetail-0-o1sh6vjujx-b7c125d6213299ab&clientCacheKey=3xet8vhefke3cg2_ccc.jpg&di=793e10c4&bp=10004",
        "photoUrl": "https://v1.kwaicdn.com/upic/2023/01/19/16/BMjAyMzAxMTkxNjU1MDJfMTkwMDU1NDY2OV85NDAwMjcwODU2M18wXzM=_b_B22765d8f3247377b803799283fcd4d5a.mp4?pkey=AAX33uLdxUz7UwEeqpsxOnKmLtmiV4TPMGWBuvpdNAB4e2EXklFSftAe_IabLEnKRisEBiyJqAnabKz5hiT-33sKi2CbzB4kFVed_HueAneWMCwLS70BkmspbqARdfL2zPg&tag=1-1674307804-unknown-0-5a0hiawvdo-b43304ac379bdff0&clientCacheKey=3xet8vhefke3cg2_b.mp4&di=793e10c4&bp=10004&tt=b&ss=vp",
        "timestamp": 1674119153791,
        "viewCount": "22.2万",
        "photoH265Url": "https://v2.kwaicdn.com/upic/2023/01/19/16/BMjAyMzAxMTkxNjU1MDJfMTkwMDU1NDY2OV85NDAwMjcwODU2M18wXzM=_hd15_B81fe4167d480e9f14bad25fbb7189eaf.mp4?pkey=AAVKtyHOxyK9mKX4c9tJbT8-Ets8VcZlNMC_1SncX02ufbrGXqQawzlWkEpZnLHeWml5_OPxtmiGWkIchnilul2AFe5LqKMKoQJ9pqqy9rhDo88eeWfrWrHFRqp-AmNzZ8o&tag=1-1674307804-unknown-0-pzqmff6res-54dc755765c801b6&clientCacheKey=3xet8vhefke3cg2_hd15.mp4&di=793e10c4&bp=10004&tt=hd15&ss=vp"
    },
    "detail": {
        "photo_id": "3xet8vhefke3cg2",
        "hd": 0,
        "cache": "缓存中已存在该视频, 直接返回",
        "cache_time": 3104,
        "info": "在请求中添加参数 raw=true 可以直接跳转到视频地址(永久链接，可直接外链引用)"
    }
}
```


### 皮皮虾视频解析接口

<video id="p7" width="100%" height="100%" controls=""  data-poster="https://img.onmicrosoft.cn/2023-01-20/1.png">
  <source src="https://hub.onmicrosoft.cn/public/video/pipix?video_id=6586167484796115213&hd=0&raw=true" type="video/mp4" />
</video>

#### 说明：

- 此接口可以解析皮皮虾视频直链

- 清晰度可自定义，默认最高，但有防盗链，外链引用需 `<meta name="referrer" content="no-referrer">`！

#### 地址：

- https://hub.onmicrosoft.cn/public/video/pipix

#### 交互性文档地址：

- https://hub.onmicrosoft.cn/docs#/MiaoRun_Free_API/pipixia_public_video_pipix_get

#### 示例地址：

```python
https://hub.onmicrosoft.cn/public/video/pipix?video_id=6747148162852460814
https://hub.onmicrosoft.cn/public/video/pipix?video_id=6747148162852460814&raw=true
```

#### 参数：

| 参数     | 类型   | 说明                       | 必填 | 默认值  |
| -------- | ------ | -------------------------- | ---- | ------- |
| video_id    | `int`  | 皮皮虾视频作品 ID               | 是   |         |
| hd       | `int`  | 清晰度，0为主源，1为备用 | 否   | `0` |
| raw      | `bool` | 是否直接跳转到真实地址     | 否   | `False` |
| no_cache | `bool` | 是否不走缓存（推荐默认值） | 否   | `False` |

#### 参数图解：

![tiktok](https://tucdn.wpon.cn/2023/01/22/735024d81ed63.png)

#### 返回数据示例：

| 参数                 |                |
| -------------------- | -------------- |
| video_url            | 视频直链       |
| video_list           | 视频直链列表 |
| detail               | 请求参数       |
| detail -> cache_time | 剩余的缓存时间 |

#### 返回体示例：

```json
{
    "video_url": "https://v6-cdn-tos.ppxvod.com/5ec2eec3dc13f43351c2f73ec3366ead/63cf28eb/video/tos/hxsy/tos-hxsy-ve-0076/ec916858f81f4bf5a1a34b1359194485/?a=1319&ch=0&cr=0&dr=3&lr=superb&cd=0%7C0%7C1%7C0&cv=1&br=1645&bt=1645&cs=0&ds=3&ft=k7FKQVVyw3nRKo8kmo~hFJ4YA0pih_qm~jKJ6~VOaG0P3-A&mime_type=video_mp4&qs=0&rc=OWU5ZztnZWdoPDo5aGY0Z0BpMzV5dmUzOnlkcDMzZ2YzM0AtX18yMzVfXjYxNi1eYjFjYSNxYi9xb3JecmVfLS0yMS9zcw%3D%3D&l=202301220840043E31E4B8EF52A3CA9916&btag=8000",
    "data": {
        "title": "红及一时的小黄车，落到这种程度，",
        "video_url": "https://v6-cdn-tos.ppxvod.com/5ec2eec3dc13f43351c2f73ec3366ead/63cf28eb/video/tos/hxsy/tos-hxsy-ve-0076/ec916858f81f4bf5a1a34b1359194485/?a=1319&ch=0&cr=0&dr=3&lr=superb&cd=0%7C0%7C1%7C0&cv=1&br=1645&bt=1645&cs=0&ds=3&ft=k7FKQVVyw3nRKo8kmo~hFJ4YA0pih_qm~jKJ6~VOaG0P3-A&mime_type=video_mp4&qs=0&rc=OWU5ZztnZWdoPDo5aGY0Z0BpMzV5dmUzOnlkcDMzZ2YzM0AtX18yMzVfXjYxNi1eYjFjYSNxYi9xb3JecmVfLS0yMS9zcw%3D%3D&l=202301220840043E31E4B8EF52A3CA9916&btag=8000",
        "duration": 7.918
    },
    "detail": {
        "vid": "6747148162852460814",
        "hd": 0,
        "cache": "缓存中已存在该视频, 直接返回",
        "cache_time": 2895,
        "info": "在请求中添加参数 raw=true 可以直接跳转到视频地址(永久链接，可直接外链引用)"
    }
}
```






<script>
(
function () {
  const p_1 = new Plyr('#p1');
  const p_2 = new Plyr('#p2');
  const p_3 = new Plyr('#p3');
  const p_4 = new Plyr('#p4');
  const p_5 = new Plyr('#p5');
  const p_6 = new Plyr('#p6');
  const p_7 = new Plyr('#p7'); 
}
)()
</script>

