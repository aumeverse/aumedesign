
import React, { useEffect } from 'react';

declare const gsap: any;

const CustomCursor: React.FC = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        if (!cursor || /Mobi|Android/i.test(navigator.userAgent)) {
            if (cursor) cursor.style.display = 'none';
            return;
        }

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power2.out' });
        };

        const onMouseEnter = () => gsap.to(cursor, { scale: 2.5, duration: 0.3 });
        const onMouseLeave = () => gsap.to(cursor, { scale: 1, duration: 0.3 });

        window.addEventListener('mousemove', onMouseMove);

        const interactiveElements = document.querySelectorAll('a, button, .group, .faq-question, .switch');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return <div id="custom-cursor" className="hidden lg:block fixed w-3 h-3 bg-brand-accent rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"></div>;
};

export default CustomCursor;
