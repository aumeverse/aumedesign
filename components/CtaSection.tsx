
import React from 'react';

const CtaSection: React.FC = () => {
    return (
        <section className="scroll-section py-20 md:py-40 px-6 md:px-8 bg-gray-100 dark:bg-brand-gray text-center grid-background">
            <h2 className="anim-text text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">Ready to Make Your Mark?</h2>
            <button className="cta-button mt-12 bg-brand-accent text-brand-white h-[60px] px-12 text-lg font-medium rounded-md">Let's Get Started →</button>
        </section>
    );
};

export default CtaSection;
