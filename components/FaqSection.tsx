import React, { useState, useRef } from 'react';

const faqData = [
    { q: "What's included in a logo design project?", a: "You get multiple logo concepts to choose from, a couple rounds of revisions, and all the final files in every format you'll ever need. PNG, SVG, PDF, the works. We also throw in a quick brand guidelines doc so you know how to use your logo correctly." },
    { q: "What kind of websites do you build?", a: "Portfolio sites, business websites, landing pages, e-commerce stores, basically anything you need online. We keep them fast, clean, and mobile friendly. If you can dream it, we can probably build it." },
    { q: "What does creative advertising design include?", a: "Social media ads, promotional banners, product launch campaigns, poster designs, basically any visual content you need to promote your business. We create scroll stopping designs that actually get noticed and clicked." },
    { q: "What exactly is creative consulting?", a: "Think of it as having a creative strategist on your team without hiring full time. We help you figure out your brand direction, plan campaigns, choose the right visuals, and make smart design decisions. It's for businesses that need guidance, not just execution." },
    { q: "What if I don't like the first designs?", a: "That's why we show you multiple concepts first. We include a few revision rounds in every project so you can fine tune things until it feels right. The goal is to create something you love, not just something we like." },
    { q: "How long does the design process usually take?", a: "Logo takes about one to two weeks. Full brand identity takes three to four weeks. Websites take two to four weeks. Ad campaigns usually take three to five days. We don't rush creativity, but we also won't keep you waiting forever. If you've got a deadline, tell us upfront and we'll make it work." },
    { q: "Will my website work on mobile?", a: "Absolutely. Every website we build is mobile first, meaning it looks great on phones, tablets, and desktops. In 2025, if your site doesn't work on mobile, it doesn't work at all." },
    { q: "Can I update the website myself after it's done?", a: "Yes! We can build it on platforms like WordPress where you can easily edit text, add images, and update content without needing to code. We'll also show you how to use it. If you prefer us to handle updates, we offer maintenance packages too." },
    { q: "Do I own the designs after the project?", a: "100%. Once the project is complete and paid for, you own everything. All files, all rights, no strings attached. Use it however you want, forever." },
    { q: "How do we communicate during the project?", a: "Whatever works for you. Most clients prefer WhatsApp for quick updates, but we're also on email, Zoom calls, or even a good old fashioned phone call. We're flexible like that." }
];

const FaqItem: React.FC<{ item: { q: string, a: string }, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <div className="faq-question" onClick={onClick}>
                <h3 className="text-xl md:text-2xl font-medium">{item.q}</h3>
                <svg className="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <div
                ref={contentRef}
                className="faq-answer"
                style={{ maxHeight: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px' }}
            >
                 <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="scroll-section py-20 md:py-32 px-6 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="anim-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={activeIndex === index}
                            onClick={() => handleItemClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;