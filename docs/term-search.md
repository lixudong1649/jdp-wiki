# 术语检索页面

更新：2026-10-13。静态术语检索已实现，条目正文使用独立 Markdown；编辑、审核后台和版本界面尚未实现。

## 使用

[在线检索](https://lixudong1649.github.io/jdp-wiki/terms/)；本地直接打开 [页面](../site/index.html)。不需要安装依赖或模型，使用 HTML、CSS、原生 JavaScript。

支持中文、英文、缩写、别名、正文关键词和分类过滤；空格分隔的多词全部匹配。排序为名称／别名精确匹配、前缀、名称包含、正文匹配。暂不支持自动分词、纠错或语义检索。

点击标题用 `#稳定ID` 定位并展开，条目包含定义、可选解释／例子／边界及来源。每项链接到 GitHub 上对应独立条目；同一个概念不重复维护多份正文。

## 内容与构建

| 文件 | 职责 |
| --- | --- |
| content/terms/*.md | 唯一条目正文；元数据采用 JSON 值的有限 Frontmatter 格式 |
| scripts/build_terms.py | 只读上述目录，校验 ID、必填定义与来源，生成检索数据 |
| site/terms.js | 生成产物，不手改 |
| site/search.js | 检索与排序 |
| site/entry.html | 发布为 Pages 根目录 index.html，进入 terms/；并非本地检索入口 |
| site/app.js、index.html、styles.css | 页面交互与响应式展示 |

新增或更新条目后运行 `python3 scripts/build_terms.py`；校验同步运行 `python3 scripts/build_terms.py --check`。未知状态不纳入索引；原始导入、私有文件及会话目录不参与构建。

需本地服务时，项目根目录执行 `python3 -m http.server 8080 --directory site --bind 127.0.0.1`。网页使用相对资源路径，可部署在 Pages 的 `/terms/`，并在发布根目录增加入口 index.html，跳转至 /terms/。

## 边界与验收

目前是术语读取与检索功能，并非完整协作百科。状态“已核验”表示本次概念与来源审核，不表示后续无需更新；软件和内容许可证仍待统一确定。

验收包括中文／英文／别名、分类、多词、无结果、稳定锚点、源条目与生成数据一致性。正式外链发布后验证远端文件和页面，原项目再替换通用定义；具体见 [迁移规则](term-migration.md)。
