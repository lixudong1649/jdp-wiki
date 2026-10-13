const terms = globalThis.WIKI_TERMS;
const query = document.querySelector('#query'), category = document.querySelector('#category');
const results = document.querySelector('#results'), count = document.querySelector('#count');
const el = (tag, text, className) => {const n=document.createElement(tag); if(text!==undefined)n.textContent=text; if(className)n.className=className; return n;};
for (const c of [...new Set(terms.map(t=>t.category))].sort()) {const o=el('option',c);o.value=c;category.append(o);}
const descriptions = {'AI 与知识':'知识检索、模型上下文与文本单元','Agent 与协议':'智能体执行、工具、技能和通信协议','Python 基础':'语言、类型、函数与程序组织','工程与依赖':'依赖管理、接口和工程约定','评测与测试':'任务、评分和执行结果验证'};
const categoryNav = document.querySelector('#category-nav');
const categoryButtons = new Map();
for (const name of ['', ...new Set(terms.map(t => t.category))].sort()) {
  const total = name ? terms.filter(t=>t.category===name).length : terms.length;
  const button = el('button', undefined, 'category-card');button.type='button';
  button.append(el('strong',name||'全部分类'),el('span',`${total} 个术语`,'category-count'),el('small',descriptions[name]||'跨分类查看全部通用术语'));
  button.setAttribute('aria-pressed','false');
  button.addEventListener('click',()=>{category.value=name;render();});
  categoryButtons.set(name,button);categoryNav.append(button);
}
const params=new URLSearchParams(location.search);query.value=params.get('q')||'';category.value=params.get('category')||'';
function render() {
  const found=WikiSearch.search(terms,query.value,category.value);results.replaceChildren();
  count.textContent=`找到 ${found.length} 个术语 / 共 ${terms.length} 个术语`;
  for (const [name,button] of categoryButtons) button.setAttribute('aria-pressed',String(category.value===name));
  const breadcrumb=document.querySelector('#breadcrumb');breadcrumb.replaceChildren(el('span','知识库'),el('span','/'),el('strong',category.value||'全部分类'));
  document.querySelector('#result-title').textContent=category.value||'全部术语';
  document.querySelector('#result-context').textContent=query.value.trim()?`当前搜索：${query.value.trim()}`:(descriptions[category.value]||'选择分类，或使用名称、英文、缩写查找');document.querySelector('#empty').hidden=found.length>0;
  for(const t of found) {
    const card=el('article');card.id=t.id;card.append(el('span',t.category+' · '+t.status,'meta'));
    const heading=el('h3'),link=el('a',t.title);link.href='#'+t.id;heading.append(link);card.append(heading,el('p',t.english,'english'),el('p',t.definition),el('p','别名：'+[...new Set(t.aliases)].join('、'),'aliases'));
    const details=el('details');details.append(el('summary','查看原理、例子与来源'));
    for(const [label,value] of [['解释',t.principle],['例子',t.example],['边界',t.boundary]])if(value)details.append(el('p',label+'：'+value));
    const source=el('a','官方文档／论文 ↗');const url=new URL(t.source);if(url.protocol==='https:'){source.href=url.href;source.target='_blank';source.rel='noopener noreferrer';}
    const article=el('a','独立条目 ↗');article.href='https://github.com/lixudong1649/jdp-wiki/blob/main/content/terms/'+t.id+'.md';article.target='_blank';article.rel='noopener noreferrer';details.append(source,el('span',' · '),article,el('p','核验：'+t.checked+' · 标识：'+t.id));card.append(details);results.append(card);
  }
}
function focusTerm() {
  const id=location.hash.slice(1);document.querySelector('#link-status').textContent='';if(!id)return;
  const term=terms.find(t=>t.id===id);if(!term){document.querySelector('#link-status').textContent='该条目标识不存在。';return;}
  query.value='';category.value=term.category;render();const card=document.getElementById(id);card.querySelector('details').open=true;card.scrollIntoView({block:'start'});
}
query.addEventListener('input',render);category.addEventListener('change',render);
document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();render();});
document.querySelector('form').addEventListener('reset',()=>{query.value='';category.value='';render();});
window.addEventListener('hashchange',focusTerm);render();focusTerm();
