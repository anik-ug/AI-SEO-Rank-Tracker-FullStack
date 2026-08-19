import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    BarChart3,
    History,
    LogOut,
    Menu,
    Moon,
    Search,
    Sun,
    Target,
    X,
    ChartNoAxesColumnIcon,
    Sparkles,
    Wrench,
    CircleDollarSign,
} from "lucide-react";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";

const publicLinks = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/tools", label: "Tools" },
    { path: "/how-it-works", label: "How it works" },
    { path: "/pricing", label: "Pricing" },
];

const appLinks = [
    { path: "/dashboard", label: "Dashboard", icon: <BarChart3 size={17} /> },
    { path: "/analyze", label: "Analyze", icon: <Search size={17} /> },
    { path: "/rank-tracker", label: "Rank Tracker", icon: <Target size={17} /> },
    { path: "/history", label: "History", icon: <History size={17} /> },
];

export default function Navbar() {
    const { user, logout } = useApp();
    const { theme, setTheme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    const handleLogout = () => {
        logout();
        navigate("/");
        setMobileOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5 pt-3">
            <nav className="mx-auto max-w-7xl rounded-2xl border border-border/80 bg-background/80 shadow-sm backdrop-blur-xl">
                <div className="flex h-16 items-center justify-between px-4 sm:px-5">
                    <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileOpen(false)}>
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-background shadow-sm">
                            <ChartNoAxesColumnIcon size={19} />
                        </span>
                        <span className="text-[17px] font-semibold tracking-tight text-foreground">RankPilot</span>
                    </Link>

                    {!user && (
                        <div className="hidden lg:flex items-center gap-1 rounded-xl border border-border/70 bg-card/60 p-1">
                            {publicLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors ${isActive(link.path) ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}

                    {user && (
                        <div className="hidden lg:flex items-center gap-1 rounded-xl border border-border/70 bg-card/60 p-1">
                            {appLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors ${isActive(link.path) ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                                >
                                    {link.icon}
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => setTheme(isDark ? "light" : "dark")}
                            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={17} /> : <Moon size={17} />}
                        </button>

                        {user ? (
                            <>
                                <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-2.5 py-1.5">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-xs font-bold text-background">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="hidden xl:block leading-tight">
                                        <div className="text-xs font-semibold text-foreground">{user.name}</div>
                                        <div className="text-[10px] text-muted-foreground capitalize">{user.plan}</div>
                                    </div>
                                </div>
                                <button onClick={handleLogout} className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                                    <LogOut size={15} />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="rounded-xl px-3.5 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                                    Log in
                                </Link>
                                <Link to="/register" className="flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-sm hover:opacity-90">
                                    Get started <Sparkles size={14} />
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="flex md:hidden items-center gap-1">
                        <button onClick={() => setTheme(isDark ? "light" : "dark")} className="h-9 w-9 rounded-xl text-muted-foreground hover:bg-muted flex items-center justify-center">
                            {isDark ? <Sun size={17} /> : <Moon size={17} />}
                        </button>
                        <button onClick={() => setMobileOpen(!mobileOpen)} className="h-9 w-9 rounded-xl text-muted-foreground hover:bg-muted flex items-center justify-center" aria-label="Menu">
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {mobileOpen && (
                    <div className="border-t border-border px-4 py-4 lg:hidden">
                        {!user ? (
                            <>
                                <div className="grid grid-cols-2 gap-2">
                                    {publicLinks.map((link) => (
                                        <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)} className={`rounded-xl px-3 py-2.5 text-sm ${isActive(link.path) ? "bg-foreground text-background" : "bg-muted text-muted-foreground"}`}>
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-3 grid grid-cols-2 gap-2">
                                    <Link to="/login" onClick={() => setMobileOpen(false)} className="rounded-xl border border-border py-2.5 text-center text-sm font-medium">Log in</Link>
                                    <Link to="/register" onClick={() => setMobileOpen(false)} className="rounded-xl bg-foreground py-2.5 text-center text-sm font-semibold text-background">Get started</Link>
                                </div>
                            </>
                        ) : (
                            <div className="space-y-1">
                                {appLinks.map((link) => (
                                    <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm ${isActive(link.path) ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-muted"}`}>
                                        {link.icon}{link.label}
                                    </Link>
                                ))}
                                <button onClick={handleLogout} className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-danger hover:bg-danger/10">
                                    <LogOut size={17} /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
}
