"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Saman Malik",
        role: "Customer Support Lead",
        quote: "The support team from AIPoweredDev is exceptional, guiding us through setup and providing ongoing assistance, ensuring our complete satisfaction with their AI solutions.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Aliza Khan",
        role: "Business Analyst",
        quote: "The smooth implementation of AI solutions exceeded our expectations. It streamlined our processes, improving overall business performance dramatically.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Farhan Siddiqui",
        role: "Marketing Director",
        quote: "Our business functions improved significantly with user-friendly AI design and the positive impact on our customer feedback has been remarkable.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Briana Patton",
        role: "Operations Manager",
        quote: "AIPoweredDev's AI automation solutions revolutionized our operations, streamlining finance and inventory management. The cloud-based platform keeps us productive, even remotely.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Omar Raza",
        role: "CEO",
        quote: "Seamless integration with our existing systems, enhancing our business operations and efficiency. Highly recommend for their intuitive interface.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Sarah Jenkins",
        role: "CTO, TechFlow",
        quote: "The architecture they designed for our IoT infrastructure handled our 10x growth without a glitch. Truly world-class engineering.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Michael Chen",
        role: "Founder, StartupX",
        quote: "From concept to MVP in record time. Their detailed roadmap and execution made fundraising a breeze.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Emily Rodriguez",
        role: "Product Manager",
        quote: "The mobile app performance is buttery smooth. User retention went up by 40% after the rebuild.",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "David Kim",
        role: "Director of Engineering",
        quote: "We needed a partner who understood both AI and traditional DevOps. They delivered a perfect hybrid solution.",
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Priya Patel",
        role: "CMO",
        quote: "Their data-driven marketing tools helped us identify our core audience with laser precision. ROI is up 200%.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "James Wilson",
        role: "VP of Sales",
        quote: "Exceptional delivery speed and code quality. The automated reporting tools save my team 20 hours a week.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
        name: "Nina Gupta",
        role: "Head of Innovation",
        quote: "They don't just write code; they understand business logic. The AI agents they built are actually useful.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
    }
];

type Testimonial = typeof testimonials[number];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="p-6 rounded-2xl bg-[#0a0f1a] border border-white/5 hover:border-blue-500/30 transition-all duration-300 mb-6">
        <Quote className="text-blue-500/20 mb-4" size={32} />

        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
            ))}
        </div>

        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
            "{testimonial.quote}"
        </p>

        <div className="flex items-center gap-3">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover border border-white/10"
            />
            <div>
                <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                <p className="text-neutral-500 text-xs">{testimonial.role}</p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        </div>
    </div>
);

const TestimonialColumn = ({
    testimonials,
    duration = 40,
    className = ""
}: {
    testimonials: Testimonial[],
    duration?: number,
    className?: string
}) => (
    <div className={`relative ${className}`}>
        <motion.div
            animate={{ y: ["-50%", "0%"] }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
            }}
            className="flex flex-col"
        >
            {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
            ))}
        </motion.div>
    </div>
);

const TestimonialColumnReverse = ({
    testimonials,
    duration = 40,
    className = ""
}: {
    testimonials: Testimonial[],
    duration?: number,
    className?: string
}) => (
    <div className={`relative ${className}`}>
        <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
            }}
            className="flex flex-col"
        >
            {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard key={i} testimonial={t} />
            ))}
        </motion.div>
    </div>
);

export const Testimonials = () => {
    const col1 = testimonials.slice(0, 4);
    const col2 = testimonials.slice(4, 8);
    const col3 = testimonials.slice(8, 12);

    return (
        <section className="py-24 relative overflow-hidden bg-black/40">
            <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                    <span className="text-sm font-semibold tracking-wide uppercase">
                        Real Results, Real Impact
                    </span>
                    <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Say</span>
                </h2>
                <p className="text-neutral-400">Real stories from teams using our AI automation every day</p>
            </div>

            <div className="container mx-auto px-4 h-[600px] overflow-hidden relative">
                {/* Gradient Overlays for Smooth Fade */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#000000] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent z-10 pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                    <TestimonialColumnReverse testimonials={col1} duration={45} />
                    <TestimonialColumn testimonials={col2} duration={50} className="hidden md:block" />
                    <TestimonialColumnReverse testimonials={col3} duration={45} className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
};
