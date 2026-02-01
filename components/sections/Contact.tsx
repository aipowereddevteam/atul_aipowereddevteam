"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Calendar, ArrowRight, CheckCircle } from "lucide-react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare WhatsApp message
        const whatsappMessage = `Hi! I'm ${formData.name} from ${formData.company}.

Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

I'd like to schedule a free consultation to discuss my project.`;

        // Your WhatsApp number
        const whatsappNumber = "919561471054";

        // Encode message and redirect to WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        setSubmitted(true);

        // Redirect to WhatsApp after brief success message
        setTimeout(() => {
            window.open(whatsappURL, "_blank");

            // Reset form after redirect
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: ""
                });
            }, 2000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                        {!submitted ? (
                            <>
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
                                        <Calendar size={18} />
                                        <span className="text-sm font-semibold tracking-wide uppercase">Get Started Today</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        Ready to Transform Your Business?
                                    </h2>
                                    <p className="text-neutral-400">Quick form to get you started - we'll discuss details on WhatsApp</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-300">Your Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Atul Nagose"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-300">Company *</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your Company Name"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                                                <Mail size={16} />
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="you@company.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                                                <Phone size={16} />
                                                Phone *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-300">Tell us about your project</label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Briefly describe what you need help with..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                                    >
                                        <MessageSquare size={20} />
                                        Continue to WhatsApp
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-center text-xs text-neutral-500">Budget and timeline? We'll discuss that on WhatsApp - free consultation!</p>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-24">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={40} className="text-green-500" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-3">Opening WhatsApp...</h3>
                                <p className="text-neutral-400 text-lg">Redirecting you to continue the conversation</p>
                            </div>
                        )}
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
                                <a
                                    href="mailto:aipowereddevteam@gmail.com"
                                    className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-3 rounded-lg transition-colors"
                                >
                                    <Mail size={14} /> Email
                                </a>
                                <a
                                    href="tel:+919561471054"
                                    className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-3 rounded-lg transition-colors"
                                >
                                    <Phone size={14} /> Call
                                </a>
                                <a
                                    href="https://wa.me/919561471054"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-3 rounded-lg transition-colors"
                                >
                                    <MessageSquare size={14} /> WhatsApp
                                </a>
                                <a
                                    href="https://calendar.google.com/calendar/appointments/schedules/REPLACE_WITH_YOUR_SCHEDULE_ID"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium py-3 rounded-lg transition-colors"
                                >
                                    <Calendar size={14} /> Demo
                                </a>
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
