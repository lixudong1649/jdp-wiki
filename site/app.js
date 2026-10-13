const terms = globalThis.WIKI_TERMS;
const query = document.querySelector('#query'), category = document.querySelector('#category');
const results = document.querySelector('#results'), count = document.querySelector('#count');
const el = (tag, text, className) => {const n=document.createElement(tag); if(text!==undefined)n.textContent=text; if(className)n.className=className; return n;};
for (const c of [...new Set(terms.map(t=>t.category))].sort()) {const o=el('option',c);o.value=c;category.append(o);}
const params=new URLSearchParams(location.search);query.value=params.get('q')||'';category.value=params.get('category')||'';
function render() {
  const found=WikiSearch.search(terms,query.value,category.value);results.replaceChildren();
  count.textContent=`找到 ${found.length} 个术语 / 共 ${terms.length} 个术语`;document.querySelector('#empty').hidden=found.length>0;
  for(const t of found) {
    const card=el('article');card.id=t.id;card.append(el('span',t.category+' · '+t.status,'meta'));
    const heading=el('h2'),link=el('a',t.title);link.href='#'+t.id;heading.append(link);card.append(heading,el('p',t.english,'english'),el('p',t.definition),el('p','别名：'+t.aliases.join('、'),'aliases'));
    const details=el('details');details.append(el('summary','查看原理、例子与来源'));
    for(const [label,value] of [['解释',t.principle],['例子',t.example],['边界',t.boundary]])if(value)details.append(el('p',label+'：'+value));
    const source=el('a','官方文档／论文 ↗');const url=new URL(t.source);if(url.protocol==='https:'){source.href=url.href;source.target='_blank';source.rel='noopener noreferrer';}
    const article=el('a','独立条目 ↗');article.href='https://github.com/lixudong1649/jdp-wiki/blob/main/content/terms/'+t.id+'.md';article.target='_blank';article.rel='noopener noreferrer';details.append(source,el('span',' · '),article,el('p','核验：'+t.checked+' · 标识：'+t.id));card.append(details);results.append(card);
  }
}
function focusTerm() {
  const id=location.hash.slice(1);document.querySelector('#link-status').textContent='';if(!id)return;
  const term=terms.find(t=>t.id===id);if(!term){document.querySelector('#link-status').textContent='该条目标识不存在。';return;}
  query.value='';category.value='';render();const card=document.getElementById(id);card.querySelector('details').open=true;card.scrollIntoView({block:'start'});
}
query.addEventListener('input',render);category.addEventListener('change',render);
document.querySelector('form').addEventListener('submit',e=>{e.preventDefault();render();});
document.querySelector('form').addEventListener('reset',()=>{query.value='';category.value='';render();});
window.addEventListener('hashchange',focusTerm);render();focusTerm();
