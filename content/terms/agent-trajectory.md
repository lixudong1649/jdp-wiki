---
id: "agent-trajectory"
title: "智能体执行轨迹"
english: "Trajectory / Trace"
aliases: ["Trajectory / Trace", "Trajectory"]
category: "评测与测试"
status: "已核验"
checked: "2026-10-13"
---

# 智能体执行轨迹

## 定义

记录任务执行期间的模型交互、工具调用与状态变化。

## 例子

一次查订单任务包含工具请求、返回值和最终输出。

## 边界

内部推理不一定可见；不应为补全轨迹而编造或索取隐藏推理。

## 来源

[官方文档／规范／论文](https://inspect.aisi.org.uk/eval-logs.html)；核验 2026-10-13。
