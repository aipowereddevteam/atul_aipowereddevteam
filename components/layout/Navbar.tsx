"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Settings, Zap, Brain, MessageSquare, Cpu, Bot, Globe, ArrowRight } from "lucide-react";

const navLinks = [
    { name: "Solutions", href: "#solutions", hasDropdown: true },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Consultation", href: "#consultation" },
    { name: "Contact", href: "#contact" },
];

const solutions = [
    { title: "RPA Automation", desc: "Intelligent process automation", icon: Zap },
    { title: "AI Agents", desc: "Cognitive automation solutions", icon: Brain },
    { title: "Chatbots", desc: "Conversational AI platforms", icon: MessageSquare },
    { title: "Machine Learning", desc: "Predictive analytics & insights", icon: Cpu },
    { title: "Robotics", desc: "Physical automation systems", icon: Bot },
    { title: "Global Solutions", desc: "Multi-region deployments", icon: Globe },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50" : "py-6 bg-transparent"
                    }`}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
                            AI
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">AIPoweredDev</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-neutral-300 hover:text-white hover:text-neon-blue transition-colors relative group flex items-center gap-1 py-2"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                                </Link>

                                {/* Solutions Mega Menu */}
                                <AnimatePresence>
                                    {link.hasDropdown && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-blue-500/10 backdrop-blur-xl"
                                        >
                                            <div className="flex items-center gap-2 mb-2 text-white">
                                                <Settings className="text-blue-500" size={20} />
                                                <h3 className="font-bold text-lg">Our Solutions</h3>
                                            </div>
                                            <p className="text-neutral-400 text-sm mb-6">Choose the perfect AI automation solution for your business</p>

                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                {solutions.map((sol) => (
                                                    <div key={sol.title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item cursor-pointer">
                                                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors">
                                                            <sol.icon size={20} />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-white font-medium text-sm group-hover/item:text-blue-400 transition-colors">{sol.title}</h4>
                                                            <p className="text-neutral-500 text-xs">{sol.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                                Get Started with AI Automation
                                                <ArrowRight size={16} />
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2"
                        >
                            Book Consultation
                            <ChevronDown size={16} className="-rotate-90" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-4 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-white/10" />
                            <Link
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-lg text-center block"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
