"use client";

import { motion } from "framer-motion";
import { Zap, Play, Brain, Settings, MessageSquare, Cpu, ArrowRight } from "lucide-react";

const pills = [
    {
        icon: Brain,
        text: "Custom AI Development",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: Zap,
        text: "Business Process Automation",
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
    },
    {
        icon: MessageSquare,
        text: "AI-Powered Chatbots",
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        icon: Cpu,
        text: "Machine Learning Models",
        color: "text-orange-400",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20"
    },
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 lg:pt-40 px-6 lg:px-8 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[60px] -z-10" />

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0f1a] border border-blue-500/20 mb-8 shadow-lg"
            >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-medium text-neutral-300 tracking-wide">specialized ai automation innovation company</span>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </motion.div>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-5xl md:text-7xl font-bold text-center leading-tight mb-6 max-w-5xl"
            >
                Transform Your Business with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    AI Automations
                </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-lg md:text-xl text-neutral-400 text-center max-w-2xl mb-12 leading-relaxed"
            >
                We're a specialized AI agency that builds custom automation solutions for businesses.
                From intelligent chatbots to automated workflows, we create AI systems that solve your specific challenges and drive operational efficiency.
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col sm:flex-row gap-4 mb-20"
            >
                <button className="px-8 py-3.5 rounded-lg bg-white text-black font-bold text-base hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                    <Zap size={20} className="fill-black" />
                    Get AI Consultation
                    <ArrowRight size={18} />
                </button>
                <button className="px-8 py-3.5 rounded-lg bg-transparent border border-white/20 text-white font-semibold text-base hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    <Play size={20} className="fill-white" />
                    View AI Solutions
                </button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-wrap justify-center gap-4"
            >
                {pills.map((pill, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-3 px-6 py-3 rounded-full border ${pill.bg} ${pill.border} backdrop-blur-sm transition-transform hover:scale-105`}
                    >
                        <div className={`p-1 rounded-full bg-white/10 ${pill.color}`}>
                            <pill.icon size={18} />
                        </div>
                        <span className="font-semibold text-sm text-white">{pill.text}</span>
                    </div>
                ))}
            </motion.div>

        </section>
    );
};
