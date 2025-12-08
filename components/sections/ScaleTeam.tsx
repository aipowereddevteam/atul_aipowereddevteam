"use client";

import { motion } from "framer-motion";
import { Terminal, Users, Target, ArrowRight } from "lucide-react";

const models = [
    {
        icon: Terminal,
        title: "Fractional CTO",
        desc: "Strategic technical leadership on a retainer basis. Ideal for startups needing architecture and roadmap without a full-time hire.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Users,
        title: "Dedicated Squad",
        desc: "A full-stack team (Devs, QA, PM) integrated into your workflow. Scale your development velocity instantly.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: Target,
        title: "Fixed Scope Delivery",
        desc: "Project-based execution for MVPs or specific modules. Defined budget, timeline, and deliverables.",
        gradient: "from-orange-500 to-red-500"
    }
];

export const ScaleTeam = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Partnership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Models</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        Flexible engagement options tailored to your business stage and technical needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-[#0a0f1a] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${model.gradient} opacity-10 absolute top-0 right-0 -mr-4 -mt-4 transition-transform group-hover:scale-150`} />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.gradient} flex items-center justify-center text-white mb-6`}>
                                    <model.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{model.title}</h3>
                                <p className="text-neutral-400 leading-relaxed mb-8 min-h-[80px]">
                                    {model.desc}
                                </p>
                                <button className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                                    Learn More <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
