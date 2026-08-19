import { ArrowRight, Check, Gauge, Globe2, Search, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
    [Search, "SEO Audit", "Find technical, content and on-page issues with a clear severity-based report."],
    [Target, "Keyword Tracking", "Track target keywords and see movement over time instead of checking rankings manually."],
    [Sparkles, "AI Recommendations", "Get explanations and next steps tailored to the issues discovered on your website."],
    [Gauge, "Performance", "Understand performance signals and prioritize fixes that can improve the user experience."],
    [Globe2, "Browser Analysis", "Analyze pages through real browser automation for richer SEO workflows."],
    [ShieldCheck, "Actionable Reports", "Turn raw SEO signals into a practical list of fixes your team can actually execute."],
];

export default function Features() {
    return <main className="pt-28"><section className="px-4 py-20 sm:px-6 sm:py-28"><div className="mx-auto max-w-4xl text-center"><p className="eyebrow">Platform capabilities</p><h1 className="text-5xl font-semibold tracking-[-.04em] sm:text-7xl">Everything you need to <span className="gradient-text dm-serif italic font-normal">grow search.</span></h1><p className="section-copy mx-auto mt-6">A focused SEO workspace that combines audits, rankings, automation and AI recommendations.</p></div><div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map(([Icon,title,text])=><div key={title as string} className="rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 transition-transform"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent"><Icon size={21}/></div><h2 className="mt-6 text-xl font-semibold">{title as string}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{text as string}</p><div className="mt-7 flex items-center gap-2 text-xs font-semibold text-accent"><Check size={14}/> Built into your workflow</div></div>)}</div></section><section className="bg-muted/30 px-4 py-24 sm:px-6"><div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-foreground p-8 text-background sm:p-12"><p className="text-xs uppercase tracking-[.2em] text-background/50">Built for action</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">Less dashboard noise. More useful SEO decisions.</h2><Link to="/register" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-foreground">Try RankPilot <ArrowRight size={15}/></Link></div></section></main>;
}
