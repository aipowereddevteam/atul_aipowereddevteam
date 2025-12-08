"use client";

export const Team = () => {
    return (
        <section className="py-20 bg-transparent text-white border-t border-neutral-800/50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-16">Our Expert Team</h2>
                <div className="max-w-md mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-colors">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold">
                        AN
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Atul Nagose</h3>
                    <p className="text-blue-400 font-medium mb-4">Lead Systems Architect</p>
                    <p className="text-neutral-400 text-sm">
                        Specializing in High-Scale IoT, Real-Time Data Pipelines, and Cloud Optimization.
                        2.5+ Years of Enterprise Experience.
                    </p>
                </div>
            </div>
        </section>
    );
};
