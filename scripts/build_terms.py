"""从唯一 Markdown 正文生成静态检索数据；只读 content/terms。"""
from pathlib import Path
import json, re, sys
root = Path(__file__).resolve().parents[1]
terms=[]
for p in sorted((root/'content/terms').glob('*.md')):
    _,front,body=p.read_text(encoding='utf-8').split('---',2)
    t={k:json.loads(v.strip()) for k,v in (line.split(':',1) for line in front.strip().splitlines())}
    if t['status'] != '已核验': continue
    assert p.stem == t['id'] and re.fullmatch(r'[a-z0-9-]+',t['id'])
    for key,label in [('definition','定义'),('principle','解释'),('example','例子'),('boundary','边界')]:
        match=re.search(r'^## '+label+r'\n\n(.*?)(?=\n## |\Z)',body,re.M|re.S)
        t[key]=match.group(1).strip() if match else ''
    source=re.search(r'\[官方文档／规范／论文\]\((https://[^)]+)\)',body)
    assert source and t['definition'],p
    t['source']=source.group(1)
    assert '/Users/' not in json.dumps(t,ensure_ascii=False),p
    terms.append(t)
assert len({t['id'] for t in terms}) == len(terms)
output='/* 自动生成：修改 content/terms/*.md 后运行 scripts/build_terms.py。 */\nglobalThis.WIKI_TERMS = '+json.dumps(terms,ensure_ascii=False,indent=2)+';\n'
p=root/'site/terms.js'
if '--check' in sys.argv:
    assert p.read_text(encoding='utf-8') == output,'检索数据未同步'
else: p.write_text(output,encoding='utf-8')
print(f'{len(terms)} 个条目：正文、ID、来源与索引一致。')
