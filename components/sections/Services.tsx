"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Smartphone } from "lucide-react";

export const Services = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Solutions</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        End-to-end engineering excellence. We don't just build software; we build scalable business assets.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
                    {/* Service 1: Cloud Architecture (Large Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2 bg-[#0a0f1a] border border-white/5 rounded-3xl p-10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                    <Layers size={28} />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Enterprise Cloud Architecture</h3>
                                <p className="text-neutral-400 text-lg max-w-md">
                                    Scalable, secure, and cost-optimized cloud infrastructure. We design systems that handle millions of requests without breaking a sweat, leveraging AWS and Azure best practices.
                                </p>
                            </div>
                            <ul className="grid grid-cols-2 gap-3 mt-8">
                                {["Microservices", "Serverless", "Kubernetes", "CI/CD Pipelines"].map((tag, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: AI and Mobile Stacked */}
                    <div className="flex flex-col gap-6 h-full">

                        {/* Service 2: AI */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex-1 bg-[#0a0f1a] border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
                        >
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">AI-Driven Automation</h3>
                                <p className="text-neutral-400 text-sm mb-4">
                                    Integrate LLMs and intelligent agents to automate complex business workflows.
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-300 border border-white/5">OpenAI API</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-300 border border-white/5">LangChain</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 3: Mobile */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 bg-[#0a0f1a] border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
                                    <Smartphone size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">High-Performance Mobile Apps</h3>
                                <p className="text-neutral-400 text-sm mb-4">
                                    Native-feel cross-platform applications built with React Native and Flutter.
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-300 border border-white/5">React Native</span>
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-300 border border-white/5">Flutter</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
