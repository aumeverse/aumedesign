import React from 'react';

const projects = [
    { title: "Roja-luxury perfume", description: "Brand Identity • 2025", imgSrc: "https://i.ibb.co/200vLrGK/acd8a5233876973-68b82584d38f6.webp", alt: "Roja-luxury perfume Project" },
    { title: "SHOR / CLOTHING BRAND", description: "Packaging Design • 2025", imgSrc: "https://i.ibb.co/RkpkQQ8h/b04596230224489-6873355ea45b5.webp", alt: "SHOR / CLOTHING BRAND Project" },
    { title: "Chokha Brand Identity", description: "Complete Branding • 2025", imgSrc: "https://i.ibb.co/NdLTrhwm/68c05a230186811-687240b3ae895.webp", alt: "Chokha Brand Identity Project" },
    { title: "GREEEN", description: "Website + Brand • 2025", imgSrc: "https://i.ibb.co/DPBqwV6D/a98078233165195-68aa9aff9ea2e.webp", alt: "GREEEN Project" }
];

const WorkSection: React.FC = () => {
    return (
        <section id="work" className="portfolio-section">
            {/* Desktop Horizontal Scroll (auto-hidden on mobile) */}
            <div className="desktop-portfolio">
                <div className="horizontal-scroll-container">
                    <div className="horizontal-scroll-wrapper">
                        {projects.map((project, index) => (
                            <div className="project-slide" key={`desktop-${index}`}>
                                <img src={project.imgSrc} alt={project.alt} />
                                <div className="project-info">
                                    <h3 className="text-3xl md:text-5xl font-bold">{project.title}</h3>
                                    <p className="text-lg md:text-xl mt-2 text-gray-300">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Stacking Cards (auto-hidden on desktop) */}
            <div className="mobile-portfolio">
                <div className="stack-wrapper">
                    {projects.map((project, index) => (
                        <div className="stack-item" key={`mobile-${index}`}>
                            <div className="stack-card">
                                <img src={project.imgSrc} alt={project.alt} />
                                <div className="card-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;