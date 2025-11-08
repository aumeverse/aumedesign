
import React, { useEffect, useRef } from 'react';

declare const gsap: any;

const HeroSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const headlines = container.querySelectorAll('.hero-headline');

        const onMouseMove = (e: MouseEvent) => {
            let rect = container.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            let xPercent = (x / rect.width - 0.5) * 2;
            let yPercent = (y / rect.height - 0.5) * 2;
            gsap.to(headlines, {
                duration: 1,
                rotationY: 5 * xPercent,
                rotationX: -5 * yPercent,
                transformPerspective: 1000,
                ease: 'power2.out'
            });
        };

        const onMouseLeave = () => {
            gsap.to(headlines, {
                duration: 1,
                rotationY: 0,
                rotationX: 0,
                ease: 'power2.out'
            });
        };

        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseLeave);

        return () => {
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);


    return (
        <section ref={containerRef} className="h-screen min-h-[700px] flex flex-col justify-center items-center text-center p-6 md:p-8 relative grid-background hero-image-container">
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <img src="https://i.ibb.co/JRCQyPdG/Untitled-2-01.png" alt="Aumedesign Brand Logo" className="w-5/6 max-w-6xl hero-headline hidden dark:block" />
                <img src="https://i.ibb.co/G4FSVD5T/Untitled-2-03.png" alt="Aumedesign Brand Logo" className="w-5/6 max-w-6xl hero-headline block dark:hidden" />
                <p className="text-xl md:text-3xl font-light tracking-wider -mt-8 md:-mt-16 lg:-mt-24 hero-subline text-gray-600 dark:text-gray-300">We're a creative powerhouse building brands that matter.</p>
            </div>
            <div className="absolute bottom-8 text-center text-gray-500 dark:text-gray-400 text-sm hero-scroll"><p>↓ Scroll to explore</p></div>
        </section>
    );
};

export default HeroSection;
