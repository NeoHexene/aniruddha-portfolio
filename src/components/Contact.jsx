import LinkedinIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";
import { useEffect, useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Contact() {

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((ele) => ele.target.classList.toggle("visible", ele.isIntersecting)),
            { threshold: 0.15 }
        );
        ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const links = [
        {
            icon: <Mail size={22} />,
            label: "Email",
            value: personal.email,
            href: `mailto:${personal.email}`,
        },
        {
            icon: <GithubIcon size={22} />,
            label: "GitHub",
            value: "github.com/NeoHexene",
            href: personal.github,
        },
        {
            icon: <LinkedinIcon size={22} />,
            label: "LinkedIn",
            value: "linkedin.com/in/aniruddha30",
            href: personal.linkedin,
        },
        {
            icon: <MapPin size={22} />,
            label: "Location",
            value: personal.location,
            href: null,
        }
    ];

    return (
        <section id="contact" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="reveal mb-16 text-center">
                <span className="font-code text-[#00f5ff] text-sm tracking-widest uppercase">05. Get In Touch</span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">Contact</h2>
                <div className="w-16 h-0.5 bg-[#00f5ff] mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* Left Message */}
                <div className="reveal space-y-6">
                    <p className="font-body text-slate-300 text-lg leading-relaxed">
                        I'm actively looking for <span className="text-[#00f5ff]">new opportunities</span> —
                        whether it's an internship, full-time role, or just a conversation about cool tech.
                    </p>
                    <p className="font-body text-slate-400 leading-relaxed">
                        If you're from a FAANG or top-tier tech company, or if you want to collaborate on
                        an interesting project, I'd love to hear from you. My inbox is always open!
                    </p>

                    {/* Contact Links */}
                    <div className="space-y-3 pt-2">
                        {links.map(({ icon, label, value, href }) => (
                            <div key={label} className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-lg bg-[#00f5ff]/10 border border-[#00f5ff]/20 flex items-center justify-center text-[#00f5ff] shrink-0 group-hover:bg-[#00f5ff]/20 transition-colors">
                                    {icon}
                                </div>
                                <div>
                                    <p className="font-code text-xs text-slate-500 uppercase tracking-wider">{label}</p>
                                    {href ? (
                                        <a
                                            href={href}
                                            target={href.startsWith("http") ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="font-body text-slate-300 hover:text-[#00f5ff] transition-colors text-sm"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <span className="font-body text-slate-300 text-sm">{value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Card */}
                <div className="reveal">
                    <div className="p-8 rounded-2xl border border-[#00f5ff]/20 bg-[#00f5ff]/5 text-center space-y-6">
                        {/* Animated icon */}
                        <div className="w-20 h-20 mx-auto rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/30 flex items-center justify-center text-[#00f5ff] animate-[pulse_3s_ease-in-out_infinite]">
                            <Send size={32} />
                        </div>
                        <div>
                            <h3 className="font-display text-xl font-bold text-white mb-2">Let's Talk</h3>
                            <p className="font-body text-slate-400 text-sm">
                                Currently open to full-time SWE roles in the US. Let's build something great together.
                            </p>
                        </div>
                        <a
                            href={`mailto:${personal.email}`}
                            className="inline-block w-full px-6 py-3 bg-[#00f5ff] text-[#0a0f1e] font-body font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                            Say Hello 👋
                        </a>
                        {/* <p className="font-code text-xs text-slate-600">Usually replies within 24 hours</p> */}
                    </div>
                </div>
            </div>
        </section>
    );

}