#!/usr/bin/env python3
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import sys

SLUG = 'ecommerce-virtual-assistant-philippines'
EXPECTED_H1 = 'Ecommerce virtual assistant Philippines: store operations guide'
MARKER = 'ecommerce-philippines-v1'
CANONICAL = f'https://virtualassistantprovider.com/blog/{SLUG}'

class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.article_depth = 0
        self.skip_depth = 0
        self.in_p = False
        self.p_in_quote = False
        self.p_parts = []
        self.paragraphs = []
        self.text = []
        self.h1_parts = []
        self.in_h1 = False
        self.links = []
        self.counts = {'table': 0, 'svg': 0, 'blockquote': 0, 'banner': 0}
        self.banner_slots = set()
        self.in_sources = False
        self.sources_ol = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = set(attrs.get('class', '').split())
        if tag == 'article' and attrs.get('data-article-marker') == MARKER:
            self.article_depth = 1
            return
        if not self.article_depth:
            return
        self.article_depth += 1
        if tag in {'script', 'style'}:
            self.skip_depth += 1
        if tag == 'h1':
            self.in_h1 = True
        if tag == 'p':
            self.in_p = True
            self.p_in_quote = self.counts['blockquote'] > 0
            self.p_parts = []
        if tag in self.counts:
            self.counts[tag] += 1
        if 'article-banner' in classes:
            self.counts['banner'] += 1
            for slot in ('top', 'middle', 'bottom'):
                if f'article-banner-{slot}' in classes:
                    self.banner_slots.add(slot)
        if 'numbered-sources' in classes:
            self.in_sources = True
        if tag == 'ol' and self.in_sources:
            self.sources_ol += 1
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])

    def handle_endtag(self, tag):
        if not self.article_depth:
            return
        if tag == 'p' and self.in_p:
            text = ' '.join(''.join(self.p_parts).split())
            if text:
                self.paragraphs.append((text, self.p_in_quote))
            self.in_p = False
            self.p_parts = []
        if tag == 'h1':
            self.in_h1 = False
        if tag in {'script', 'style'} and self.skip_depth:
            self.skip_depth -= 1
        if tag == 'section' and self.in_sources:
            self.in_sources = False
        self.article_depth -= 1

    def handle_data(self, data):
        if not self.article_depth or self.skip_depth:
            return
        self.text.append(data)
        if self.in_h1:
            self.h1_parts.append(data)
        if self.in_p:
            self.p_parts.append(data)


def sentence_count(text):
    text = re.sub(r'\b(?:U\.S|e\.g|i\.e)\.', lambda m: m.group(0).replace('.', ''), text)
    return len(re.findall(r'[.!?](?:["\']|$|\s)', text))

path = Path('.next/server/app/blog') / f'{SLUG}.html'
html = path.read_text(encoding='utf-8')
parser = AuditParser()
parser.feed(html)
visible = ' '.join(' '.join(parser.text).split())
words = re.findall(r"\b[\w%'-]+\b", visible)
h1 = ' '.join(''.join(parser.h1_parts).split())
internal = sorted({u for u in parser.links if u.startswith('/')})
external = sorted({u for u in parser.links if u.startswith('http')})
paragraph_failures = [(sentence_count(p), p[:120]) for p, quote in parser.paragraphs if not quote and sentence_count(p) not in (2, 3)]
forbidden_words = sorted({m.group(0).lower() for m in re.finditer(r'\b(?:pricing|prices?|rates?|tiers?)\b', visible, re.I)})
forbidden_hrefs = sorted({u for u in parser.links if re.search(r'/pricing(?:/|$|[?#])', u, re.I)})
required_stats = all(x in visible for x in ('75.211%', '77.867%', '67.263%', '2022', '2023', '2024'))
required_quote = 'The CSF has been a vital tool for many organizations' in visible
schema_ok = all(x in html for x in ('BlogPosting', 'FAQPage', 'BreadcrumbList'))
canonical_ok = f'rel="canonical" href="{CANONICAL}"' in html
sitemap = Path('.next/server/app/sitemap.xml.body').read_text(encoding='utf-8')
sitemap_ok = f'/blog/{SLUG}' in sitemap
internal_missing = []
for href in internal:
    route = href.split('#', 1)[0].split('?', 1)[0]
    if route in ('', '/'):
        continue
    base = Path('.next/server/app') / route.lstrip('/')
    candidates = [base.with_suffix('.html'), base / 'index.html', Path(str(base) + '.html')]
    if not any(c.exists() for c in candidates):
        internal_missing.append(href)
report = {
    'slug': SLUG,
    'article_words': len(words),
    'h1': h1,
    'marker': MARKER in html,
    'canonical': canonical_ok,
    'counts': parser.counts,
    'banner_slots': sorted(parser.banner_slots),
    'numbered_sources_lists': parser.sources_ol,
    'internal_links': internal,
    'external_links': external,
    'internal_missing': internal_missing,
    'paragraph_sentence_failures': paragraph_failures,
    'required_stats': required_stats,
    'required_quote': required_quote,
    'schema': schema_ok,
    'sitemap': sitemap_ok,
    'forbidden_words': forbidden_words,
    'forbidden_hrefs': forbidden_hrefs,
}
print(json.dumps(report, indent=2))
checks = [
    1500 <= len(words) <= 2000,
    h1 == EXPECTED_H1,
    MARKER in html,
    canonical_ok,
    parser.counts == {'table': 1, 'svg': 2, 'blockquote': 1, 'banner': 3},
    parser.banner_slots == {'top', 'middle', 'bottom'},
    parser.sources_ol == 1,
    len(internal) >= 3,
    len(external) >= 4,
    not internal_missing,
    not paragraph_failures,
    required_stats,
    required_quote,
    schema_ok,
    sitemap_ok,
    not forbidden_words,
    not forbidden_hrefs,
]
sys.exit(0 if all(checks) else 1)
