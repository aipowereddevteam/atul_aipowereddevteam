"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from "lucide-react";

export const Contact = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="lg:col-span-2 bg-[#0a0f1a] border border-white/5 rounded-3xl p-8 md:p-12"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Let's Start Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Transformation</span>
                            </h2>
                            <p className="text-neutral-400">Fill out the form below and our AI experts will get back to you within 24 hours</p>
                        </div>

                        <form className="space-y-8">
                            {/* Step 1 */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">1</span>
                                    <h3 className="text-white font-semibold text-lg">Personal Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-neutral-400">First Name *</label>
                                        <input type="text" placeholder="John" className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-neutral-400">Last Name *</label>
                                        <input type="text" placeholder="Doe" className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-neutral-400">Email *</label>
                                        <input type="email" placeholder="john@company.com" className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-neutral-400">Phone *</label>
                                        <input type="tel" placeholder="9106915561" className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm text-neutral-400">Company *</label>
                                        <input type="text" placeholder="Your Company Name" className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-bold text-sm">2</span>
                                    <h3 className="text-white font-semibold text-lg">Project Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-neutral-400">Service Interest</label>
                                        <select className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                                            <option>Select a service</option>
                                            <option>AI Automation</option>
                                            <option>Web Development</option>
                                            <option>Mobile App Dev</option>
                                            <option>Marketing</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-neutral-400">Project Budget *</label>
                                        <select className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                                            <option>Select Range</option>
                                            <option>$5k - $10k</option>
                                            <option>$10k - $25k</option>
                                            <option>$25k - $50k</option>
                                            <option>$50k+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-neutral-400">Timeline *</label>
                                        <select className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                                            <option>Select Timeline</option>
                                            <option>Less than 1 month</option>
                                            <option>1-3 months</option>
                                            <option>3-6 months</option>
                                            <option>6 months+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm text-neutral-400">Project Details *</label>
                                        <textarea rows={4} placeholder="Tell us about your project, challenges, and goals..." className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" />
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
                                <Send size={20} />
                                Send Message & Start Your AI Journey
                            </button>
                            <p className="text-center text-xs text-neutral-500">We'll respond within 24 hours with a personalized AI strategy</p>
                        </form>
                    </motion.div>

                    {/* Right Column: Info Cards */}
                    <div className="space-y-6">

                        {/* Contact Us Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#0a0f1a] border border-white/5 rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-white font-bold">Contact Us</h3>
                            </div>
                            <p className="text-neutral-400 text-sm mb-6">Get in touch with us through email or phone for AI automation consultation and project discussions</p>

                            <div className="space-y-4">
                                <div className="p-4 bg-[#111624] rounded-xl flex items-center justify-between group">
                                    <div>
                                        <p className="text-xs text-neutral-500">Email Us</p>
                                        <p className="text-white text-sm font-medium">aipowereddevteam@gmail.com</p>
                                    </div>
                                    <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Email</button>
                                </div>
                                <div className="p-4 bg-[#111624] rounded-xl flex items-center justify-between group">
                                    <div>
                                        <p className="text-xs text-neutral-500">Call Us</p>
                                        <p className="text-white text-sm font-medium">+(91) 9561471054</p>
                                    </div>
                                    <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Call</button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visit Us Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#0a0f1a] border border-white/5 rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-white font-bold">Visit Us</h3>
                            </div>
                            <p className="text-neutral-400 text-sm mb-4">
                                Transforming businesses with AI-powered development solutions. We combine human creativity with artificial intelligence to deliver extraordinary results.
                            </p>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Ellis Bridge Ahmedabad 380006
                                </li>
                            </ul>
                        </motion.div>

                        {/* Quick Actions Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-center"
                        >
                            <h3 className="text-white font-bold text-lg mb-2">Get Started Today</h3>
                            <p className="text-blue-100 text-xs mb-6">Choose your preferred way to connect with our AI experts</p>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-3 rounded-lg transition-colors">
                                    <Mail size={14} /> Email
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-3 rounded-lg transition-colors">
                                    <Phone size={14} /> Call
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-3 rounded-lg transition-colors">
                                    <MessageSquare size={14} /> WhatsApp
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-3 rounded-lg transition-colors">
                                    <Calendar size={14} /> Demo
                                </button>
                            </div>

                            <div className="flex justify-center gap-4 text-[10px] text-blue-100 font-medium">
                                <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-400" /> 24/7 Support</span>
                                <span className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-white" /> Free Consultation</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
