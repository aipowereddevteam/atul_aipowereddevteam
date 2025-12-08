"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingUp } from "lucide-react";

const problems = [
    {
        icon: Clock,
        title: "Legacy Code Slows You Down",
        desc: "Outdated stacks create technical debt that kills your velocity.",
        color: "orange"
    },
    {
        icon: TrendingUp,
        title: "Excel KilIs Efficiency",
        desc: "Manual operational processes are unscalable and error-prone.",
        color: "blue"
    },
    {
        icon: AlertTriangle,
        title: "Security Risks",
        desc: "Vulnerabilities in static or legacy sites expose your business data.",
        color: "red"
    },
];

export const MarketGap = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/5 blur-[80px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                        </span>
                        <span className="text-sm font-semibold tracking-wide uppercase">
                            Critical System Alert
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Most Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Fail to Scale</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Your growth is being silently killed by hidden technical bottlenecks. We identify and fix them.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#0a0f1a] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500 mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
