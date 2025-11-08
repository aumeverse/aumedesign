
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="scroll-section bg-gray-100 dark:bg-brand-black py-20 px-6 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-500 dark:text-gray-400">
                <div>
                    <h3 className="text-2xl font-medium text-black dark:text-white mb-4">Aumedesign</h3>
                    <p>Design Beyond Boundaries</p>
                </div>
                <div>
                    <h4 className="font-bold text-black dark:text-white mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li><a href="#services" className="hover:text-black dark:hover:text-white transition">Logo Design</a></li>
                        <li><a href="#services" className="hover:text-black dark:hover:text-white transition">Brand Identity</a></li>
                        <li><a href="#services" className="hover:text-black dark:hover:text-white transition">Packaging Design</a></li>
                        <li><a href="#services" className="hover:text-black dark:hover:text-white transition">Website Development</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-black dark:text-white mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#story" className="hover:text-black dark:hover:text-white transition">Our Story</a></li>
                        <li><a href="#work" className="hover:text-black dark:hover:text-white transition">Our Work</a></li>
                        <li><a href="#services" className="hover:text-black dark:hover:text-white transition">What We Do</a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white transition">Insights</a></li>
                        <li><a href="#contact" className="hover:text-black dark:hover:text-white transition">Get in Touch</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-black dark:text-white mb-4">Connect</h4>
                    <ul className="space-y-2">
                        <li><a href="mailto:hello@aumedesign.com" className="hover:text-black dark:hover:text-white transition">hello@aumedesign.com</a></li>
                        <li><a href="tel:+919372998318" className="hover:text-black dark:hover:text-white transition">+91 9372998318</a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white transition flex items-center group">Instagram <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white transition flex items-center group">LinkedIn <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-500">
                <p>&copy; 2025 Aumedesign. All rights reserved.</p>
                <p className="mt-4 md:mt-0">Based in India • Working Worldwide</p>
            </div>
        </footer>
    );
};

export default Footer;
