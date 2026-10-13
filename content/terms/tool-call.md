---
id: "tool-call"
title: "工具调用"
english: "Tool Call"
aliases: ["Tool Call", "Tool Call"]
category: "Agent 与协议"
status: "已核验"
checked: "2026-10-13"
---

# 工具调用

## 定义

模型或程序提出工具名称与参数，由执行系统校验并运行。

## 例子

请求 get_order(id=123)，运行后将结果回传模型。

## 边界

提出调用、实际执行和任务完成是不同事件。

## 来源

[官方文档／规范／论文](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)；核验 2026-10-13。
