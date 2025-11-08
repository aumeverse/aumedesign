
import React from 'react';

interface MenuPanelProps {
    isOpen: boolean;
    onClose: () => void;
    lenis: any;
}

const MenuPanel: React.FC<MenuPanelProps> = ({ onClose, lenis }) => {
    
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                onClose();
                setTimeout(() => {
                    if (lenis) {
                        lenis.scrollTo(targetElement);
                    }
                }, 500);
            }
        } else {
            onClose();
        }
    };
    
    return (
        <>
            <div id="menu-panel" className="fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-1/3 bg-brand-white dark:bg-brand-black z-40 transform translate-x-full transition-transform duration-500 ease-in-out">
                <div className="p-8 h-full flex flex-col justify-between">
                    <nav>
                        <ul className="text-3xl md:text-4xl font-bold space-y-6 pt-20">
                            <li className="overflow-hidden"><a href="#story" className="menu-item inline-block" onClick={handleLinkClick}>Our Story</a></li>
                            <li className="overflow-hidden"><a href="#work" className="menu-item inline-block" onClick={handleLinkClick}>Our Work</a></li>
                            <li className="overflow-hidden"><a href="#services" className="menu-item inline-block" onClick={handleLinkClick}>What We Do</a></li>
                            <li className="overflow-hidden"><a href="#faq" className="menu-item inline-block" onClick={handleLinkClick}>FAQs</a></li>
                            <li className="overflow-hidden"><a href="#" className="menu-item inline-block" onClick={handleLinkClick}>Insights</a></li>
                            <li className="overflow-hidden"><a href="#contact" className="menu-item inline-block" onClick={handleLinkClick}>Get in Touch</a></li>
                        </ul>
                    </nav>
                    <div className="space-y-8 pb-8">
                        <div className="text-sm text-gray-400">
                            <a href="#" className="menu-item-footer hover:text-black dark:hover:text-white transition">Legal Terms</a> | <a href="#" className="menu-item-footer hover:text-black dark:hover:text-white transition">Privacy Notice</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="menu-overlay" className="fixed inset-0 bg-black bg-opacity-50 z-30 hidden" onClick={onClose}></div>
        </>
    );
};

export default MenuPanel;
