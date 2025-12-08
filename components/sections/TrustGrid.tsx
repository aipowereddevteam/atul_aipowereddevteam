"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, Layers } from "lucide-react";

const stats = [
    {
        icon: Activity,
        value: "99.9%",
        label: "Uptime Guaranteed",
        color: "blue"
    },
    {
        icon: Layers,
        value: "20k+",
        label: "Records Processed",
        color: "purple"
    },
    {
        icon: Zap,
        value: "60%",
        label: "Speed Boost",
        color: "yellow"
    },
    {
        icon: ShieldCheck,
        value: "30%",
        label: "Cost Reduction",
        color: "green"
    }
];

export const TrustGrid = () => {
    return (
        <section className="py-10 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#0a0f1a] border border-white/10 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center group"
                        >
                            <div className={`p-3 rounded-full bg-${stat.color}-500/10 text-${stat.color}-400 mb-3 group-hover:scale-110 transition-transform`}>
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                            <p className="text-neutral-400 text-sm font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
