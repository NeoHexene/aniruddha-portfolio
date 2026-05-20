import { useEffect, useState, useRef } from "react";
import GithubIcon from "./GithubIcon";
import { PlayCircle } from "lucide-react";
import { projects } from "../data/portfolio";

function ProjectMockup({ project }) {

    const c = project.color;
    const icon = project.icon;

    return (
        <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id={`grad-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={c} stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0a0f1e" stopOpacity="0.8" />
                </linearGradient>
            </defs>

            {/* Background */}
            <rect width="320" height="200" fill="#0d1530" rx="12" />
            <rect width="320" heigh="200" fill={`url(#grad-${project.id})`} rx="12" />

            {/* Grid Lines */}
            {[40, 80, 120, 160, 200, 240, 280].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="200" stroke={c} strokeOpacity="0.06" strokeWidth="1" />
            ))}
            {[40, 80, 120, 160].map((y) => (
                <line key={y} x1="0" y1={y} x2="320" y2={y} stroke={c} strokeOpacity="0.06" strokeWidth="1" />
            ))}

            {/* Browser Chrome */}
            <rect x="10" y="10" width="300" height="16" fill={c} fillOpacity="0.08" rx="4" />
            <circle cx="24" cy="18" r="4" fill="#ef4444" fillOpacity="0.7" />
            <circle cx="24" cy="18" r="4" fill="#f59e0b" fillOpacity="0.7" />
            <circle cx="24" cy="18" r="4" fill="#10b981" fillOpacity="0.7" />
            <rect x="70" y="13" width="180" height="10" fill={c} fillOpacity="0.1" rx="3" />

            {/* Code Lines */}
            {[38, 52, 66, 80, 94, 108, 122, 136].map((y, i) => (
                <rect key={y} x={16 + (i % 3) * 8} y={y} width={[100, 140, 90, 120, 80, 160, 70, 110][i]}
                    height="6" fill={c} fillOpacity={i === 2 ? 0.35 : 0.1} rx="2"
                />
            ))}

            {/* Central Icon */}
            <circle cx="240" cy="120" r="48" fill={c} fillOpacity="0.08" />
            <circle cx="240" cy="120" r="36" fill={c} fillOpacity="0.06" stroke={c} strokeWidth="1" strokeOpacity="0.3" />
            <text x="240" y="128" textAnchor="middle" fontSize="30" fill={c} fillOpacity="0.9"> {icon} </text>

            {/* Animated ping ring inside the viewer */}
            <circle cx="240" cy="120" r="48" fill="none" stroke={c} strokeWidth="1" strokeOpacity="0.4">
                <animate attributeName="r" values="36;54" dur="2s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Bottom status bar */}
            <rect x="10" y="170" width="300" height="22" fill={c} fillOpacity="0.06" rx="4" />
            <rect x="18" y="176" width="60" height="10" fill={c} fillOpacity="0.3" rx="2" />
            <rect x="86" y="176" width="40" height="10" fill={c} fillOpacity="0.15" rx="2" />
        </svg>
    );
}


export default function Projects() {

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((ele) => ele.target.classList.toggle("visible", ele.isIntersecting)),
            { threshold: 0.15 }
        )
        ref.current?.querySelectorAll(".reveal").forEach((ele) => observer.observe(ele));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" ref={ref} className="py-24 px-6"
            style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #0d1530 50%, #0a0f1e 100%)" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Headers */}
                <div className="reveal mb-16 text-center">
                    <span className="font-code text-[#00f5ff] text-sm tracking-widest uppercase">04. What I've Built</span>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">Projects</h2>
                    <div className="w-16 h-0.5 bg-[#00f5ff] mx-auto mt-4" />
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                        <div key={p.id}
                            className="reveal project-card rounded-2xl overflow-hidden border border-white/8 bg-[#0d1530] hover:border-current transition-all duration-300"
                            style={{ "--hover-color": p.color, borderColor: undefined }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = p.color + "40")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                        >

                            {/* Mocked Image */}
                            <div className="h-44 overflow-hidden">
                                {p.youtubeId ? (<iframe
                                    src={`https://www.youtube.com/embed/${p.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${p.youtubeId}&end=60&controls=0&showinfo=0&rel=0`}
                                    className="w-full h-full border-0 pointer-events-none"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    title={`${p.name} video`}
                                ></iframe>) : (<ProjectMockup project={p} />)}
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-display text-base font-bold text-white">{p.name}</h3>
                                    <div className="flex items-center gap-3 ml-2 shrink-0">
                                        {p.youtubeId && (
                                            <a
                                                href={`https://youtu.be/${p.youtubeId}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-500 hover:text-red-500 transition-colors"
                                                title="Watch Demo"
                                            >
                                                <PlayCircle size={18} />
                                            </a>
                                        )}
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-500 hover:text-[#00f5ff] transition-colors"
                                            title="View Source"
                                        >
                                            <GithubIcon size={16} />
                                        </a>
                                    </div>
                                </div>

                                <p className="font-body text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {p.highlights.map((h) => (
                                        <span
                                            key={h}
                                            className="text-xs px-2 py-0.5 rounded font-code"
                                            style={{ background: p.color + "15", color: p.color, border: `1px solid ${p.color}30` }}
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tags.map((t) => (
                                        <span key={t} className="tag-pill">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Button to view all repositories */}
                <div className="reveal text-center mt-12">
                    <a
                        href="https://github.com/NeoHexene"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-[#00f5ff]/40 text-[#00f5ff] rounded-lg hover:bg-[#00f5ff]/10 transition-all duration-200 font-body font-medium"
                    >
                        <GithubIcon size={18} />
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}