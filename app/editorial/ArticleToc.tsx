'use client';

import { useEffect, useState } from 'react';
import styles from './editorial.module.css';

export type TocItem = { id: string; label: string; level: 2 | 3 };

function TocLinks({ items, activeId }: { items: readonly TocItem[]; activeId: string }) {
  return (
    <ol className={styles.tocList}>
      {items.map((item) => (
        <li className={item.level === 3 ? styles.tocChild : undefined} key={item.id}>
          <a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>{item.label}</a>
        </li>
      ))}
    </ol>
  );
}

export function ArticleToc({ items }: { items: readonly TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const headings = items.map((item) => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node));
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
        else visible.delete(entry.target.id);
      }
      const nearest = [...visible].sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]))[0];
      if (nearest) setActiveId(nearest[0]);
    }, { rootMargin: '-112px 0px -62% 0px', threshold: [0, 1] });
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <nav className={styles.desktopToc} aria-label="Table of contents">
        <h2>On this page</h2>
        <TocLinks items={items} activeId={activeId} />
      </nav>
      <details className={styles.mobileToc}>
        <summary>Table of contents</summary>
        <nav aria-label="Mobile table of contents"><TocLinks items={items} activeId={activeId} /></nav>
      </details>
    </>
  );
}
