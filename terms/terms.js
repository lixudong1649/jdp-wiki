/* 自动生成：修改 content/terms/*.md 后运行 scripts/build_terms.py。 */
globalThis.WIKI_TERMS = [
  {
    "id": "accessibility",
    "title": "可访问性",
    "english": "Accessibility / a11y",
    "aliases": [
      "Accessibility / a11y",
      "Accessibility"
    ],
    "category": "工程与依赖",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "让不同能力的用户能够感知、操作和理解产品的设计要求。",
    "principle": "",
    "example": "键盘可操作、焦点可见、读屏能识别按钮。",
    "boundary": "自动扫描不能代替全部人工与用户测试。",
    "source": "https://www.w3.org/WAI/fundamentals/accessibility-intro/"
  },
  {
    "id": "agent-harness",
    "title": "智能体运行框架",
    "english": "Agent Harness",
    "aliases": [
      "Agent Harness",
      "Agent Harness"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "围绕模型提供工具执行、状态、上下文和运行控制的系统。",
    "principle": "可包含工具执行、会话、上下文压缩、记忆、Skill、MCP、权限、人在环、沙箱、检查点、子智能体、可观测性与产物管理；不是所有实现都包含全部能力。",
    "example": "同一模型在不同运行框架中可能表现不同。",
    "boundary": "不等于一个模型，也不等同评测框架。",
    "source": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
  },
  {
    "id": "agent-loop",
    "title": "智能体循环",
    "english": "Agent Loop",
    "aliases": [
      "Agent Loop",
      "Agent Loop"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "在决策、行动和环境反馈之间重复推进任务的控制循环。",
    "principle": "",
    "example": "查询失败后读取错误信息，再选择下一步。",
    "boundary": "应有完成、失败、审批、取消和预算等停止条件。",
    "source": "https://www.anthropic.com/engineering/building-effective-agents"
  },
  {
    "id": "agent-planning",
    "title": "智能体规划",
    "english": "Planning",
    "aliases": [
      "Planning",
      "Planning"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "把目标拆成步骤、依赖和检查条件，并按反馈调整执行顺序。",
    "principle": "",
    "example": "先读取订单，再判断是否满足退款条件。",
    "boundary": "计划本身不构成完成证据。",
    "source": "https://www.anthropic.com/engineering/building-effective-agents"
  },
  {
    "id": "agent-skill",
    "title": "智能体技能",
    "english": "Agent Skill",
    "aliases": [
      "Agent Skill",
      "Agent Skill"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "可复用的指令、资源与可选脚本组成的任务能力包。",
    "principle": "",
    "example": "文档编辑技能包含步骤、模板和校验脚本。",
    "boundary": "技能说明不是实际执行工具，也不自动授予权限。",
    "source": "https://agentskills.io/home"
  },
  {
    "id": "agent-trajectory",
    "title": "智能体执行轨迹",
    "english": "Trajectory / Trace",
    "aliases": [
      "Trajectory / Trace",
      "Trajectory"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "记录任务执行期间的模型交互、工具调用与状态变化。",
    "principle": "",
    "example": "一次查订单任务包含工具请求、返回值和最终输出。",
    "boundary": "内部推理不一定可见；不应为补全轨迹而编造或索取隐藏推理。",
    "source": "https://inspect.aisi.org.uk/eval-logs.html"
  },
  {
    "id": "agent",
    "title": "智能体",
    "english": "Agent",
    "aliases": [
      "Agent",
      "Agent"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "在目标与约束下感知信息、选择行动，并依据反馈继续执行的系统。",
    "principle": "",
    "example": "根据订单状态自主选择查询或退款工具。",
    "boundary": "LLM Agent 是其中一类；不能把所有 Agent 都限定为 LLM。",
    "source": "https://www.anthropic.com/engineering/building-effective-agents"
  },
  {
    "id": "assertion",
    "title": "断言",
    "english": "Assertion",
    "aliases": [
      "Assertion",
      "Assertion"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "检查实际结果是否符合预期条件的表达式或规则。",
    "principle": "",
    "example": "assert status == \"done\"。",
    "boundary": "断言通过只说明被检查的条件成立。",
    "source": "https://docs.pytest.org/en/stable/how-to/assert.html"
  },
  {
    "id": "capability-eval",
    "title": "能力评测",
    "english": "Capability Evaluation",
    "aliases": [
      "Capability Evaluation",
      "Capability Evaluation"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "探查系统能完成哪些任务及其能力边界的评测。",
    "principle": "",
    "example": "测试未支持过的新工具组合。",
    "boundary": "初始通过率取决于任务和系统，不能强制一律低。",
    "source": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
  },
  {
    "id": "checkpoint",
    "title": "检查点",
    "english": "Checkpoint",
    "aliases": [
      "Checkpoint",
      "Checkpoint"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "为恢复执行保存的阶段性状态快照。",
    "principle": "",
    "example": "暂停后按会话标识恢复图状态。",
    "boundary": "文件回退检查点与执行状态检查点的恢复对象不同。",
    "source": "https://docs.langchain.com/oss/python/langgraph/persistence"
  },
  {
    "id": "context-compaction",
    "title": "上下文压缩",
    "english": "Context Compaction",
    "aliases": [
      "Context Compaction",
      "Context Compaction"
    ],
    "category": "AI 与知识",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "通过摘要、裁剪等方式减少上下文占用的机制。",
    "principle": "",
    "example": "保留目标和关键事实，摘要较早的对话。",
    "boundary": "存在信息损失；与原文卸载后按引用读取区分。",
    "source": "https://platform.claude.com/docs/en/build-with-claude/context-windows"
  },
  {
    "id": "context-window",
    "title": "上下文窗口",
    "english": "Context Window",
    "aliases": [
      "Context Window",
      "Context Window"
    ],
    "category": "AI 与知识",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "模型一次处理可见输入与生成内容的容量边界。",
    "principle": "",
    "example": "系统提示、历史、工具信息共享输入空间。",
    "boundary": "计数范围与限制以具体模型和 API 为准。",
    "source": "https://platform.claude.com/docs/en/build-with-claude/context-windows"
  },
  {
    "id": "eval-case",
    "title": "评测用例",
    "english": "Evaluation Case",
    "aliases": [
      "评测任务",
      "测试用例"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "描述输入、执行条件和成功标准的一项评测任务。",
    "principle": "用例定义要测什么；评分器负责判断一次执行是否满足要求。",
    "example": "输入“查订单状态”，要求返回正确状态且不泄露其他用户资料。",
    "boundary": "具体业务用例和内部数据仍留在所属项目。",
    "source": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
  },
  {
    "id": "eval-harness",
    "title": "评测框架",
    "english": "Evaluation Harness",
    "aliases": [
      "Evaluation Harness",
      "Evaluation Harness"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "负责运行任务、采集记录、评分并汇总结果的基础设施。",
    "principle": "",
    "example": "批量执行用例并生成评分报告。",
    "boundary": "与让模型行动的 Agent Harness 分工不同。",
    "source": "https://inspect.aisi.org.uk/tasks.html"
  },
  {
    "id": "eval-outcome",
    "title": "评测结果状态",
    "english": "Outcome",
    "aliases": [
      "Outcome",
      "Outcome"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "任务结束后可观测到的环境状态或实际产物。",
    "principle": "",
    "example": "订单已被修改，才能作为写入完成的证据。",
    "boundary": "智能体说“完成了”不等于环境真的改变。",
    "source": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
  },
  {
    "id": "eval-suite",
    "title": "评测套件",
    "english": "Evaluation Suite",
    "aliases": [
      "Evaluation Suite",
      "Evaluation Suite"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "围绕目标能力组织的一组评测任务。",
    "principle": "",
    "example": "订单查询、退款和权限拒绝组成客服评测套件。",
    "boundary": "套件范围和任务难度需明示。",
    "source": "https://inspect.aisi.org.uk/tasks.html"
  },
  {
    "id": "eval-trial",
    "title": "评测尝试",
    "english": "Trial",
    "aliases": [
      "试验",
      "评测尝试"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "智能体对一个评测任务进行的一次尝试。",
    "principle": "同一用例可以重复尝试，用于观察结果波动；整个批次的 Run 可包含多个 Trial。",
    "example": "同一道问题执行三次，产生三次 Trial。",
    "boundary": "Trial 与 Run 的命名因框架而异，不能直接视为同义词。",
    "source": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
  },
  {
    "id": "failure-mode",
    "title": "失败模式",
    "english": "Failure Mode",
    "aliases": [
      "Failure Mode",
      "Failure Mode"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "描述系统以何种方式未达到要求的分类。",
    "principle": "",
    "example": "错工具、漏步骤、越权属于不同失败原因。",
    "boundary": "分类体系由评测目标确定。",
    "source": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
  },
  {
    "id": "fixture",
    "title": "测试夹具",
    "english": "Fixture",
    "aliases": [
      "测试准备"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "为测试准备和清理可复用数据、对象或环境的机制。",
    "principle": "测试在已知条件下运行，结束后释放资源，减少用例间相互影响。",
    "example": "为订单查询测试创建临时数据库，测试后关闭并清理。",
    "boundary": "夹具不限于一份测试数据；本文侧重 pytest 语境。",
    "source": "https://docs.pytest.org/en/stable/explanation/fixtures.html"
  },
  {
    "id": "grader",
    "title": "评分器",
    "english": "Grader",
    "aliases": [
      "评判器"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "根据成功标准检查执行结果或轨迹、给出判定或分数的机制。",
    "principle": "可以使用确定性规则、模型判断或人工评审；模型评分需要校准。",
    "example": "检查查询结果与参考值一致，并核对是否调用了越权工具。",
    "boundary": "一次工具请求成功不等于整个任务完成。",
    "source": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
  },
  {
    "id": "human-in-the-loop",
    "title": "人在环",
    "english": "Human-in-the-loop / HITL",
    "aliases": [
      "Human-in-the-loop / HITL",
      "Human-in-the-loop"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "在决策或执行流程中纳入人的检查、反馈或控制。",
    "principle": "",
    "example": "付款前暂停等待人工批准。",
    "boundary": "并非只能用于执行前审批，也可用于复核和纠错。",
    "source": "https://docs.langchain.com/oss/python/langgraph/interrupts"
  },
  {
    "id": "idempotency",
    "title": "幂等性",
    "english": "Idempotency",
    "aliases": [
      "Idempotency",
      "Idempotency"
    ],
    "category": "工程与依赖",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "重复应用同一操作与应用一次具有相同预期效果的性质。",
    "principle": "",
    "example": "相同请求标识重试，不重复创建订单。",
    "boundary": "不等于恰好一次投递；日志等附带效果可能不同。",
    "source": "https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2"
  },
  {
    "id": "json-rpc",
    "title": "JSON-RPC",
    "english": "JSON Remote Procedure Call",
    "aliases": [
      "JSON Remote Procedure Call",
      "JSON Remote Procedure Call"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "使用 JSON 编码请求、响应和通知的远程调用协议。",
    "principle": "",
    "example": "以 method、params、id 描述请求。",
    "boundary": "不规定业务权限；通知不带请求 ID，也不接收响应。",
    "source": "https://www.jsonrpc.org/specification"
  },
  {
    "id": "llm-as-judge",
    "title": "模型评判",
    "english": "LLM-as-a-Judge",
    "aliases": [
      "LLM-as-a-Judge",
      "LLM-as-a-Judge"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "让语言模型依据评分标准评估结果或执行过程。",
    "principle": "",
    "example": "按评分量表检查回答是否完整。",
    "boundary": "模型评判可能有偏差，需与人工校准。",
    "source": "https://inspect.aisi.org.uk/scorers.html"
  },
  {
    "id": "lockfile",
    "title": "依赖锁文件",
    "english": "Lockfile",
    "aliases": [
      "lock file",
      "uv.lock",
      "锁文件"
    ],
    "category": "工程与依赖",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "记录依赖解析结果，帮助工具重复安装一致依赖的文件。",
    "principle": "以 uv.lock 为例，记录解析出的版本与相关信息，配合项目声明使用。",
    "example": "团队按 uv.lock 同步环境，降低依赖版本漂移。",
    "boundary": "不同工具的格式和约束不同；锁文件不能保证跨平台环境完全相同。",
    "source": "https://docs.astral.sh/uv/concepts/projects/layout/"
  },
  {
    "id": "mcp",
    "title": "MCP",
    "english": "Model Context Protocol",
    "aliases": [
      "模型上下文协议"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "连接 AI 应用与外部工具、数据和工作流的开放协议。",
    "principle": "客户端与服务端按协议交换能力和消息；是否允许执行仍由应用的权限控制决定。",
    "example": "Agent 通过 MCP 服务读取订单，只读权限由业务系统校验。",
    "boundary": "协议不是工具商店，也不自动赋予业务权限。",
    "source": "https://modelcontextprotocol.io/docs/getting-started/intro"
  },
  {
    "id": "mock",
    "title": "模拟对象",
    "english": "Mock",
    "aliases": [
      "Mock",
      "Mock"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "以受控替身替代真实依赖并可检查交互的测试机制。",
    "principle": "",
    "example": "用 mock HTTP 客户端验证请求参数。",
    "boundary": "Mock 测试不能证明真实网络或模型能力。",
    "source": "https://docs.python.org/3/library/unittest.mock.html"
  },
  {
    "id": "non-determinism",
    "title": "非确定性",
    "english": "Non-determinism",
    "aliases": [
      "Non-determinism",
      "Non-determinism"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "相同条件下多次运行可能得到不同结果的性质。",
    "principle": "",
    "example": "同一输入两次运行出现不同工具路径。",
    "boundary": "温度为零也不能保证整个系统完全确定。",
    "source": "https://docs.pytest.org/en/stable/explanation/flaky.html"
  },
  {
    "id": "progressive-disclosure",
    "title": "渐进披露",
    "english": "Progressive Disclosure",
    "aliases": [
      "Progressive Disclosure",
      "Progressive Disclosure"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "先提供摘要或元数据，在需要时再加载详细信息。",
    "principle": "",
    "example": "先匹配技能描述，再读取技能正文。",
    "boundary": "隐藏正文不等于权限隔离，也不证明磁盘从未读取。",
    "source": "https://agentskills.io/home"
  },
  {
    "id": "python-bytecode",
    "title": "字节码",
    "english": "bytecode",
    "aliases": [
      "字节码",
      "bytecode"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "源码编译后的中间表示，由解释器虚拟机执行",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/library/dis.html"
  },
  {
    "id": "python-class-instance",
    "title": "类 / 实例",
    "english": "class / instance",
    "aliases": [
      "类 / 实例",
      "class / instance",
      "class"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "类是创建实例的模板；调用类得到实例",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/classes.html"
  },
  {
    "id": "python-closure",
    "title": "闭包",
    "english": "closure",
    "aliases": [
      "闭包",
      "closure"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "捕获外层变量的内部函数",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/executionmodel.html"
  },
  {
    "id": "python-comprehension",
    "title": "推导式",
    "english": "comprehension",
    "aliases": [
      "推导式",
      "comprehension"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "`[expr for x in xs if cond]` 等构造容器的表达式",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/datastructures.html"
  },
  {
    "id": "python-context-manager",
    "title": "上下文管理器",
    "english": "context manager",
    "aliases": [
      "上下文管理器",
      "context manager"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "实现 `__enter__`/`__exit__`，配合 `with` 管理资源",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/compound_stmts.html"
  },
  {
    "id": "python-copy",
    "title": "浅拷贝 / 深拷贝",
    "english": "shallow / deep copy",
    "aliases": [
      "浅拷贝 / 深拷贝",
      "shallow / deep copy",
      "shallow"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "浅拷贝新建外层对象并复用内部引用；深拷贝递归复制可复制的组成对象。",
    "principle": "深拷贝并不保证所有对象都能复制或复制后完全独立。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/library/copy.html"
  },
  {
    "id": "python-dataclass",
    "title": "数据类",
    "english": "dataclass",
    "aliases": [
      "数据类",
      "dataclass"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "由字段声明自动生成常用方法的类",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/library/dataclasses.html"
  },
  {
    "id": "python-decorator",
    "title": "装饰器",
    "english": "decorator",
    "aliases": [
      "装饰器",
      "decorator"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "接收函数并返回替换对象的可调用对象，`@` 语法",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/glossary.html"
  },
  {
    "id": "python-dispatch-table",
    "title": "分发表",
    "english": "dispatch table",
    "aliases": [
      "分发表",
      "dispatch table"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "“名字 → 函数”的 dict，替代长串 if/elif",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/glossary.html"
  },
  {
    "id": "python-distribution",
    "title": "包（分发）",
    "english": "distribution package",
    "aliases": [
      "包（分发）",
      "distribution package"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "可安装的发布单元，如 PyPI 上的 `python-dotenv`",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://packaging.python.org/en/latest/discussions/distribution-package-vs-import-package/"
  },
  {
    "id": "python-duck-typing",
    "title": "鸭子类型",
    "english": "duck typing",
    "aliases": [
      "鸭子类型",
      "duck typing"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "只看对象有没有所需的方法/属性，不看类型",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/glossary.html"
  },
  {
    "id": "python-eafp",
    "title": "EAFP",
    "english": "easier to ask forgiveness than permission",
    "aliases": [
      "EAFP",
      "easier to ask forgiveness than permission"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "先执行、出错再处理的风格",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/glossary.html"
  },
  {
    "id": "python-exception-chaining",
    "title": "异常链",
    "english": "exception chaining",
    "aliases": [
      "异常链",
      "exception chaining"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "`raise X from e` 保留原始原因",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/errors.html"
  },
  {
    "id": "python-f-string",
    "title": "f-string",
    "english": "formatted string literal",
    "aliases": [
      "f-string",
      "formatted string literal"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "前缀 `f` 的字符串，`{}` 内为表达式",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/lexical_analysis.html"
  },
  {
    "id": "python-first-class-function",
    "title": "一等函数",
    "english": "first-class function",
    "aliases": [
      "一等函数",
      "first-class function"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "函数是对象，可赋值、存储、传递",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/glossary.html"
  },
  {
    "id": "python-generator-expression",
    "title": "生成器表达式",
    "english": "generator expression",
    "aliases": [
      "生成器表达式",
      "generator expression"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "圆括号形式的惰性推导式",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/classes.html"
  },
  {
    "id": "python-generator",
    "title": "生成器",
    "english": "generator",
    "aliases": [
      "生成器",
      "generator"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "生成器函数返回的迭代器，通过 yield 暂停并逐步产生值。",
    "principle": "调用含 yield 的函数得到生成器；并不是立即执行整个函数。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/classes.html"
  },
  {
    "id": "python-generic",
    "title": "泛型",
    "english": "generic",
    "aliases": [
      "泛型",
      "generic"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "带类型参数的类型，如 `list[str]`",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/library/typing.html"
  },
  {
    "id": "python-hashable",
    "title": "可哈希",
    "english": "hashable",
    "aliases": [
      "可哈希",
      "hashable"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "生命周期内哈希值不变、支持相等比较，且相等对象的哈希值相同的对象。",
    "principle": "字符串可作 dict 键；含 list 的 tuple 不可哈希。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/datamodel.html"
  },
  {
    "id": "python-interpreter",
    "title": "解释器",
    "english": "interpreter",
    "aliases": [
      "解释器",
      "interpreter"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "执行 Python 程序的实现或运行程序；CPython 是主要实现之一。",
    "principle": "与只编辑文本的代码编辑器区分。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/glossary.html"
  },
  {
    "id": "python-iterable",
    "title": "可迭代对象",
    "english": "iterable",
    "aliases": [
      "可迭代对象",
      "iterable"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "能提供迭代器或支持序列迭代协议的对象。",
    "principle": "列表能被 for 遍历；不能只凭有没有 __iter__ 判断全部可迭代对象。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/glossary.html"
  },
  {
    "id": "python-iterator",
    "title": "迭代器",
    "english": "iterator",
    "aliases": [
      "迭代器",
      "iterator"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "实现 `__next__`，逐个产出值，耗尽时抛 `StopIteration`",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/classes.html"
  },
  {
    "id": "python-keyword-argument",
    "title": "关键字参数",
    "english": "keyword argument",
    "aliases": [
      "关键字参数",
      "keyword argument"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "以 `name=value` 形式传入的实参",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/controlflow.html"
  },
  {
    "id": "python-keyword-only",
    "title": "仅限关键字参数",
    "english": "keyword-only parameter",
    "aliases": [
      "仅限关键字参数",
      "keyword-only parameter"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "签名中 `*` 之后的参数，只能按名字传",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/controlflow.html"
  },
  {
    "id": "python-lambda",
    "title": "lambda",
    "english": "lambda",
    "aliases": [
      "lambda",
      "lambda"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "单表达式的匿名函数",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/controlflow.html"
  },
  {
    "id": "python-mapping",
    "title": "映射",
    "english": "mapping",
    "aliases": [
      "映射",
      "mapping"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "键到值的容器（dict）",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/library/stdtypes.html"
  },
  {
    "id": "python-method",
    "title": "方法",
    "english": "method",
    "aliases": [
      "方法",
      "method"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "与类或对象关联的可调用行为，包含实例方法、类方法与静态方法等形式。",
    "principle": "实例方法惯例首参为 self；类方法惯例为 cls，静态方法不自动接收实例。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/classes.html"
  },
  {
    "id": "python-module",
    "title": "模块",
    "english": "module",
    "aliases": [
      "模块",
      "module"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "组织 Python 名称与代码的模块对象，可以来自源码文件、内建实现或扩展。",
    "principle": "常见模块来自 .py 文件；并非所有模块都有 .py 文件。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/modules.html"
  },
  {
    "id": "python-mro",
    "title": "方法解析顺序",
    "english": "MRO",
    "aliases": [
      "方法解析顺序",
      "MRO"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "查找属性/方法时依次搜索的类序列",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/classes.html"
  },
  {
    "id": "python-mutability",
    "title": "可变 / 不可变",
    "english": "mutable / immutable",
    "aliases": [
      "可变 / 不可变",
      "mutable / immutable",
      "mutable"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "创建后能否原地修改（list 可变，str/tuple 不可变）",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/datamodel.html"
  },
  {
    "id": "python-name-binding",
    "title": "名字绑定",
    "english": "name binding",
    "aliases": [
      "名字绑定",
      "name binding"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "赋值把名字绑定到对象，变量本身无类型",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/executionmodel.html"
  },
  {
    "id": "python-object",
    "title": "对象",
    "english": "object",
    "aliases": [
      "对象",
      "object"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "一切数据都是对象，有身份、类型和值",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/datamodel.html"
  },
  {
    "id": "python-package",
    "title": "包（导入）",
    "english": "package",
    "aliases": [
      "包（导入）",
      "package"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "能够包含子模块的 Python 模块；分常规包和命名空间包。",
    "principle": "常规包通常有 __init__.py，命名空间包可以没有。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/modules.html"
  },
  {
    "id": "python-parameter-argument",
    "title": "形参 / 实参",
    "english": "parameter / argument",
    "aliases": [
      "形参 / 实参",
      "parameter / argument",
      "parameter"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "定义中的名字 / 调用时传入的值",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/controlflow.html"
  },
  {
    "id": "python-relative-import",
    "title": "相对导入",
    "english": "relative import",
    "aliases": [
      "相对导入",
      "relative import"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "`from .x import y`，包内互相引用",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/modules.html"
  },
  {
    "id": "python-repl",
    "title": "交互式解释器",
    "english": "REPL",
    "aliases": [
      "交互式解释器",
      "REPL"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "逐行输入、立即求值的环境，提示符 `>>>`",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/interpreter.html"
  },
  {
    "id": "python-scope",
    "title": "作用域 / LEGB",
    "english": "scope",
    "aliases": [
      "作用域 / LEGB",
      "scope"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "名字查找顺序：局部、外层、全局、内置",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/executionmodel.html"
  },
  {
    "id": "python-sentinel",
    "title": "哨兵值",
    "english": "sentinel",
    "aliases": [
      "哨兵值",
      "sentinel"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "用于表示“未提供”等特殊状态的唯一对象",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/glossary.html"
  },
  {
    "id": "python-sequence",
    "title": "序列",
    "english": "sequence",
    "aliases": [
      "序列",
      "sequence"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "支持整数索引与切片的有序容器（list、tuple、str）",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/library/stdtypes.html"
  },
  {
    "id": "python-special-method",
    "title": "特殊方法",
    "english": "special method / dunder",
    "aliases": [
      "特殊方法",
      "special method / dunder",
      "special method"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "`__xxx__` 形式的方法，支撑内置语法",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/datamodel.html"
  },
  {
    "id": "python-traceback",
    "title": "回溯",
    "english": "traceback",
    "aliases": [
      "回溯",
      "traceback"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "异常发生时的调用栈报告，最近的调用在最后",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/errors.html"
  },
  {
    "id": "python-truthiness",
    "title": "真值",
    "english": "truthiness",
    "aliases": [
      "真值",
      "truthiness"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "对象在条件判断中被视为真或假",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/library/stdtypes.html"
  },
  {
    "id": "python-type-hint",
    "title": "类型注解",
    "english": "type annotation / type hint",
    "aliases": [
      "类型注解",
      "type annotation / type hint",
      "type annotation"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "为参数、返回值或变量标注预期类型，供类型检查器和其他工具使用。",
    "principle": "Python 本身通常不强制校验；框架可读取注解进行运行时校验。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/library/typing.html"
  },
  {
    "id": "python-typing-model",
    "title": "动态类型 / 强类型",
    "english": "dynamic / strong typing",
    "aliases": [
      "动态类型 / 强类型",
      "dynamic / strong typing",
      "dynamic"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "Python 的类型属于对象；“动态类型”与“强类型”描述不同维度，不表示禁止一切隐式转换。",
    "principle": "例如 1 + 2.0 可以运算，1 + \"2\" 则报类型错误。",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/reference/datamodel.html"
  },
  {
    "id": "python-unpacking",
    "title": "解包",
    "english": "unpacking",
    "aliases": [
      "解包",
      "unpacking"
    ],
    "category": "Python 基础",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "调用时 `*seq` / `**dict` 展开；赋值时 `a, b = ...`",
    "principle": "",
    "example": "",
    "boundary": "",
    "source": "https://docs.python.org/3/tutorial/controlflow.html"
  },
  {
    "id": "rag",
    "title": "RAG",
    "english": "Retrieval-Augmented Generation",
    "aliases": [
      "检索增强生成"
    ],
    "category": "AI 与知识",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "先检索外部知识，再将相关内容提供给模型辅助生成回答的方法。",
    "principle": "常见流程是资料整理、切分、索引、检索、可选重排、生成和引用。",
    "example": "回答产品保修问题时，先查保修政策，再依据检索片段作答。",
    "boundary": "RAG 不等于向量数据库，也不保证答案一定正确。",
    "source": "https://arxiv.org/abs/2005.11401"
  },
  {
    "id": "react",
    "title": "ReAct",
    "english": "Reasoning and Acting",
    "aliases": [
      "Reasoning and Acting",
      "Reasoning and Acting"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "让推理与行动交替、利用观察结果继续决策的方法。",
    "principle": "",
    "example": "分析问题→调用工具→观察返回→调整行动。",
    "boundary": "不是每次 function calling 都等同完整 ReAct；无需公开模型隐藏推理。",
    "source": "https://arxiv.org/abs/2210.03629"
  },
  {
    "id": "reference-solution",
    "title": "参考解",
    "english": "Reference Solution",
    "aliases": [
      "Reference Solution",
      "Reference Solution"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "用于对照或验证评测任务可解的已知有效答案或执行方案。",
    "principle": "",
    "example": "参考查询结果用于校验评分器。",
    "boundary": "开放任务可能有多个正确方案。",
    "source": "https://inspect.aisi.org.uk/scorers.html"
  },
  {
    "id": "regression-eval",
    "title": "回归评测",
    "english": "Regression Evaluation",
    "aliases": [
      "Regression Evaluation",
      "Regression Evaluation"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "检查改动后是否保持已验证能力的评测。",
    "principle": "",
    "example": "升级模型后重跑原有订单任务。",
    "boundary": "通过率目标按风险设定，不固定为行业统一百分比。",
    "source": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
  },
  {
    "id": "rubric",
    "title": "评分量表",
    "english": "Rubric",
    "aliases": [
      "Rubric",
      "Rubric"
    ],
    "category": "评测与测试",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "给出评分维度、等级描述与判定依据的结构化标准。",
    "principle": "",
    "example": "完整、部分完成、未完成分别对应明确条件。",
    "boundary": "分档、权重和 Unknown 处理由任务定义。",
    "source": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
  },
  {
    "id": "sandbox",
    "title": "沙箱",
    "english": "Sandbox",
    "aliases": [
      "Sandbox",
      "Sandbox"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "对执行环境施加隔离与访问限制的机制。",
    "principle": "",
    "example": "限制动态代码的文件、网络和资源访问。",
    "boundary": "工作目录、工具白名单和人工审批都不能单独等同安全沙箱。",
    "source": "https://code.claude.com/docs/en/sandboxing"
  },
  {
    "id": "schema",
    "title": "数据模式",
    "english": "Schema",
    "aliases": [
      "Schema",
      "Schema"
    ],
    "category": "工程与依赖",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "约束数据字段、类型、结构和合法值的模式定义。",
    "principle": "",
    "example": "工具参数要求 order_id 为字符串且必填。",
    "boundary": "Schema 校验不能代替业务权限或执行代码。",
    "source": "https://json-schema.org/understanding-json-schema/about"
  },
  {
    "id": "semantic-versioning",
    "title": "语义化版本",
    "english": "Semantic Versioning",
    "aliases": [
      "Semantic Versioning",
      "Semantic Versioning"
    ],
    "category": "工程与依赖",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "用主版本、次版本、修订版本表达公共接口兼容性的版本约定。",
    "principle": "",
    "example": "1.2.3 对应 major.minor.patch。",
    "boundary": "适用前提是明确公共 API；预发布标识也有规则。",
    "source": "https://semver.org/"
  },
  {
    "id": "sse",
    "title": "服务器发送事件",
    "english": "Server-Sent Events / SSE",
    "aliases": [
      "Server-Sent Events / SSE",
      "Server-Sent Events"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "服务端通过 HTTP 事件流持续向客户端发送事件的机制。",
    "principle": "",
    "example": "浏览器接收任务进度与消息更新。",
    "boundary": "数据方向主要从服务器到客户端，不等同 WebSocket。",
    "source": "https://html.spec.whatwg.org/multipage/server-sent-events.html"
  },
  {
    "id": "streamable-http",
    "title": "MCP 可流式 HTTP",
    "english": "Streamable HTTP",
    "aliases": [
      "Streamable HTTP",
      "Streamable HTTP"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "MCP 基于 HTTP 请求并可使用 SSE 返回流式消息的传输方式。",
    "principle": "",
    "example": "客户端向 MCP 端点提交消息并处理返回流。",
    "boundary": "HTTP 传输不要求每个响应都使用 SSE。",
    "source": "https://modelcontextprotocol.io/specification/latest/basic/transports"
  },
  {
    "id": "token",
    "title": "词元",
    "english": "Token",
    "aliases": [
      "Token",
      "Token"
    ],
    "category": "AI 与知识",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "模型分词器使用的文本单元，用于输入输出长度等统计。",
    "principle": "",
    "example": "一段文本经分词后形成 token 序列。",
    "boundary": "不是固定一个汉字或半个单词；与访问令牌消歧。",
    "source": "https://platform.claude.com/docs/en/build-with-claude/context-windows"
  },
  {
    "id": "tool-call",
    "title": "工具调用",
    "english": "Tool Call",
    "aliases": [
      "Tool Call",
      "Tool Call"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "模型或程序提出工具名称与参数，由执行系统校验并运行。",
    "principle": "",
    "example": "请求 get_order(id=123)，运行后将结果回传模型。",
    "boundary": "提出调用、实际执行和任务完成是不同事件。",
    "source": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview"
  },
  {
    "id": "virtual-environment",
    "title": "Python 虚拟环境",
    "english": "Virtual Environment",
    "aliases": [
      "venv",
      "虚拟环境"
    ],
    "category": "工程与依赖",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "将项目使用的 Python 包环境与其他项目隔离的机制。",
    "principle": "venv 创建独立环境目录，安装的依赖通常只作用于该环境。",
    "example": "项目 A 与 B 分别安装不同版本的同一 Python 包。",
    "boundary": "依赖隔离不是安全沙箱，也不自动固定所有依赖版本。",
    "source": "https://docs.python.org/3/library/venv.html"
  },
  {
    "id": "workflow",
    "title": "工作流",
    "english": "Workflow",
    "aliases": [
      "Workflow",
      "Workflow"
    ],
    "category": "Agent 与协议",
    "status": "已核验",
    "checked": "2026-10-13",
    "definition": "通过定义的步骤与控制关系组织任务执行的流程。",
    "principle": "",
    "example": "读取数据、校验、写回按预设顺序执行。",
    "boundary": "工作流可以包含模型节点和动态分支。",
    "source": "https://www.anthropic.com/engineering/building-effective-agents"
  }
];
