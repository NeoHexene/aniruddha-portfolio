import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { Mail, Heart } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Footer() {

    return (
        <footer className="border-t border-white/8 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center mb-12 text-center pt-4">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">
                    Thanks for stopping by!
                </h2>
                <p className="font-body text-slate-400 max-w-lg">
                    Can't wait to hear from you and explore new opportunities together.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 pt-8 border-t border-white/8">
                <span className="font-display text-[#00f5ff] text-lg font-bold">
                    &lt;AK/&gt;
                </span>

                <div className="flex flex-col items-center text-center">
                    <p className="font-code text-xs text-slate-500 mb-1">
                        Made by Aniruddha Khandekar
                    </p>
                    <p className="font-code text-xs text-slate-600">
                        © 2026 All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcon size={18} className="text-slate-500 hover:text-[#00f5ff] transition-colors" />
                    </a>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <LinkedinIcon size={18} className="text-slate-500 hover:text-[#00f5ff] transition-colors" />
                    </a>
                    <a href={`mailto:${personal.email}`} aria-label="Email">
                        <Mail size={18} className="text-slate-500 hover:text-[#00f5ff] transition-colors" />
                    </a>
                </div>
            </div>
        </footer>
    );
}