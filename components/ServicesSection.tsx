
import React from 'react';

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="scroll-section py-20 md:py-32 px-6 md:px-8 bg-gray-100 dark:bg-brand-gray">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="anim-text text-5xl md:text-7xl font-bold leading-tight">Services We Provide</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-12">
                    <div className="service-card bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg p-12">
                        <svg className="w-10 h-10 mb-6 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                        <h3 className="text-3xl font-bold mb-4">Logo Design</h3>
                        <p className="text-lg font-light text-gray-600 dark:text-gray-300">Logos that make an impact. Meaningful, memorable, and built to last.</p>
                    </div>
                    <div className="service-card bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg p-12">
                        <svg className="w-10 h-10 mb-6 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                        <h3 className="text-3xl font-bold mb-4">Brand Identity</h3>
                        <p className="text-lg font-light text-gray-600 dark:text-gray-300">Your brand, everywhere. Consistent, recognizable, unforgettable.</p>
                    </div>
                    <div className="service-card bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg p-12">
                        <svg className="w-10 h-10 mb-6 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        <h3 className="text-3xl font-bold mb-4">Packaging Design</h3>
                        <p className="text-lg font-light text-gray-600 dark:text-gray-300">Packaging that speaks first. Premium feel, instant connection.</p>
                    </div>
                    <div className="service-card bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg p-12">
                        <svg className="w-10 h-10 mb-6 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        <h3 className="text-3xl font-bold mb-4">Website Design</h3>
                        <p className="text-lg font-light text-gray-600 dark:text-gray-300">Digital experiences that work. Beautiful, intuitive, scalable.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
