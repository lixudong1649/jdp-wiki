# 跨项目术语迁入候选清单

扫描：2026-10-13。首批建议 30 个通用概念；该清单记录首批扫描依据；本次已从 6 个项目提炼与复用 88 个独立条目。下方原候选表描述扫描时的范围，不作为最新完成数量。适合迁入通用知识不等于原文整篇可公开。

## 范围与判断

扫描 personalProjects 下 62 个非隐藏一级目录，排除依赖、虚拟环境、构建产物、私人目录、归档目录和本地会话状态后，枚举 2,851 份 Markdown／TXT，61 个目录存在此类文档。按术语表文件名和概念标题定位，再重点审阅候选出处；不是逐份全文审计，也不代表无命中项目没有通用概念。未扫描代码中的所有注释、PDF／Word／图片及远端独有文档。

发现 7 份独立术语表：jdp-agent、jdp-eval、jdp-deepagents、jdp-deerflow、jdp-claude-sdk、jdp-python、jdp-lol。jdp-gatekeeper、jdp-jev、jdp-rag 等还在说明文档中包含概念。jdp-ocr 的依赖包术语模板已排除，不计作项目自产知识。

筛选优先级：跨项目复用频率、定义可独立解释、出处明确、无项目私有语义。首批偏 Agent 与评测，因为重复最集中、现有定义最完整；后续增加语义知识工程、GIS、数据与音视频，不能将当前试点理解为永久范围限制。

## 来源编号

路径相对 personalProjects；“编号:行号”定位扫描时的定义。来源用于编辑查证，不是公开条目的参考文献。正式条目须核对规范、论文或官方文档，避免仅引用内部笔记。

| 编号 | 来源 |
| --- | --- |
| A | `jdp-agent/docs/01-规范与约定/03-术语表.md` |
| E | `jdp-eval/docs/glossary.md` |
| D | `jdp-deepagents/docs/参考/术语表.md` |
| F | `jdp-deerflow/docs/术语表.md` |
| C | `jdp-claude-sdk/docs/glossary.md` |
| P | `jdp-python/docs/课程/附录/术语表.md` |
| R | `jdp-rag/README.md` |

## 首批候选：30 个

以下是扫描时的候选标识，已有正式条目使用相同 ID，未覆盖的候选仍待核验。相同概念跨项目合并为一条；简介仅说明迁入范围，不代替已核验的正式定义。

| 序号 | 建议标识 | 条目 | 来源 | 迁入范围与保留边界 |
| --- | --- | --- | --- | --- |
| 01 | `agent-harness` | Agent Harness | A:122 | 运行模型、工具、状态与控制的外围系统；与评测 harness 分开 |
| 02 | `agent-loop` | Agent Loop | A:123 | 模型决策、工具执行、观察与继续的循环 |
| 03 | `react` | ReAct | A:124 | 推理与行动交替；保留论文来源，不迁项目循环实现 |
| 04 | `tool-call` | 工具调用 Tool Call | E:32 | 调用请求与实际执行分开，不等同调用成功 |
| 05 | `mcp` | MCP | A:130 | 协议概念；服务配置、已安装清单留原项目 |
| 06 | `agent-skill` | Agent Skill | A:131 | 限定 Agent 场景；技能正文和本地路径不迁 |
| 07 | `human-in-the-loop` | Human-in-the-loop | D:44 | 人参与控制；具体审批参数与恢复契约不迁 |
| 08 | `sandbox` | 沙箱 Sandbox | C:55 | 隔离边界；工作目录不等于沙箱 |
| 09 | `context-compaction` | 上下文压缩 Compaction | D:54 | 通用目的与信息损失；特定摘要算法留原项目 |
| 10 | `checkpoint` | 检查点 Checkpoint | D:11 | 状态保存与恢复；文件检查点和执行检查点区分 |
| 11 | `rag` | RAG | R:3 | 入库、切分、检索与生成关系；原型状态不迁 |
| 12 | `token` | 词元 Token | E:77 | 语言模型语义；与访问令牌消歧 |
| 13 | `eval-case` | 评测任务／用例 | E:12 | 输入与成功标准；具体案例、机密素材不迁 |
| 14 | `eval-trial` | 试验 Trial | E:13 | 同一任务的一次尝试；与 Run 建立关系而非直接同义 |
| 15 | `grader` | 评分器 Grader | E:14 | 判定逻辑；项目判分脚本不迁 |
| 16 | `rubric` | 评分量表 Rubric | E:52 | 评分档位与判断依据；业务阈值不迁 |
| 17 | `llm-as-judge` | LLM-as-a-Judge | E:50 | 模型评分与人工校准；不声称等于客观真值 |
| 18 | `capability-eval` | 能力评测 | E:24 | 能力探查；不把初始低通过率写成强制标准 |
| 19 | `regression-eval` | 回归评测 | E:25 | 既有能力保持；不强制统一通过率 |
| 20 | `pass-at-k` | pass@k | E:69 | 至少一次成功；统计假设与估计公式发布前核验 |
| 21 | `pass-power-k` | pass^k | E:70 | 连续／多次全成功的口径；与 pass@k 区分 |
| 22 | `fixture` | 测试夹具 Fixture | E:86 | 可控测试数据／环境；真实个人样本不迁 |
| 23 | `mock` | Mock | E:88 | 测试替身；不声称所有 mock 测试都确定或免费 |
| 24 | `record-replay` | 录制回放 | E:89 | 复用记录验证流程；会话记录本身不迁 |
| 25 | `idempotency` | 幂等性 | A:193 | 重复执行效果；不等于恰好一次交付 |
| 26 | `json-rpc` | JSON-RPC | A:257 | 调用消息协议；项目消息结构不迁 |
| 27 | `sse` | Server-Sent Events | A:259 | 服务器向客户端事件流；不与全部 HTTP 传输等同 |
| 28 | `virtual-environment` | Python 虚拟环境 | P:16 | 环境隔离；本机安装目录不迁 |
| 29 | `lockfile` | 依赖锁文件 | P:17 | 精确依赖解析结果；uv.lock 作为例子 |
| 30 | `python-context-manager` | Python 上下文管理器 | P:70 | with 管理资源；与 LLM 上下文区分 |

重复定义重点：MCP（A／C／D）、沙箱（A／C／D／F／E）、HITL（A／D／F）、检查点（A／C／D／F）、工具调用（A／C／E／P）、Mock／夹具（A／C／E／F）。合并前比对具体含义，不按字符串直接去重。

## 第二批线索：保留原处，后续筛选

| 来源 | 可提炼方向 | 暂不列首批原因 |
| --- | --- | --- |
| jdp-agent 术语表 | OTel、Span、SLO、SSOT、TOCTOU、背压、缓存失效、内容寻址 | 适合通用条目，但首批控制规模；具体字段、状态与门禁不迁 |
| jdp-python 术语表 | 闭包、迭代器、生成器、装饰器、可哈希、类型注解、包与模块 | 后续按 Python 子领域组织；课程章节和练习留原项目 |
| jdp-gatekeeper/doc/integration_index.md | Access Token、Refresh Token、RBAC | 24 小时／7 天是项目配置，不能变成通用定义；真实令牌不迁 |
| jdp-download/README.md | HLS、转码、Cookie、FFmpeg | 提炼协议与工具概念，平台兼容状态与登录素材留原项目 |
| jdp-remove/docs/architecture.md | OCR、二值掩码、图像修复、视频重编码 | 模型／引擎是产品专文；队列容量、超时、接口留原项目 |
| jdp-oss/README.md | 对象存储、存储 Provider | Provider 含义依语境区分；不迁具体账户、桶和端点 |
| jdp-jev/README.md | 校准置信度、结构化决策 | Choice／Score／Noul 属具体接口；先核对上游来源与适用性 |
| jdp-lol/docs/lol-glossary-zh-en-ja.md | 游戏多语言术语 | 通用领域知识，不等于私有概念；首批技术范围外，译名／版本／引用权待核对 |

## 留在原项目的概念和内容

“项目私有／专属”指职责归项目，不必然表示保密；保密属性需另行判断。

- jdp-agent：JDP_EDIT、JDP_SR、JDP_VIDEO、runtime_path、JDP_AGENT_RUNTIME、ToolCallBlock、tabStore、L1～L4 分层、特定权限模式、UI 状态、安装版验收和项目完成状态。
- jdp-eval：L0～L6 难度分层、案例字段、评分权重、具体样本量建议、Unknown／suspect 处理规则和本项目门禁。
- 框架实验仓：StoreBackend、NamespaceFactory、DeerMem、RuntimeFeatures、RunInteractionMode、interrupt_on、Command(resume=...) 等 API 和版本绑定契约，继续由实验仓维护。
- 各项目：真实会话、评测轨迹、Cookie、密钥、客户数据、业务字段、默认端口／超时／保留期、性能证据和实现状态不作为百科通用定义搬运。

原术语表仍是该项目行为契约入口；以后只把已正式发布的通用定义改为 Wiki 引用，项目扩展语义继续保留。

## 待确认项

暂不迁，已向维护者询问：

| 项目 | 问题 | 当前处理 |
| --- | --- | --- |
| jdp-agent 的 PPAR、上下文引擎／上下文工程 | 通用思想与自定义命名、模块职责混合，是否只提炼通用部分？ | 项目定义保留；不作为行业统一术语发布 |
| Store、Backend、Provider | 各框架所指不同，是否后续建立带产品限定的百科条目？ | 不合并成单一通用定义；完整产品条目不进首批 |

## 后续范围

本次 6 个项目的迁移已实际执行，采用 [迁移规则](term-migration.md)；条目与检索同源，见 [页面说明](term-search.md)。原项目专属 API、运行契约及混合说明的实现部分继续保留，不按字符串清空整份术语表。

PPAR／上下文引擎的自定义命名、各框架 Store／Backend／Provider 作用域、LOL 社区译名仍待逐项确认；法律标准、公开基准和产品名也需分别核验，不能因公开就直接复制。
