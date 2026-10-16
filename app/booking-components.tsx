'use client';

import { useEffect, useRef } from 'react';
import provenance from './review-provenance.json';

export const stealthAgentsReviews = provenance.reviews;

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleId = contact ? 'contact-client-reviews' : 'booking-client-reviews';

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!viewport || !track || reducedMotion.matches) return;

    let frame = 0;
    let previous = performance.now();
    let offset = 0;
    let paused = false;

    const render = (now: number) => {
      const elapsed = Math.min(now - previous, 50);
      previous = now;
      if (!paused) {
        offset += elapsed * 0.025;
        const first = track.firstElementChild as HTMLElement | null;
        if (first) {
          const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0');
          const step = first.getBoundingClientRect().width + gap;
          if (step > 0 && offset >= step) {
            track.appendChild(first);
            offset -= step;
          }
        }
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      frame = requestAnimationFrame(render);
    };

    const pause = () => { paused = true; };
    const resume = () => { paused = false; previous = performance.now(); };
    viewport.addEventListener('pointerenter', pause);
    viewport.addEventListener('pointerleave', resume);
    viewport.addEventListener('focusin', pause);
    viewport.addEventListener('focusout', resume);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener('pointerenter', pause);
      viewport.removeEventListener('pointerleave', resume);
      viewport.removeEventListener('focusin', pause);
      viewport.removeEventListener('focusout', resume);
      track.style.transform = '';
    };
  }, []);

  return <section className={`v3-reviews${contact ? ' v3-reviews-contact' : ''}`} aria-labelledby={titleId}>
    <div className="v3-review-heading"><div><span className="v3-review-stars" aria-hidden="true">★★★★★</span><h2 id={titleId}>{provenance.collectionLabel}</h2></div><a href={provenance.source} target="_blank" rel="noopener noreferrer">View first-party source</a></div>
    <div className="v3-review-viewport" ref={viewportRef}>
      <div className="v3-review-track" ref={trackRef}>
        {stealthAgentsReviews.map((review) => <article className="v3-review-card" key={review.id} data-review-id={review.id}>
          <div className="v3-review-stars"><span aria-hidden="true">★★★★★</span><span className="sa-sr-only">{provenance.rating}</span></div>
          <h3>{review.headline}</h3>
          <blockquote>“{review.quote}”</blockquote>
          <p><strong>{review.name}</strong><span>{review.detail}</span></p>
        </article>)}
      </div>
    </div>
  </section>;
}
