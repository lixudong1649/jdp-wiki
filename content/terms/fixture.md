---
id: "fixture"
title: "测试夹具"
english: "Fixture"
aliases: ["测试准备"]
category: "评测与测试"
status: "已核验"
checked: "2026-10-13"
---

# 测试夹具

## 定义

为测试准备和清理可复用数据、对象或环境的机制。

## 解释

测试在已知条件下运行，结束后释放资源，减少用例间相互影响。

## 例子

为订单查询测试创建临时数据库，测试后关闭并清理。

## 边界

夹具不限于一份测试数据；本文侧重 pytest 语境。

## 来源

[官方文档／规范／论文](https://docs.pytest.org/en/stable/explanation/fixtures.html)；核验 2026-10-13。
