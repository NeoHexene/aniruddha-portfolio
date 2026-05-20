import { useState, useEffect, useRef } from "react";
import { skills, familiars } from "../data/portfolio";

const categoryColors = {
    Languages: "#00f5ff",
    Backend: "#a855f7",
    Frontend: "#f59e0b",
    "Databases & Cloud": "#10b981",
    "Tools & Practices": "#ef4444"
};

function SkillsBar({ name, level, color, animate }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1.5">
                <span className="font-code text-sm text-slate-300">{name}</span>
                <span className="font-code text-xs text-slate-500">{level}%</span>
            </div>
            <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                <div className="h-full rounded-full skill-fill"
                    style={{
                        width: animate ? `${level}%` : "0%",
                        background: `linear-gradient(90deg, ${color}99, ${color})`,
                        boxShadow: `0 0 8px ${color}60`
                    }}
                />
            </div>
        </div>
    );
}

export default function Skills() {

    const categories = Object.keys(skills);
    const ref = useRef(null);
    const [intersected, setIntersected] = useState(false);
    const [tabAnimate, setTabAnimate] = useState(false);
    const [active, setActive] = useState("Languages");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIntersected(true);
                    ref.current?.querySelectorAll(".reveal").forEach((ele) => ele.classList.add("visible")); // reveal animations
                }
            },
            { threshold: 0.25 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setTabAnimate(false);
        const timer = setTimeout(() => {
            setTabAnimate(true);
        }, 150);
        return () => clearTimeout(timer);
    }, [active]);

    return (
        <section id="skills" ref={ref} className="py-24 px-6"
            style={{ background: "linear-gradient(180deg, #0a0f1e 0%, #0d1530 50%, #0a0f1e 100%)" }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="reveal mb-16 text-center">
                    <span className="font-code text-[#00f5ff] text-sm tracking-widest uppercase">02. What I Know</span>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">Skills & Tech</h2>
                    <div className="w-16 h-0.5 bg-[#00f5ff] mx-auto mt-4" />
                </div>

                {/* Category Tabs */}
                <div className="reveal flex flex-wrap gap-3 mb-10 justify-center">
                    {categories.map((category) => (
                        <button key={category}
                            onClick={() => {
                                setTabAnimate(false);
                                setActive(category);
                            }}
                            className={`px-4 py-2 rounded-lg font-code text-sm transition-all duration-200 border
                                ${active == category ? "border-current text-current bg-current/10"
                                    : "border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300"} 
                                `}
                            style={active === category ? { color: categoryColors[category], borderColor: categoryColors[category] } : {}}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Bar */}
                <div className="reveal max-w-2xl mx-auto">
                    <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
                        {skills[active].map((skill) => (
                            <SkillsBar
                                key={skill.name} name={skill.name} level={skill.level}
                                color={categoryColors[active]} animate={intersected && tabAnimate}
                            />
                        ))}
                    </div>
                </div>

                {/* Technology Icon Grid */}
                <div className="reveal mt-16">
                    <p className="font-code text-xs text-slate-500 text-center uppercase tracking-widest mb-8">
                        Also familiar with
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {familiars.map((tech) => (
                            <span key={tech} className="tag-pill"> {tech} </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}