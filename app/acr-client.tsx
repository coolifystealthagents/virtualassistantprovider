'use client';
import { useEffect } from 'react';
import { flushPendingAcrLead } from './acr-lead-queue';

function slug(value:string){return value.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,48)||'action'}

export function AcrClient(){
  useEffect(()=>{
    const labelCtas=()=>{
      const used=new Set<string>();
      document.querySelectorAll<HTMLElement>('a[href],button:not([type="submit"]),[role="button"]').forEach((el)=>{
        if(el.closest('form')||el.id.startsWith('cta-')){if(el.id)used.add(el.id);return}
        const scope=el.closest('header')?'global-header':el.closest('footer')?'global-footer':slug(location.pathname==='/'?'home':location.pathname);
        const raw=slug(el.textContent||el.getAttribute('aria-label')||el.getAttribute('href')||'action');
        let id=`cta-${scope}-${raw}`,n=2;
        while(used.has(id)||document.getElementById(id))id=`cta-${scope}-${raw}-${n++}`;
        el.id=id;used.add(id);
      });
      document.querySelectorAll<HTMLIFrameElement>('iframe[src*="oncehub.com"],iframe[src*="scheduleonce.com"]').forEach(frame=>{
        const wrapper=frame.parentElement;
        if(wrapper&&!wrapper.dataset.acrTrack)wrapper.dataset.acrTrack='contact-booking-iframe';
      });
    };
    labelCtas();
    const observer=new MutationObserver(labelCtas);
    observer.observe(document.documentElement,{childList:true,subtree:true});

    let retryTimer: number | undefined;
    let stopTimer: number | undefined;
    const flush = () => {
      if (flushPendingAcrLead() !== 'waiting' && retryTimer) window.clearInterval(retryTimer);
    };
    const initial = flushPendingAcrLead();
    if (initial === 'waiting') {
      retryTimer = window.setInterval(flush, 100);
      stopTimer = window.setTimeout(() => retryTimer && window.clearInterval(retryTimer), 30000);
    }
    return()=>{
      observer.disconnect();
      if (retryTimer) window.clearInterval(retryTimer);
      if (stopTimer) window.clearTimeout(stopTimer);
    };
  },[]);
  return null;
}
