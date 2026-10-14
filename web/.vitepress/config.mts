import { defineConfig } from 'vitepress'
import sidebar from './sidebar.json'

// 中文检索：CJK 连续文本拆为单字 + 双字（bigram），英文按词；索引与查询共用同一分词。
// 注意：函数会被序列化到浏览器端，必须自包含、不引用外部变量。
const tokenize = (text: string) => {
  const out: string[] = []
  const parts = String(text).toLowerCase().match(/[\u3400-\u9fff\uf900-\ufaff]+|[a-z0-9_\-.]+/g) || []
  for (const p of parts) {
    if (/[\u3400-\u9fff\uf900-\ufaff]/.test(p)) {
      for (let i = 0; i < p.length; i++) {
        out.push(p[i])
        if (i + 1 < p.length) out.push(p.slice(i, i + 2))
      }
    } else out.push(p)
  }
  return out
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'jdp-wiki',
  description: '可查证的通用术语知识库',
  base: '/jdp-wiki/',
  cleanUrls: true,
  lastUpdated: false,
  head: [['meta', { name: 'theme-color', content: '#3b82f6' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '术语索引', link: '/terms/' },
      { text: 'GitHub', link: 'https://github.com/lixudong1649/jdp-wiki' }
    ],
    sidebar: { '/terms/': [{ text: '术语索引', link: '/terms/' }, ...sidebar] },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色',
    darkModeSwitchTitle: '切换到深色',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    footer: { message: '内容须注明来源；授权待定，未经许可不默认允许再分发。', copyright: '© 2026 lixudong1649' },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: { tokenize },
          searchOptions: { tokenize, combineWith: 'AND', prefix: true, fuzzy: false, boost: { title: 4, text: 2, titles: 1 } }
        },
        translations: {
          button: { buttonText: '搜索术语', buttonAriaLabel: '搜索术语' },
          modal: {
            displayDetails: '显示详情', resetButtonTitle: '清除', backButtonTitle: '关闭',
            noResultsText: '没有找到结果', footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    }
  }
})
