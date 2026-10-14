# jdp-wiki

以可查证的知识条目为核心的 Wiki、百科与术语知识库，帮助读者理解“是什么、为什么、怎样使用、与相关概念有什么区别”。

更新：2026-10-13。已落地 88 个独立通用术语条目与静态检索；编辑、审核与版本管理后台仍在规划中。

作者：Xudong Li（[lixudong1649](https://github.com/lixudong1649)） · 网站：[lixudong1649.github.io/jdp-wiki](https://lixudong1649.github.io/jdp-wiki/) · 反馈：[GitHub Issues](https://github.com/lixudong1649/jdp-wiki/issues) · 许可：代码 MIT，条目正文 CC BY 4.0（见 [许可与声明](#许可与声明)）

## 职责与边界

- 统一维护各项目可公开、可复用的通用概念、缩写和术语；项目文档引用条目，避免重复维护定义。
- 私有概念、内部规则、客户资料、凭据和项目专属设计留在所属项目，不自动汇入百科。
- 先从技术、AI、GIS 与知识工程开展试点，长期可扩展至其他领域。
- 借鉴 Wikipedia、百度百科、抖音百科的条目、消歧与导航体验；内容须注明来源，原创例子与观点须标识。
- 私人知识库 jiudingpeng 独立维护；blog 承载作者文章；home/profile 承载展示；jdp-rag 承载检索实验。

## 首版与开发阶段

首版形成阅读、搜索、编辑、审核发布和纠错闭环，支持分类、别名、消歧、来源、版本回退、撤回与备份。先管理员维护、读者反馈，暂不开展匿名直发、AI 自动发布、全量知识图谱或大规模跨项目迁移。

阶段：样本与选型 → 阅读检索与术语迁移试点 → 内容维护 → 扩展复用与协作。具体验收与范围见以下文档。

| 文档／目录 | 职责 |
| --- | --- |
| [项目目的](purpose.md) | 目标、关键问题与范围 |
| [术语检索](https://lixudong1649.github.io/jdp-wiki/terms/) | 浏览器直接打开；检索名称、别名、正文并查看来源 |
| [术语迁移](docs/term-migration.md) | 通用定义归并、原项目外链和信息保留规则 |
| [检索页面说明](docs/term-search.md) | 当前功能、文件职责、运行与限制 |
| [产品需求](docs/requirements.md) | 功能、权限与验收要求 |
| [开发规划](docs/roadmap.md) | 阶段、架构建议与交付门槛 |
| [实验内容规范](schema.md) | 既有 LLM Wiki 页面类型与链接规则 |
| raw/、wiki/、tools/ | 已有导入样本、知识页面与实验工具，继续保留 |
| [Agent 探索经验](docs/research/agent-exploration.md) | 既有探索介绍与实践表达 |
| [AI 落地生态](AI落地生态.md) | GitHub 原有生态资料，具体状态需逐项核验 |

## 网站（VitePress）

在线：https://lixudong1649.github.io/jdp-wiki/ 。基于 [VitePress](https://vitepress.dev/)：首页、分类侧边栏、每个术语独立页面、本页目录、深色模式、移动端适配，以及支持中文的本地全文搜索（按 `/` 或 Ctrl+K）。

```bash
npm ci          # 安装依赖
npm run dev     # 本地预览 http://localhost:5173/jdp-wiki/
npm run build   # 生成 web/.vitepress/dist
```

推送 `main` 后 GitHub Actions（`.github/workflows/pages.yml`）自动构建并发布到 Pages，无需手动同步 gh-pages。只发布 `content/terms/` 中 `status: 已核验` 的条目；raw/、wiki/、tools/ 等不进入网站。详见 [检索页面说明](docs/term-search.md)。

旧版检索（site/ + scripts/build_terms.py）原样保留作参考，不再发布。

检索以 `content/terms/*.md` 为唯一正文源，构建生成静态数据后由浏览器做关键词查询。修改条目需重新构建和发布；具体流程见 [检索页面说明](docs/term-search.md)。当前保留 `/terms/` 路径，根地址自动进入该页。

## GitHub 与维护

已关联现有公开仓库 [lixudong1649/jdp-wiki](https://github.com/lixudong1649/jdp-wiki)，本地与远端名称统一为 jdp-wiki，原仓库名为 jdpWiki。原有内容与提交历史保留。

仓库遵循 `jdp-` 前缀、小写英文及中划线分词；这是本生态约定，不是 GitHub 强制规则。改名后 Pages 入口为 https://lixudong1649.github.io/jdp-wiki/ ，旧 Pages 地址不自动重定向；术语检索入口为 [terms/](https://lixudong1649.github.io/jdp-wiki/terms/)，其余百科维护功能仍在规划。

每项实验记录目的、依赖、运行方式、结果与限制；区分计划、已有文件与经过验证的能力。发布前筛选、脱敏并核对授权，禁止提交密钥、私人数据和无必要临时产物。代码采用 MIT（[LICENSE](LICENSE)），条目正文采用 CC BY 4.0（[LICENSE-CONTENT.md](LICENSE-CONTENT.md)）；第三方内容沿用各自许可。

## 维护、版权与项目声明

- 维护者：[lixudong1649](https://github.com/lixudong1649)。
- 项目地址：[项目仓库](https://github.com/lixudong1649/jdp-wiki)
- 公开状态：公开源码仓库；网站可访问性与源码可见性分别判断。
- 授权：代码采用 [MIT](LICENSE)；`content/terms/` 条目正文采用 [CC BY 4.0](LICENSE-CONTENT.md)，转载与改编需署名并附原文与许可链接。raw/、wiki/ 等其他资料及第三方内容不在上述授权范围内，沿用各自权利人的声明。
- Copyright (c) 2026 lixudong1649，仅限本仓新增原创贡献；既有作品及第三方部分版权归各自权利人，原有版权头与许可优先保留。

本项目以学习、实践与解决真实问题为目标，支持开源与知识分享，尊重隐私、创造者权益及不同文化，倡导诚实、负责的协作。项目能力与维护承诺以实际文档和验证结果为准。此声明不代替许可证，也不自动授予第三方作品权利。

## 许可与声明

© 2026 [Xudong Li](https://github.com/lixudong1649)

| 范围 | 许可 |
|---|---|
| 代码：`scripts/`、`site/`、`web/.vitepress/`、`.github/` | [MIT](LICENSE) |
| 条目正文：`content/terms/` 等文字内容 | [CC BY 4.0](LICENSE-CONTENT.md) |

开发者联系：[GitHub 主页](https://github.com/lixudong1649)。与所提及产品、组织无隶属关系，相关商标归各自所有者所有；第三方依赖（VitePress 等）遵循各自许可。网站内完整声明见 [关于](https://lixudong1649.github.io/jdp-wiki/about)。
