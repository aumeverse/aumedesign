import React, { useState, useEffect, useRef } from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import MenuPanel from './components/MenuPanel';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import WorkSection from './components/WorkSection';
import ServicesSection from './components/ServicesSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// This allows us to use GSAP and Lenis from the window object
declare const gsap: any;
declare const ScrollTrigger: any;
declare const Lenis: any;

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const lenisRef = useRef<any>(null);

    useEffect(() => {
        // --- Theme Management ---
        const savedTheme = localStorage.getItem('darkMode');
        const initialTheme = savedTheme !== null ? JSON.parse(savedTheme) : true;
        setIsDarkMode(initialTheme);

        if (initialTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prev => {
            const newIsDarkMode = !prev;
            localStorage.setItem('darkMode', JSON.stringify(newIsDarkMode));
            if (newIsDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newIsDarkMode;
        });
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const handleModalToggle = (state: boolean) => {
        setIsModalOpen(state);
    };

    useEffect(() => {
        document.body.classList.remove('preload');
        
        // --- Lenis & GSAP Initialization ---
        gsap.registerPlugin(ScrollTrigger);
        
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time: number) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        
        // --- Menu Animations ---
        const menuPanel = document.getElementById('menu-panel');
        const menuOverlay = document.getElementById('menu-overlay');

        if (isMenuOpen) {
            lenis.stop();
            document.body.style.overflow = 'hidden';
            if(menuPanel) {
                menuPanel.classList.remove('translate-x-full');
                menuPanel.classList.add('translate-x-0');
            }
            if(menuOverlay) menuOverlay.classList.remove('hidden');
            gsap.to(menuOverlay, { opacity: 1, duration: 0.5 });
            gsap.fromTo('.menu-item', { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power3.out', delay: 0.3 });
        } else {
            lenis.start();
            document.body.style.overflow = '';
            gsap.to(menuPanel, {
                x: '100%',
                duration: 0.7,
                ease: 'power3.inOut',
                onComplete: () => {
                    if (menuPanel) {
                        menuPanel.classList.add('translate-x-full');
                        menuPanel.classList.remove('translate-x-0');
                    }
                }
            });
            gsap.to(menuOverlay, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => menuOverlay && menuOverlay.classList.add('hidden')
            });
        }
        
        // --- Modal overflow handling ---
        if (isModalOpen) {
            lenis.stop();
            document.body.style.overflow = 'hidden';
        } else if (!isMenuOpen) { // only start if menu is also closed
            lenis.start();
            document.body.style.overflow = '';
        }

        // --- Core Animations ---
        const animations: any[] = [];

        // Hero
        animations.push(gsap.from('.hero-headline', { y: 100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 }));
        animations.push(gsap.from(['.hero-subline', '.hero-scroll'], { y: 40, opacity: 0, stagger: 0.15, duration: 1.2, ease: 'power3.out', delay: 0.5 }));
        
        // Sections
        document.querySelectorAll('.scroll-section').forEach(section => {
             animations.push(gsap.fromTo(section, { opacity: 0, y: 80 }, {
                opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' }
            }));
        });

        // Anim Text
        document.querySelectorAll('.anim-text').forEach(textBlock => {
            if (!textBlock.hasAttribute('data-split')) {
                textBlock.innerHTML = textBlock.textContent!.split(/(\s+)/).filter(Boolean).map(word => {
                    if (word.trim() === '') return `<span class="whitespace">${word}</span>`;
                    return word.split('').map(char => `<span class="letter inline-block">${char}</span>`).join('');
                }).join('');
                textBlock.setAttribute('data-split', 'true');
            }
            const letters = textBlock.querySelectorAll('.letter');
            if (letters.length > 0) {
                animations.push(gsap.fromTo(letters, { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.02, ease: 'power2.out', scrollTrigger: { trigger: textBlock, start: 'top 85%', end: 'bottom 60%', scrub: 1 } }));
            }
        });

        // Stat counter
        const statTrigger = ScrollTrigger.create({
            trigger: '#stats-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
            onEnter: () => {
                document.querySelectorAll('.stat-number').forEach(el => {
                    const numberElement = el as HTMLElement;
                    const target = parseInt(numberElement.getAttribute('data-target') || '0');
                    let count = { val: 0 };
                    gsap.to(count, {
                        val: target,
                        duration: 2.5,
                        ease: 'power1.out',
                        onUpdate: () => {
                            numberElement.innerText = Math.round(count.val) + '+';
                        }
                    });
                });
            }
        });
        animations.push(statTrigger);

        // Service Cards
         animations.push(gsap.from(".service-card", {
             y: 70, scale: 0.95, duration: 1, stagger: 0.15, ease: 'power3.out',
             scrollTrigger: { trigger: "#services", start: "top 80%", toggleActions: 'play none none none' }
         }));
        
        // FAQ items
        animations.push(gsap.from(".faq-item", {
            opacity: 0, y: 40, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: "#faq", start: "top 80%", toggleActions: 'play none none none' }
        }));
        
        // --- RESPONSIVE PORTFOLIO ANIMATIONS ---
        const mm = gsap.matchMedia();

        // DESKTOP: Horizontal Scroll
        mm.add("(min-width: 769px)", () => {
            const horizontalSection = document.querySelector('.horizontal-scroll-container');
            const slides = document.querySelector('.horizontal-scroll-wrapper');
            
            if (horizontalSection && slides) {
                gsap.to(slides, {
                x: () => -( (slides as HTMLElement).scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontalSection,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + (slides as HTMLElement).scrollWidth,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
                });
            }
        });

        // MOBILE: Stacking Cards
        mm.add("(max-width: 768px)", () => {
            const cards = gsap.utils.toArray('.stack-item');
            
            cards.forEach((card, index) => {
                const cardEl = card as HTMLElement;
                if (index < cards.length - 1) {
                
                gsap.to(cardEl, {
                    scrollTrigger: {
                    trigger: cardEl,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    id: `mobile-card-${index}`,
                    },
                    ease: "none"
                });
                
                gsap.to(cardEl.querySelector('.stack-card'), {
                    scrollTrigger: {
                    trigger: cards[index + 1] as HTMLElement,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    },
                    scale: 0.9,
                    borderRadius: "40px",
                    ease: "none"
                });
                }
            });
        });


        // Cleanup
        return () => {
            lenis.destroy();
            mm.revert(); // Revert all matchMedia animations
            ScrollTrigger.getAll().forEach((trigger:any) => trigger.kill());
        };
    }, [isMenuOpen, isModalOpen]);


    return (
        <>
            <CustomCursor />
            <Header
                isDarkMode={isDarkMode}
                onThemeToggle={toggleTheme}
                onMenuToggle={handleMenuToggle}
                onOpenContact={() => handleModalToggle(true)}
            />
            <MenuPanel isOpen={isMenuOpen} onClose={closeMenu} lenis={lenisRef.current} />
            <main id="main-content">
                <HeroSection />
                <StorySection />
                <WorkSection />
                <ServicesSection />
                <FaqSection />
                <CtaSection />
            </main>
            <Footer />
            <ContactModal isOpen={isModalOpen} onClose={() => handleModalToggle(false)} />
        </>
    );
};

export default App;