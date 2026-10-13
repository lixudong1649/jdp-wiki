---
id: "streamable-http"
title: "MCP 可流式 HTTP"
english: "Streamable HTTP"
aliases: ["Streamable HTTP", "Streamable HTTP"]
category: "Agent 与协议"
status: "已核验"
checked: "2026-10-13"
---

# MCP 可流式 HTTP

## 定义

MCP 基于 HTTP 请求并可使用 SSE 返回流式消息的传输方式。

## 例子

客户端向 MCP 端点提交消息并处理返回流。

## 边界

HTTP 传输不要求每个响应都使用 SSE。

## 来源

[官方文档／规范／论文](https://modelcontextprotocol.io/specification/latest/basic/transports)；核验 2026-10-13。
