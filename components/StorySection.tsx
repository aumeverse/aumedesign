
import React from 'react';

const StorySection: React.FC = () => {
    return (
        <section id="story" className="scroll-section py-20 md:py-32 px-6 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
                <div className="max-w-xl">
                    <h2 className="anim-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Designing Brands Passionately.</h2>
                </div>
                <div>
                    <p className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-600 dark:text-gray-300">Every brand has a voice. We make sure yours is heard, felt, and never forgotten. We craft identities, shape brands, and create experiences that turn heads into handshakes.</p>
                    <div className="grid grid-cols-2 gap-8 text-center" id="stats-grid">
                        <div>
                            <p className="stat-number text-5xl md:text-6xl font-bold text-brand-accent" data-target="50">0+</p>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Brand Identity Projects</p>
                        </div>
                        <div>
                            <p className="stat-number text-5xl md:text-6xl font-bold text-brand-accent" data-target="75">0+</p>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Designs Completed</p>
                        </div>
                        <div>
                            <p className="stat-number text-5xl md:text-6xl font-bold text-brand-accent" data-target="20">0+</p>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Happy Clients</p>
                        </div>
                        <div>
                            <p className="stat-number text-5xl md:text-6xl font-bold text-brand-accent" data-target="5">0+</p>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">Years of Excellence</p>
                        </div>
                    </div>
                    <a href="#" className="inline-block mt-12 text-lg font-medium border-b border-black dark:border-brand-white pb-1 hover:border-brand-accent transition">Discover More →</a>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
