"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Box, Activity, Shield } from "lucide-react";

const projects = [
    {
        title: "Hyper-Scale Logistics Engine",
        description: "Processing 20,000+ monthly records with Real-Time IoT Tracking.",
        tech: ["Redis", "MongoDB", "IoT"],
        link: "/content/logistics-iot.mdx",
        icon: Box,
        color: "text-orange-500",
        border: "group-hover:border-orange-500/50"
    },
    {
        title: "Real-Time AI Diagnostics",
        description: "Reducing medical image load times by 70% using Edge Computing.",
        tech: ["GraphQL", "WebRTC", "AWS"],
        link: "/content/medical-ai.mdx",
        icon: Activity,
        color: "text-blue-500",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "Computer Vision Safety Grid",
        description: "Live Canvas API rendering for multi-feed hazard detection.",
        tech: ["Canvas API", "WebSockets", "AI"],
        link: "/content/auth-system.mdx",
        icon: Shield,
        color: "text-green-500",
        border: "group-hover:border-green-500/50"
    }
];

export const CaseStudies = () => {
    return (
        <section className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Enterprise Case Studies
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-2 transition-all duration-300 ${project.border}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-lg bg-white/5 ${project.color}`}>
                                    <project.icon size={24} />
                                </div>
                                <ArrowUpRight className="text-neutral-500 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-neutral-400 mb-6">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
