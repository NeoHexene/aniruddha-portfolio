import { useEffect, useState } from "react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import { ChevronDown, Mail, Download } from "lucide-react";
import { personal } from "../data/portfolio";

const roles = personal.taglines;

/*
For the typewriter animation word by word
*/
function useTypeWriter(words, speed = 80, pause = 1000) {

    const [wordIdx, setWordIdx] = useState(0); // word by word
    const [charIdx, setCharIdx] = useState(0); // character by character
    const [deleting, setDeleting] = useState(false); // typing forward or backspace

    useEffect(() => {
        const current = words[wordIdx];
        let timeout;

        if (!deleting && charIdx == current.length) { // not deleting and finished typing the word
            timeout = setTimeout(() => setDeleting(true), pause); // pause before deleting the word
        } else if (deleting && charIdx == 0) { // deleting and nothing left
            timeout = setTimeout(() => {
                setDeleting(false); // stop deleting
                setWordIdx((w) => (w + 1) % words.length); // move to the next word
            }, speed * 6);
        } else if (!deleting) {
            timeout = setTimeout(() => setCharIdx((c) => c + 1), speed); // typing characters forward
        } else if (deleting) {
            timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2); // deleting the typed characters
        }

        return () => clearTimeout(timeout);

    }, [charIdx, deleting, wordIdx, words, speed, pause]);

    return words[wordIdx].slice(0, charIdx);

}



export default function Hero() {

    const typer = useTypeWriter(roles);

    return (
        <section id="home"
            className="relative min-h-screen flex flex-col justify-center items-center grid-bg px-6 pt-20"
        >
            {/* Ambient effect */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Open to opportunities effect */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/5 mb-8">
                    <span className="w-2 h-2 bg-[#00f5ff] rounded-full animate-pulse" />
                    <span className="font-code text-sm text-[#00f5ff]">Open to opportunities</span>
                </div>

                {/* Name */}
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight"
                >
                    Aniruddha
                    <br />
                    <span className="glow-cyan text-[#00f5ff]"> Khandekar </span>
                </h1>

                {/* Typewriter effect */}
                <div className="h-10 flex items-center justify-center mb-6">
                    <span className="font-code text-xl sm:text-2xl text-slate-300">
                        {typer}
                        <span className="inline-block w-0.5 h-6 bg-[#00f5ff] ml-1 animate-[blink_1s_step-end_infinite]" />
                    </span>
                </div>

                {/* Bio snippet */}
                <p className="font-body text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    CS @ USC · Building scalable backend systems & intelligent applications.
                    <br className="hidden sm:block" />
                    Previously @ Intellect Design Arena — fintech microservices, Java, Spring Boot.
                </p>

                {/* Buttons for github, linkedin, resume and email */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                    <a href={personal.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-[#00f5ff] text-[#0a0f1e] font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 font-body hover:scale-105 active:scale-95"
                    >
                        <GithubIcon size={18} /> GitHub
                    </a>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-[#00f5ff]/50 text-[#00f5ff] font-semibold rounded-lg hover:bg-[#00f5ff]/10 transition-all duration-200 font-body hover:scale-105 active:scale-95"
                    >
                        <LinkedinIcon size={18} /> LinkedIn
                    </a>
                    <a href={personal.resume} download="Aniruddha_Khandekar_Resume.pdf"
                        className="flex items-center gap-2 px-6 py-3 border border-[#00f5ff]/50 text-[#00f5ff] font-semibold rounded-lg hover:bg-[#00f5ff]/10 transition-all duration-200 font-body hover:scale-105 active:scale-95"
                    >
                        <Download size={18} /> Resume
                    </a>
                    <a href={`mailto:${personal.email}`}
                        className="flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-[#00f5ff]/50 hover:text-[#00f5ff] transition-all duration-200 font-body hover:scale-105 active:scale-95"
                    >
                        <Mail size={18} /> Email Me
                    </a>
                </div>

                {/* Stats row */}
                <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-16">
                    {[
                        { num: "1+", label: "Years Experience" },
                        { num: "5+", label: "Projects" },
                        { num: "80%", label: "Loan Initiation Time ↓" },
                        { num: "70%", label: "Rule Engine Speed ↑" }
                    ].map(({ num, label }) => (
                        <div key={label} className="text-center">
                            <div className="font-display text-3xl font-bold text-[#00f5ff] glow-cyan">{num}</div>
                            <div className="font-body text-xs text-slate-500 mt-1 uppercase tracking-widest">{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll button (downward arrow) */}
            <button onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                className="absolute bottom-8 animate-bounce text-slate-500 hover:text-[#00f5ff] transition-colors"
            >
                <ChevronDown size={28} />
            </button>
        </section>
    );
}