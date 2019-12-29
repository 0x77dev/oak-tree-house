---
title: 微信抢票用户指南
date: 2017-10-21T04:00:00Z
category: 项目
tags: [大作业]
summary: 这主要是一些关于如何使用微信抢票系统的视频。
---

**流量预警！！！** 这主要是一些关于如何使用的视频。以下视频按照顺序录制。

<!--more-->

## 1 删除旧用户 & 用户注册

<video src="/assets/blog/wxticket-user-guide/1.create-user.mp4" height="480" width="270" type="video/mp4" controls=""></video>

用户是软删除，但其实除了数据库应该是对其他地方透明的。也可以禁掉用户，之后可以解禁。此外用户创建是可以借助邮箱的。

## 2 添加活动 & 修改微信菜单

<video src="/assets/blog/wxticket-user-guide/2.add-activity.mp4" height="480" width="426" type="video/mp4" controls=""></video>

上述视频出现了个小bug，在于修改活动的时候，后台因为前端请求多了个字段反回了400错误。该bug原因在于后端这里活动的“短名称”是创建之后不能修改的，旧版可修改。前端还没及时更新。

真的懒得fix这个bug了。反正大作业是写后端，不过变相说明我后端对于请求检查是很严的，anyway不是500而是400。

## 3 绑定微信 & 抢票 & 退票

<video src="/assets/blog/wxticket-user-guide/3.buy-ticket.mp4" height="480" width="270" type="video/mp4" controls=""></video>

微信绑定中的一闪而过的“登录中”其实是微信弹出的OAuth验证进度条。

演示了微信抢票和Web抢票，Web抢票其实有同步时间的过程，但已经完成。

整个系统都是实时通信的，唯独余票数目需要手动刷新，这是因为本来计划余票数目借由redis广播debounce之后再推送给所有客户端，属于单独的一条推送线路，然而比较复杂所以没写完。

## 4 微信扫码检票

<video src="/assets/blog/wxticket-user-guide/4.check-ticket.mp4" height="480" width="270" type="video/mp4" controls=""></video>

这里借助手机的前置摄像头看了一下电脑的情况，检票成功后客户端是同步收到电子票检票成功的推送的。电子票的二维码是临时生成、每次都不同、只有2分钟有效期且一次性使用的。（可以等个2分钟看手动刷新界面）

## 5 用户管理

<video src="/assets/blog/wxticket-user-guide/5.user-management.mp4" height="480" width="270" type="video/mp4" controls=""></video>

演示了RBAC和用户屏蔽。