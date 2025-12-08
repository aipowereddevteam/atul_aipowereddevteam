"use client";

import { motion } from "framer-motion";
import { Globe, Activity, Users, ArrowRight } from "lucide-react";

const stories = [
    {
        category: "Logistics & IoT",
        title: "AlVision EXIM Platform",
        icon: Globe,
        iconColor: "text-blue-400",
        iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
        challenge: "Manual workflows and lack of real-time asset visibility causing operational delays.",
        solution: "End-to-end enterprise platform with Redis caching, WebSockets, and GPS tracking integration.",
        stats: [
            { label: "Operational Efficiency", value: "40%+" },
            { label: "Response Time Cut", value: "60%" },
            { label: "System Uptime", value: "99.9%" },
        ],
    },
    {
        category: "Healthcare Technology",
        title: "Aident Diagnostics",
        icon: Activity,
        iconColor: "text-red-100",
        iconBg: "bg-gradient-to-br from-red-500 to-pink-500",
        challenge: "Inefficient patient data management and slow medical image loading speeds.",
        solution: "Scalable GraphQL backend with DynamoDB and AI-powered diagnostic engine.",
        stats: [
            { label: "Diagnostic Accuracy", value: "45%" },
            { label: "Image Load Speed", value: "70%" },
            { label: "Response Time", value: "55%" },
        ],
    },
    {
        category: "HR Tech & AI",
        title: "GetScreened AI",
        icon: Users,
        iconColor: "text-amber-100",
        iconBg: "bg-gradient-to-br from-orange-500 to-yellow-500",
        challenge: "High volume of manual resume screening and disjointed interview processes.",
        solution: "AI scoring engine with WebRTC video interviews and automated pipelines.",
        stats: [
            { label: "Hiring Efficiency", value: "60%" },
            { label: "Daily Evaluations", value: "100+" },
            { label: "Manual Work Reduced", value: "50%" },
        ],
    },
];

export const SuccessStories = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-blue-500 font-semibold tracking-wide uppercase mb-2">Case Studies</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Client Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stories</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <div key={index} className="relative group perspective-1000">
                            <div className="relative h-full rounded-[2rem] bg-[#0a0f1a] border border-white/10 p-8 overflow-hidden hover:border-blue-500/30 transition-colors duration-500">

                                {/* Background Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-800/20 transition-all duration-500" />

                                {/* Header */}
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl ${story.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <story.icon size={32} className="text-white" />
                                    </div>
                                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                        {story.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-8 relative z-10 group-hover:text-blue-200 transition-colors">
                                    {story.title}
                                </h3>

                                {/* Challenge */}
                                <div className="mb-6 relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                                        <span className="text-sm font-bold text-white">Challenge</span>
                                    </div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        {story.challenge}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="mb-8 relative z-10">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                                        <span className="text-sm font-bold text-white">Our Solution</span>
                                    </div>
                                    <p className="text-sm text-neutral-400 leading-relaxed">
                                        {story.solution}
                                    </p>
                                </div>

                                {/* Results */}
                                <div className="mb-8 relative z-10">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                        <span className="text-sm font-bold text-white">Results</span>
                                    </div>
                                    <div className="space-y-3">
                                        {story.stats.map((stat, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                                                <span className="text-sm text-neutral-400">{stat.label}</span>
                                                <span className="text-base font-bold text-blue-400">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all group/btn relative z-10">
                                    Read Full Case Study
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
