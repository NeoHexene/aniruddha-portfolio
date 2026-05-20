import { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((ele) => ele.target.classList.toggle("visible", ele.isIntersecting)),
            { threshold: 0.15 }
        );
        ref.current?.querySelectorAll(".reveal").forEach((ele) => observer.observe(ele))
        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="reveal mb-16 text-center">
                <span className="font-code text-[#00f5ff] text-sm tracking-widest uppercase">03. Where I've Been</span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">Experience</h2>
                <div className="w-16 h-0.5 bg-[#00f5ff] mx-auto mt-4" />
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff]/60 via-[#00f5ff]/20 to-transparent md:-translate-x-px" />
                <div className="space-y-12">
                    {experience.map((job, i) => (
                        <div key={i}
                            className={`reveal relative flex flex-col md:flex-row ${i % 2 == 0 ? "md:flex-row-reverse" : ""} gap-8`}
                        >

                            {/* Timeline dot */}
                            <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-[#00f5ff] rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10 ring-4 ring-[#0a0f1e]" />

                            {/* Empty half for the desktop view */}
                            <div className="hidden md:block md:w-1/2" />

                            {/* Card */}
                            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                                <div className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-[#00f5ff]/30 transition-all duration-300 group">

                                    {/* Company + Period */}
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                                        <h3 className="font-display text-lg font-bold text-white group-hover:text-[#00f5ff] transition-colors"
                                        >
                                            {job.role}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                                        <span className="flex items-center gap-1 font-body text-[#00f5ff] text-sm font-medium">
                                            <Briefcase size={13} />
                                            {job.company}
                                        </span>
                                        <span className="flex items-center gap-1 font-code text-xs text-slate-500">
                                            <Calendar size={12} />
                                            {job.period}
                                        </span>
                                        <span className="flex items-center gap-1 font-code text-xs text-slate-500">
                                            <MapPin size={12} />
                                            {job.location}
                                        </span>
                                    </div>

                                    {/* Bullet Points */}
                                    <ul className="space-y-2 mb-4">
                                        {job.bullets.map((b, bi) => (
                                            <li key={bi} className="flex gap-2 text-sm text-slate-400 font-body leading-relaxed">
                                                <span className="text-[#00f5ff] mt-1.5 shrink-0">▸</span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {job.tags.map((t) => (
                                            <span key={t} className="tag-pill"> {t} </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}