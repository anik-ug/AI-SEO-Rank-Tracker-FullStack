import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    Check,
    ChevronRight,
    Gauge,
    Globe2,
    LineChart,
    Search,
    ShieldCheck,
    Sparkles,
    Target,
    Zap,
} from "lucide-react";

const features = [
    { icon: Search, title: "Deep SEO audits", text: "Scan technical, on-page and performance signals and turn them into a clear priority list." },
    { icon: Target, title: "Rank tracking", text: "Monitor target keywords and understand which pages are gaining or losing visibility." },
    { icon: Sparkles, title: "AI recommendations", text: "Get practical recommendations instead of generic SEO advice, powered by Gemini AI." },
    { icon: Gauge, title: "Performance insights", text: "Understand the health of your website with simple scores and meaningful metrics." },
    { icon: Globe2, title: "Real browser analysis", text: "Use Browserbase-powered automation for web analysis that goes beyond static requests." },
    { icon: ShieldCheck, title: "Actionable reports", text: "Know what to fix first, why it matters, and how to improve it." },
];

export default function Home() {
    const [url, setUrl] = useState("");
    const navigate = useNavigate();

    const analyze = (e: FormEvent) => {
        e.preventDefault();
        if (!url.trim()) return;
        navigate(`/analyze?url=${encodeURIComponent(url.trim())}`);
    };

    return (
        <main className="overflow-hidden pt-24">
            <section className="relative px-4 sm:px-6">
                <div className="absolute inset-x-0 top-0 -z-10 h-[700px] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,.18),transparent_55%)]" />
                <div className="mx-auto max-w-7xl pt-16 pb-20 sm:pt-24 sm:pb-28">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-2 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent"><Sparkles size={12} /></span>
                            AI-powered SEO intelligence for modern websites
                        </div>
                        <h1 className="text-5xl font-semibold tracking-[-0.045em] text-foreground sm:text-6xl md:text-7xl lg:text-[82px] lg:leading-[.98]">
                            Turn your website into a
                            <span className="block gradient-text dm-serif italic font-normal">search growth engine.</span>
                        </h1>
                        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                            RankPilot audits your website, tracks keywords and uses AI to tell you exactly what to improve next.
                        </p>

                        <form onSubmit={analyze} className="mx-auto mt-9 max-w-2xl rounded-2xl border border-border bg-card p-2 shadow-xl shadow-blue-500/5">
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <div className="flex min-h-12 flex-1 items-center gap-3 px-3">
                                    <Search size={18} className="text-muted-foreground" />
                                    <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter your website, e.g. example.com" className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" />
                                </div>
                                <button className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5">
                                    Analyze website <ArrowRight size={16} />
                                </button>
                            </div>
                        </form>
                        <p className="mt-4 text-xs text-muted-foreground">No credit card required · Start with a free analysis</p>
                    </div>

                    <div className="mx-auto mt-16 max-w-5xl">
                        <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-2xl shadow-black/10">
                            <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-3">
                                <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-green-400/70" /></div>
                                <div className="rounded-lg border border-border bg-background px-5 py-1.5 text-[10px] text-muted-foreground">app.rankpilot.local/dashboard</div>
                                <div className="w-12" />
                            </div>
                            <div className="grid gap-0 md:grid-cols-[190px_1fr]">
                                <aside className="hidden border-r border-border bg-muted/20 p-4 md:block">
                                    <div className="mb-7 flex items-center gap-2 text-sm font-semibold"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background"><BarChart3 size={14} /></span> RankPilot</div>
                                    <div className="space-y-1 text-xs">
                                        {['Overview', 'Analyze', 'Rank Tracker', 'Reports', 'History'].map((x, i) => <div key={x} className={`rounded-lg px-3 py-2.5 ${i === 0 ? 'bg-accent/10 text-accent font-medium' : 'text-muted-foreground'}`}>{x}</div>)}
                                    </div>
                                </aside>
                                <div className="p-5 sm:p-7">
                                    <div className="flex items-end justify-between"><div><p className="text-xs text-muted-foreground">Website overview</p><h3 className="mt-1 text-xl font-semibold">Your SEO health</h3></div><span className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-500">Excellent</span></div>
                                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                        {[['87','SEO score'],['42','Keywords tracked'],['+18%','Visibility']].map(([value,label]) => <div key={label} className="rounded-2xl border border-border bg-background p-4"><div className="text-2xl font-semibold tracking-tight">{value}</div><div className="mt-1 text-xs text-muted-foreground">{label}</div></div>)}
                                    </div>
                                    <div className="mt-3 grid gap-3 lg:grid-cols-[1.35fr_.65fr]">
                                        <div className="rounded-2xl border border-border bg-background p-5"><div className="flex justify-between"><div><p className="text-xs text-muted-foreground">Search visibility</p><p className="mt-1 font-semibold">Growing steadily</p></div><LineChart size={18} className="text-accent" /></div><div className="mt-7 flex h-28 items-end gap-2">{[35,48,42,62,55,72,68,83,76,94,88,100].map((h,i)=><div key={i} className="flex-1 rounded-t bg-accent/20" style={{height:`${h}%`}}><div className="h-full rounded-t bg-accent/70" style={{height:`${Math.max(20,h-18)}%`}} /></div>)}</div></div>
                                        <div className="rounded-2xl border border-border bg-background p-5"><p className="text-xs text-muted-foreground">Priority issues</p><div className="mt-5 space-y-3">{[['3','Critical','text-red-500'],['7','Warnings','text-amber-500'],['12','Opportunities','text-accent']].map(([n,l,c])=><div key={l} className="flex items-center justify-between"><span className="text-xs text-muted-foreground">{l}</span><span className={`font-semibold ${c}`}>{n}</span></div>)}</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-border bg-card/50 px-4 py-6 sm:px-6">
                <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-medium uppercase tracking-[.18em] text-muted-foreground/70">
                    <span>Technical SEO</span><span>Keyword Intelligence</span><span>AI Insights</span><span>Performance</span><span>Rank Tracking</span>
                </div>
            </section>

            <section id="features" className="px-4 py-24 sm:px-6 sm:py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl"><p className="eyebrow">Everything in one place</p><h2 className="section-title">The SEO workflow, <span className="gradient-text">simplified.</span></h2><p className="section-copy">From your first audit to daily ranking changes, RankPilot brings the work into one focused workspace.</p></div>
                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map(({icon: Icon,title,text}) => <div key={title} className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent"><Icon size={20}/></div><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p><div className="mt-6 flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity group-hover:opacity-100">Explore <ChevronRight size={13}/></div></div>)}
                    </div>
                </div>
            </section>

            <section className="px-4 py-24 sm:px-6 sm:py-32 bg-muted/30">
                <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                    <div><p className="eyebrow">Why RankPilot</p><h2 className="section-title">Stop guessing what Google wants.</h2><p className="section-copy">Get a prioritized view of the issues that affect your search visibility and the opportunities worth acting on first.</p><div className="mt-8 space-y-4">{['Find technical issues before they become ranking problems','Track keyword movement with historical context','Turn AI suggestions into clear next actions'].map(x=><div key={x} className="flex gap-3 text-sm"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500"><Check size={13}/></span>{x}</div>)}</div><Link to="/register" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background">Start for free <ArrowRight size={15}/></Link></div>
                    <div className="rounded-[30px] border border-border bg-card p-4 shadow-xl"><div className="rounded-[24px] border border-border bg-background p-6"><div className="flex items-center justify-between"><div><p className="text-xs text-muted-foreground">SEO opportunity</p><h3 className="mt-1 font-semibold">Homepage optimization</h3></div><span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold text-amber-500">High impact</span></div><div className="mt-6 space-y-3">{[['Title tag','Add primary keyword near the beginning'],['Meta description','Improve intent match and CTA'],['Internal links','Connect this page to 4 related pages'],['Content depth','Cover 3 missing topic clusters']].map(([a,b])=><div key={a} className="rounded-2xl border border-border p-4"><div className="text-xs font-semibold">{a}</div><div className="mt-1 text-xs leading-5 text-muted-foreground">{b}</div></div>)}</div></div></div>
                </div>
            </section>

            <section id="how-it-works" className="px-4 py-24 sm:px-6 sm:py-32">
                <div className="mx-auto max-w-7xl"><div className="text-center"><p className="eyebrow">How it works</p><h2 className="section-title">From URL to <span className="gradient-text">action plan.</span></h2><p className="section-copy mx-auto">A simple workflow designed to make SEO understandable and repeatable.</p></div><div className="mt-14 grid gap-4 md:grid-cols-3">{[['01','Analyze','Enter a URL and let RankPilot inspect the page, structure and performance signals.'],['02','Understand','See the score, issues, keyword signals and AI explanations in one place.'],['03','Improve','Follow prioritized recommendations and track your progress over time.']].map(([n,t,d])=><div key={n} className="relative rounded-3xl border border-border bg-card p-7"><span className="text-5xl font-semibold tracking-tight text-accent/20">{n}</span><h3 className="mt-8 text-xl font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p></div>)}</div></div>
            </section>

            <section id="pricing" className="px-4 py-24 sm:px-6 sm:py-32 bg-muted/30">
                <div className="mx-auto max-w-5xl"><div className="text-center"><p className="eyebrow">Simple pricing</p><h2 className="section-title">Start free. Grow when you’re ready.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2"><div className="rounded-3xl border border-border bg-card p-8"><p className="text-sm font-semibold">Free</p><div className="mt-3 text-4xl font-semibold">$0<span className="text-sm font-normal text-muted-foreground"> / month</span></div><p className="mt-3 text-sm text-muted-foreground">Everything you need to understand your first SEO opportunities.</p><ul className="mt-7 space-y-3">{['5 analyses per day','Full SEO report','Keyword analysis','Issue detection'].map(x=><li key={x} className="flex gap-2 text-sm"><Check size={16} className="text-emerald-500"/>{x}</li>)}</ul><Link to="/register" className="mt-8 block rounded-xl border border-border py-3 text-center text-sm font-semibold hover:bg-muted">Get started free</Link></div><div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-card p-8 shadow-xl shadow-blue-500/10"><div className="absolute right-5 top-5 rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">Coming soon</div><p className="text-sm font-semibold">Pro</p><div className="mt-3 text-4xl font-semibold">$19<span className="text-sm font-normal text-muted-foreground"> / month</span></div><p className="mt-3 text-sm text-muted-foreground">For serious SEO workflows, historical tracking and deeper insights.</p><ul className="mt-7 space-y-3">{['Unlimited analyses','Historical tracking','Competitor insights','Priority processing','AI recommendations'].map(x=><li key={x} className="flex gap-2 text-sm"><Check size={16} className="text-accent"/>{x}</li>)}</ul><button className="mt-8 w-full rounded-xl bg-foreground py-3 text-sm font-semibold text-background">Join the waitlist</button></div></div></div>
            </section>

            <section className="px-4 py-24 sm:px-6 sm:py-32"><div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-foreground px-7 py-14 text-center text-background shadow-2xl sm:px-12"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-background/10"><Zap size={22}/></div><h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">Ready to see what’s holding you back?</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-background/60 sm:text-base">Run your first audit and turn SEO data into a clear growth plan.</p><Link to="/register" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground">Get started <ArrowRight size={16}/></Link></div></section>

            <footer className="border-t border-border px-4 py-12 sm:px-6"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><Link to="/" className="flex items-center gap-2 font-semibold"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background"><BarChart3 size={15}/></span>RankPilot</Link><div className="flex flex-wrap gap-5 text-xs text-muted-foreground"><Link to="/features" className="hover:text-foreground">Features</Link><Link to="/tools" className="hover:text-foreground">Tools</Link><Link to="/pricing" className="hover:text-foreground">Pricing</Link><Link to="/about" className="hover:text-foreground">About</Link><Link to="/contact" className="hover:text-foreground">Contact</Link></div><p className="text-xs text-muted-foreground">© {new Date().getFullYear()} RankPilot</p></div></footer>
        </main>
    );
}
