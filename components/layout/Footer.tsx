import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-black/80 backdrop-blur-md text-white py-12 border-t border-neutral-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">AIPoweredDev</h3>
                        <p className="text-neutral-400 max-w-sm">
                            Specialized AI Automation Innovation Company. We provide end-to-end digital solutions from development to marketing.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-neutral-400 text-sm">
                            <li><Link href="#" className="hover:text-white">System Architecture</Link></li>
                            <li><Link href="#" className="hover:text-white">Full Stack Development</Link></li>
                            <li><Link href="#" className="hover:text-white">Cloud Optimization</Link></li>
                            <li><Link href="#" className="hover:text-white">IoT Solutions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Connect</h4>
                        <ul className="space-y-2 text-neutral-400 text-sm">
                            <li><Link href="#" className="hover:text-white">LinkedIn</Link></li>
                            <li><Link href="#" className="hover:text-white">GitHub</Link></li>
                            <li><Link href="#" className="hover:text-white">Email</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-neutral-900 text-center text-neutral-600 text-sm">
                    © {new Date().getFullYear()} AIPoweredDev. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
