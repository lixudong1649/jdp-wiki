---
id: "lockfile"
title: "依赖锁文件"
english: "Lockfile"
aliases: ["lock file", "uv.lock", "锁文件"]
category: "工程与依赖"
status: "已核验"
checked: "2026-10-13"
---

# 依赖锁文件

## 定义

记录依赖解析结果，帮助工具重复安装一致依赖的文件。

## 解释

以 uv.lock 为例，记录解析出的版本与相关信息，配合项目声明使用。

## 例子

团队按 uv.lock 同步环境，降低依赖版本漂移。

## 边界

不同工具的格式和约束不同；锁文件不能保证跨平台环境完全相同。

## 来源

[官方文档／规范／论文](https://docs.astral.sh/uv/concepts/projects/layout/)；核验 2026-10-13。
