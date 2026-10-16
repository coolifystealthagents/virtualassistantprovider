import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-content';
import { serviceDetails } from '../../service-details';

const baseUrl = 'https://virtualassistantprovider.com';
export function generateStaticParams(){return fleetServices.map((s)=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const service=fleetServices.find((s)=>s.slug===slug);
  if(!service)return {};
  const canonical=`${baseUrl}/services/${service.slug}`;
  return {title:`${service.title} | Philippines staffing`,description:service.summary,alternates:{canonical},openGraph:{title:service.title,description:service.summary,url:canonical,type:'website',images:[{url:`${baseUrl}${service.heroImage}`,alt:service.heroImageAlt}]}};
}
export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const service=fleetServices.find((s)=>s.slug===slug); if(!service)notFound();
  const detail=serviceDetails[service.slug]; if(!detail)notFound();
  const related=detail.related.map((item)=>fleetServices.find((candidate)=>candidate.slug===item)).filter(Boolean);
  const canonical=`${baseUrl}/services/${service.slug}`;
  const schema={
    '@context':'https://schema.org','@graph':[
      {'@type':'Service',name:service.title,description:service.summary,url:canonical,areaServed:'Worldwide',provider:{'@type':'Organization',name:'Virtual Assistant Provider',url:baseUrl}},
      {'@type':'FAQPage',mainEntity:detail.faq.map((item)=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))},
      {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:baseUrl},{'@type':'ListItem',position:2,name:'Services',item:`${baseUrl}/services`},{'@type':'ListItem',position:3,name:service.title,item:canonical}]},
    ],
  };
  return <><Header/><main className="fleet-main service-detail-page"><JsonLd data={schema}/>
    <section className="fleet-hero"><div className="container service-hero-grid"><div><p className="eyebrow">Philippines staffing service</p><h1>{service.title}</h1><p className="lead">{service.summary}</p><a className="btn primary" href="/contact-us">Plan this role</a></div><figure className="service-hero-image"><img src={service.heroImage} alt={service.heroImageAlt} width="1200" height="675"/><figcaption>A practical scope starts with tasks, source systems, approvals, and exception owners.</figcaption></figure></div></section>
    <section className="section"><div className="container service-reading-grid"><div><p className="eyebrow">Who this is for</p><h2>A defined support lane, not an all-purpose hire</h2><p className="service-long-copy">{detail.whoFor}</p></div><aside className="service-boundary"><h2>What remains human-owned</h2><ul>{service.controls.map((item)=><li key={item}>{item}</li>)}</ul></aside></div></section>
    <section className="section service-soft"><div className="container"><div className="service-section-heading"><p className="eyebrow">Scope and outputs</p><h2>What goes in and what should come back</h2></div><div className="service-two-column"><article><h3>Inputs required</h3><ul>{detail.inputs.map((item)=><li key={item}>{item}</li>)}</ul></article><article><h3>Deliverables</h3><ul>{detail.deliverables.map((item)=><li key={item}>{item}</li>)}</ul></article></div></div></section>
    <section className="section"><div className="container"><div className="service-section-heading"><p className="eyebrow">Day-to-day workflow</p><h2>Typical tasks with explicit review points</h2></div><div className="service-task-list">{service.tasks.map((item,index)=><article key={item}><span>{index+1}</span><p>{item}</p></article>)}</div></div></section>
    <section className="section service-ink"><div className="container service-reading-grid"><div><p className="eyebrow">Quality controls</p><h2>Review evidence, not just activity</h2><ul>{service.controls.map((item)=><li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Launch workflow</p><h2>Start narrow and widen after proof</h2><ol>{service.launch.map((item)=><li key={item}>{item}</li>)}</ol></div></div></section>
    <section className="section"><div className="container service-scenario"><p className="eyebrow">Example scenario</p><h2>{detail.scenario.title}</h2><p>{detail.scenario.body}</p></div></section>
    <section className="section service-soft"><div className="container service-faq"><p className="eyebrow">Frequently asked questions</p><h2>Questions to settle before access is granted</h2>{detail.faq.map((item)=><details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>
    <section className="section"><div className="container"><div className="service-section-heading"><p className="eyebrow">Related services</p><h2>Compare adjacent support lanes</h2></div><div className="fleet-card-grid">{related.map((item)=>item?<a className="fleet-card" href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.summary}</p><strong>View service</strong></a>:null)}</div></div></section>
    <div className="container"><CTA/></div>
  </main><Footer/></>;
}
