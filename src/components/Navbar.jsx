import LinkedinIcon from "./LinkedinIcon"
import GithubIcon from "./GithubIcon"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { personal } from "../data/portfolio"

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
];

export default function Navbar() {

    const [open, setOpen] = useState(false); // initially closed
    const [scrolled, setScrolled] = useState(false); // initially top of the page

    /*
    Makes the navbar change apperance dynamically depending on whether the menu is scrolled or not.
    */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40); // how many pixels is the page scrolled vertically
        window.addEventListener("scroll", onScroll); // true if the page is scrolled more than 40px else false
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (href) => {
        setOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); // if an element is found in the DOM then smoothly scroll to that href
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-glass" : "bg-transparent"}`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo Element */}
                <span className="font-display text-lg font-bold cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <span className="text-[#00f5ff]">&lt;</span>
                    <span className="text-white">AK</span>
                    <span className="text-[#00f5ff]">/&gt;</span>
                </span>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button key={link.href}
                            onClick={() => handleNav(link.href)}
                            className="text-sm font-body text-slate-400 hover:text-[#00f5ff] transition-colors duration-200 font-medium"
                        >
                            {link.label}
                        </button>
                    ))}
                    <a href={personal.github} target="_blank" rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#00f5ff] transition-colors"
                    >
                        <GithubIcon size={18} />
                    </a>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#00f5ff] transition-colors"
                    >
                        <LinkedinIcon size={18} />
                    </a>
                </div>

                {/* Mobile menu toggle */}
                <button className="md:hidden text-slate-300 hover:text-[#00f5ff]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden nav-glass border-t border-[#00f5ff]/10">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link) => (
                            <button key={link.href}
                                onClick={() => handleNav(link.href)}
                                className="text-left text-slate-300 hover:text-[#00f5ff] transition-colors font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="flex gap-4 pt-2">
                            <a href={personal.github} target="_blank" rel="noopener noreferrer">
                                <GithubIcon size={20} className="text-slate-400 hover:text-[#00f5ff]" />
                            </a>
                            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon size={20} className="text-slate-400 hover:text-[#00f5ff]" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}