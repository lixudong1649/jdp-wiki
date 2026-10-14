// 由 content/terms/*.md（唯一正文源）生成 VitePress 页面与侧边栏；产物不入库。
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'content/terms')
const out = join(root, 'web/terms')
rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })

const terms = []
for (const f of readdirSync(src).filter((f) => f.endsWith('.md')).sort()) {
  const text = readFileSync(join(src, f), 'utf8')
  const [, front, ...rest] = text.split('---')
  const body = rest.join('---')
  const meta = {}
  for (const line of front.trim().split('\n')) {
    const i = line.indexOf(':')
    meta[line.slice(0, i).trim()] = JSON.parse(line.slice(i + 1).trim())
  }
  if (meta.status !== '已核验') continue
  if (`${meta.id}.md` !== f || !/^[a-z0-9-]+$/.test(meta.id)) throw new Error(`ID 不一致：${f}`)
  if (body.includes('/Users/')) throw new Error(`含本机路径：${f}`)
  terms.push({ ...meta, body })
}

const esc = (s) => String(s).replace(/[<>]/g, (c) => ({ '<': '&lt;', '>': '&gt;' })[c])
const byCat = {}
for (const t of terms) (byCat[t.category] ??= []).push(t)
const cats = Object.keys(byCat).sort((a, b) => a.localeCompare(b, 'zh-CN'))

for (const t of terms) {
  const aliases = (t.aliases || []).map(esc).join('、')
  const desc = (t.body.match(/## 定义\s*\n\n([^\n]+)/) || [])[1] || ''
  const metaBlock = [
    '<div class="term-meta">',
    t.english ? `<span class="tag">${esc(t.english)}</span>` : '',
    aliases ? `<span class="tag">别名：${aliases}</span>` : '',
    `<span class="tag cat">${esc(t.category)}</span>`,
    `<span class="tag ok">${esc(t.status)} · ${esc(t.checked)}</span>`,
    '</div>'
  ].filter(Boolean).join('\n')
  const fm = `---\ntitle: ${JSON.stringify(t.title)}\ndescription: ${JSON.stringify(desc.slice(0, 150))}\n---\n`
  // 别名与英文名作为隐藏文本进入搜索索引
  const body = t.body.replace(/^\s*# .*\n/, (h) => `${h}\n${metaBlock}\n`)
  const editLink = `\n\n---\n\n[在 GitHub 查看源条目](https://github.com/lixudong1649/jdp-wiki/blob/main/content/terms/${t.id}.md)\n`
  writeFileSync(join(out, `${t.id}.md`), fm + body.trim() + editLink)
}

let index = '---\ntitle: 术语索引\n---\n\n# 术语索引\n\n'
index += `共 ${terms.length} 个已核验条目，按分类浏览；按 <kbd>/</kbd> 或 <kbd>Ctrl</kbd>+<kbd>K</kbd> 全文搜索（支持中文、英文、别名）。\n\n`
for (const c of cats) {
  index += `## ${c}\n\n<div class="term-grid">\n\n`
  for (const t of byCat[c].sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'))) {
    const d = ((t.body.match(/## 定义\s*\n\n([^\n]+)/) || [])[1] || '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    index += `<a class="term-card" href="./${t.id}"><strong>${esc(t.title)}</strong><small>${esc(t.english || (t.aliases || []).join('、'))}</small><span>${esc(d.slice(0, 60))}${d.length > 60 ? '…' : ''}</span></a>\n`
  }
  index += '\n</div>\n\n'
}
// 兼容旧版 /terms/#<id> 链接
index += `<script setup>\nimport { onMounted } from 'vue'\nimport { withBase } from 'vitepress'\nconst ids = ${JSON.stringify(terms.map((t) => t.id))}\nonMounted(() => { const h = decodeURIComponent(location.hash.slice(1)); if (ids.includes(h)) location.replace(withBase('/terms/' + h)) })\n</script>\n`
writeFileSync(join(out, 'index.md'), index)

const sidebar = cats.map((c) => ({
  text: `${c}（${byCat[c].length}）`,
  collapsed: true,
  items: byCat[c].sort((a, b) => a.title.localeCompare(b.title, 'zh-CN')).map((t) => ({ text: t.title, link: `/terms/${t.id}` }))
}))
writeFileSync(join(root, 'web/.vitepress/sidebar.json'), JSON.stringify(sidebar, null, 2))
writeFileSync(join(root, 'web/.vitepress/stats.json'), JSON.stringify({ terms: terms.length, categories: cats.length }))
console.log(`生成 ${terms.length} 个条目页、${cats.length} 个分类。`)
