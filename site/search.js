/* 浏览器与 Node 共用检索逻辑。 */
(function (root) {
  const normalize = value => String(value ?? '').normalize('NFKC').toLowerCase().trim();
  function search(terms, query = '', category = '') {
    const q = normalize(query), words = q.split(/\s+/).filter(Boolean);
    return terms.filter(t => !category || t.category === category).map(t => {
      const names = [t.id, t.title, t.english, ...t.aliases].map(normalize);
      const body = normalize([t.definition, t.principle, t.example, t.boundary].join(' '));
      const text = [...names, body].join(' ');
      if (!words.every(word => text.includes(word))) return null;
      const score = !q ? 0 : names.includes(q) ? 100 : names.some(n => n.startsWith(q)) ? 80 : names.some(n => n.includes(q)) ? 60 : 20;
      return { term: t, score };
    }).filter(Boolean).sort((a,b) => b.score-a.score || a.term.id.localeCompare(b.term.id)).map(x => x.term);
  }
  root.WikiSearch = { search };
  if (typeof module !== 'undefined') module.exports = root.WikiSearch;
})(globalThis);
