---
id: "idempotency"
title: "幂等性"
english: "Idempotency"
aliases: ["Idempotency", "Idempotency"]
category: "工程与依赖"
status: "已核验"
checked: "2026-10-13"
---

# 幂等性

## 定义

重复应用同一操作与应用一次具有相同预期效果的性质。

## 例子

相同请求标识重试，不重复创建订单。

## 边界

不等于恰好一次投递；日志等附带效果可能不同。

## 来源

[官方文档／规范／论文](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2)；核验 2026-10-13。
