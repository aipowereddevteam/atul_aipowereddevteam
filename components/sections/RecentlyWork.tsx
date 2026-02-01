"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, Layout, Monitor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const recentWorks = [
    {
        title: "Varahi Technologies",
        description: "Official website for Varahi Technologies, showcasing their services and solutions.",
        tags: ["Corporate", "Technology", "Web"],
        link: "https://www.varahitechnologies.com/",
        icon: Layers,
        color: "text-blue-400",
        border: "group-hover:border-blue-500/50",
        image: "/projects/varahi.png"
    },
    {
        title: "Mags07",
        description: "A digital platform providing innovative solutions and services.",
        tags: ["Digital", "Portfolio", "Creative"],
        link: "https://www.mags07.com/",
        icon: Layout,
        color: "text-purple-400",
        border: "group-hover:border-purple-500/50",
        image: "/projects/mags07.png"
    },
    {
        title: "SRCC Transport Solutions",
        description: "Enterprise transport management platform with real-time GPS tracking, e-lock integration, and fleet monitoring system.",
        tags: ["Logistics", "GPS Tracking", "IoT"],
        link: "http://srccweb.s3-website.ap-south-1.amazonaws.com/",
        icon: Monitor,
        color: "text-green-400",
        border: "group-hover:border-green-500/50",
        image: "/projects/srcc.png"
    }
];

export const RecentlyWork = () => {
    return (
        <section className="py-20 bg-transparent text-white relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-purple-500 font-semibold tracking-wide uppercase mb-2">Portfolio</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-center"
                    >
                        Recently <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Work</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentWorks.map((work, index) => (
                        <motion.a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-0 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-2 transition-all duration-300 ${work.border} cursor-pointer block overflow-hidden`}
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent opacity-60" />
                            </div>

                            <div className="p-6 pt-4">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2 rounded-lg bg-white/5 ${work.color} group-hover:bg-white/10 transition-colors`}>
                                        <work.icon size={20} />
                                    </div>
                                    <ExternalLink size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{work.title}</h3>
                                <p className="text-neutral-400 mb-6 text-sm leading-relaxed">{work.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {work.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10 group-hover:border-white/20 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};
