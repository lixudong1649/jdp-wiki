# 术语检索页面

更新：2026-10-13。静态术语检索已实现，条目正文使用独立 Markdown；编辑、审核后台和版本界面尚未实现。

## 使用

[在线检索](https://lixudong1649.github.io/jdp-wiki/terms/)；本地直接打开 [页面](../site/index.html)。不需要安装依赖或模型，使用 HTML、CSS、原生 JavaScript。

术语上层提供显式分类导航，显示各分类条目总数、范围描述与选中状态；面包屑显示“知识库 / 当前分类”，下方列表展示当前分类和搜索条件。分类卡片与筛选框同步；直接访问条目锚点会进入所属分类并展开条目。

支持中文、英文、缩写、别名、正文关键词和分类过滤；空格分隔的多词全部匹配。排序为名称／别名精确匹配、前缀、名称包含、正文匹配。暂不支持自动分词、纠错或语义检索。

点击标题用 `#稳定ID` 定位并展开，条目包含定义、可选解释／例子／边界及来源。每项链接到 GitHub 上对应独立条目；同一个概念不重复维护多份正文。

## 检索原理

内容源是本项目 `content/terms/*.md` 中经过审核的独立条目。当前构建器只处理 `status: 已核验`；不会自动把其他项目或仓库里的所有 Markdown 收进搜索。

```mermaid
flowchart LR
    M[独立 Markdown 条目] --> B[构建脚本提取字段与正文]
    B --> D[生成 site/terms.js]
    D --> P[发布到 GitHub Pages]
    P --> S[浏览器关键词匹配与分类过滤]
```

构建时读取 ID、标题、英文名、别名、分类和核验状态，并提取“定义、解释、例子、边界”四段正文。来源链接用于阅读追溯，不参与关键词匹配。生成数据是派生文件，正文只维护 Markdown。

访问时浏览器加载已发布的条目数据，在本机内存中检索，不实时下载或解析每份 Markdown。输入先统一全角／半角和大小写；空格分隔的词必须全部命中，再按名称／别名精确匹配、前缀、名称包含、正文匹配排序，同分按 ID 排序。

当前是小规模静态关键词检索，没有服务器查询、向量数据库、Embedding 或模型调用；没有自动中文分词、模糊纠错或语义召回。分类先过滤候选，分类数量展示该分类全部条目数，结果数量随搜索条件变化。

## 内容与构建

| 文件 | 职责 |
| --- | --- |
| content/terms/*.md | 唯一条目正文；元数据采用 JSON 值的有限 Frontmatter 格式 |
| scripts/build_terms.py | 只读上述目录，校验 ID、必填定义与来源，生成检索数据 |
| site/terms.js | 生成产物，不手改 |
| site/search.js | 检索与排序 |
| site/entry.html | 发布为 Pages 根目录 index.html，进入 terms/；并非本地检索入口 |
| site/app.js、index.html、styles.css | 页面交互与响应式展示 |

新增或更新条目后运行 `python3 scripts/build_terms.py`；校验同步运行 `python3 scripts/build_terms.py --check`。随后提交正文与生成数据，把 `site/` 的检索文件同步到 `gh-pages` 的 `terms/` 并推送，等待 Pages 构建完成再验证。当前发布是手动步骤，单独修改或推送 Markdown 不会自动更新网页索引。未知状态不纳入索引；原始导入、私有文件及会话目录不参与构建。

需本地服务时，项目根目录执行 `python3 -m http.server 8080 --directory site --bind 127.0.0.1`。网页使用相对资源路径，可部署在 Pages 的 `/terms/`，并在发布根目录增加入口 index.html，跳转至 /terms/。

## 边界与验收

目前是术语读取与检索功能，并非完整协作百科。状态“已核验”表示本次概念与来源审核，不表示后续无需更新；软件和内容许可证仍待统一确定。

验收包括中文／英文／别名、分类、多词、无结果、稳定锚点、源条目与生成数据一致性。正式外链发布后验证远端文件和页面，原项目再替换通用定义；具体见 [迁移规则](term-migration.md)。

## Pages 发布说明

本项目发布分支根目录保留空标记文件 `.nojekyll`，让 Pages 跳过 Jekyll 构建并直接服务已生成的静态文件。它不关闭网站、不自动生成首页；根目录仍需 `index.html`。当前按用户确认保留 `/terms/`：检索文件发布到 `terms/`，根入口跳转至此。该子路径是项目组织选择，不是 Pages 强制要求。见 [GitHub 官方建站说明](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。
