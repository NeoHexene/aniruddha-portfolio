import { useEffect, useRef } from "react";
import { MapPin, GraduationCap, Code2 } from "lucide-react";
import { personal, education } from "../data/portfolio";

const profileFiles = import.meta.glob('/public/profile/profile.*', { query: '?url', eager: true });
const profilePicKey = Object.keys(profileFiles)[0];
const profilePicUrl = profilePicKey ? profileFiles[profilePicKey].default || profilePicKey.replace('/public', '') : null;

export default function About() {

    const ref = useRef(null);

    /*
    To give the visual effect (smooth scroll animation) when the person is viewing the specific section, here "about".
    UseEffect runs after the component is rendered.
    IntersectionObserver is the browser api that tells whether the section is in the viewport or not (isIntersecting).
    */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
            { threshold: 0.15 } // triggers when 15% of the element is visible
        );
        ref.current?.querySelectorAll(".reveal").forEach((ele) => observer.observe(ele)); // observer to keep checking for the element currently on the viewport
        return () => observer.disconnect(); // clean up
    }, []);

    /*
    py -> padding vertical axis (top, bottom); px -> padding horizontal axis (left, right) => responsiveness
    reveal for the animation from the useEffect
    */
    return (
        <section id="about" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="reveal mb-16 text-center">
                <span className="font-code text-[#00f5ff] text-sm tracking-widest uppercase"> 01. Who I Am </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2"> About Me </h2>
                <div className="w-16 h-0.5 bg-[#00f5ff] mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Section */}
                <div className="reveal space-y-6">
                    {/* Profile Card */}
                    <div className="relative w-48 h-48 mx-auto md:mx-0">
                        <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#00f5ff]/20 to-blue-600/20 border border-[#00f5ff]/30 flex items-center justify-center text-7xl select-none overflow-hidden">
                            {profilePicUrl ? (
                                <img src={profilePicUrl} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <span>👨‍💻</span>
                            )}
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-48 h-48 rounded-2xl border border-[#00f5ff]/20 -z-10" />
                    </div>

                    <p className="font-body text-slate-300 leading-relaxed text-base">{personal.bio}</p>
                    <p className="font-body text-slate-400 leading-relaxed text-sm">
                        My goal is to join a FAANG-tier company where I can work on massive-scale distributed systems,
                        tackle challenging engineering problems, and grow alongside the brightest minds in the industry.
                        I'm currently sharpening algorithms, system design, and my full-stack chops at USC.
                    </p>

                    <div className="flex items-center gap-2 text-slate-400 font-body text-sm">
                        <MapPin size={14} className="text-[#00f5ff]" />
                        {personal.location}
                    </div>
                </div>

                {/* Right Section */}
                <div className="reveal space-y-4">
                    {/* Education Details */}
                    <div className="mb-6">
                        <h3 className="font-display text-sm text-[#00f5ff] uppercase tracking-widest mb-4 flex items-center gap-2">
                            <GraduationCap size={16} /> Education
                        </h3>

                        <div className="space-y-3">
                            {education.map((e) => (
                                <div key={e.school}
                                    className="p-4 rounded-xl bg-white/3 border border-white/8 hover:border-[#00f5ff]/30 transition-colors duration-300"
                                >
                                    <div className="flex justify-between flex-wrap gap-1">
                                        <span className="font-body font-semibold text-white text-sm">{e.school}</span>
                                        <span className="font-code text-xs text-slate-500">{e.period}</span>
                                    </div>
                                    <p className="font-body text-slate-400 text-xs mt-1">{e.degree}</p>
                                    {e.location && (
                                        <p className="font-body text-slate-500 text-xs mt-1 flex items-center gap-1">
                                            <MapPin size={12} /> {e.location}
                                        </p>
                                    )}
                                    {e.gpa && (
                                        <span className="tag-pill mt-2 inline-block"> GPA: {e.gpa} </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Facts */}
                    <div>
                        <h3 className="font-display text-sm text-[#00f5ff] uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Code2 size={16} /> Quick Facts
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { icon: "☕", label: "Coffee-driven development" },
                                { icon: "🏗️", label: "Microservices enthusiast" },
                                { icon: "🧮", label: "DSA practitioner" },
                                { icon: "🎯", label: "FAANG bound" },
                                { icon: "🌏", label: "Mumbai → LA journey" },
                                { icon: "🚀", label: "Always learning" }
                            ].map(({ icon, label }) => (
                                <div key={label}
                                    className="flex items-center gap-2 p-3 rounded-lg bg-white/3 border border-white/8 text-xs text-slate-400 font-body"
                                >
                                    <span className="text-base"> {icon} </span> {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}