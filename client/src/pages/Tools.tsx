import { ArrowRight, BarChart3, Gauge, Search, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
    { icon: Search, title: "SEO Analyzer", text: "Run a detailed audit and discover the issues affecting your website.", path: "/analyze" },
    { icon: Target, title: "Rank Tracker", text: "Track keywords, positions and ranking movement from one place.", path: "/rank-tracker" },
    { icon: Sparkles, title: "AI SEO Insights", text: "Turn SEO findings into clear, prioritized recommendations.", path: "/register" },
    { icon: Gauge, title: "Performance", text: "Understand performance and identify high-impact optimization opportunities.", path: "/register" },
    { icon: BarChart3, title: "SEO Reports", text: "Review analysis results and keep your SEO work organized.", path: "/register" },
];

export default function Tools() {
    return <main className="pt-28"><section className="px-4 py-20 sm:px-6 sm:py-28"><div className="mx-auto max-w-4xl text-center"><p className="eyebrow">SEO toolkit</p><h1 className="text-5xl font-semibold tracking-[-.04em] sm:text-7xl">Your SEO stack, <span className="gradient-text dm-serif italic font-normal">one workspace.</span></h1><p className="section-copy mx-auto mt-6">Use the tools you need today and keep everything connected as your SEO workflow grows.</p></div><div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2">{tools.map(({icon:Icon,title,text,path},i)=><Link key={title} to={path} className={`group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl ${i===0?'md:col-span-2':''}`}><div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent"><Icon size={21}/></div><ArrowRight className="text-muted-foreground transition-transform group-hover:translate-x-1" size={19}/></div><h2 className="mt-8 text-2xl font-semibold">{title}</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{text}</p><div className="mt-7 text-xs font-semibold text-accent">Open tool →</div></Link>)}</div></section></main>;
}
