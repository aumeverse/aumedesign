
import React, { useState, useEffect, useRef } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '', email: '', phone: '', businessName: '', serviceType: '',
        budget: '', timeline: '', projectDetails: '', referenceLinks: '', source: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if(value) {
            setErrors(prev => ({...prev, [name]: false}));
        }
    };
    
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, source: e.target.value }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: boolean } = {};
        const requiredFields = ['fullName', 'email', 'phone', 'serviceType', 'budget', 'projectDetails'];
        let isValid = true;
        requiredFields.forEach(field => {
            if (!formData[field as keyof typeof formData]) {
                newErrors[field] = true;
                isValid = false;
            }
        });
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(false);
        setErrorMessage(false);

        if (!validateForm()) {
            setErrorMessage(true);
            setTimeout(() => setErrorMessage(false), 4000);
            return;
        }

        const whatsappNumber = '919372998318';
        const message = `🎨 *New Design Inquiry - AUME Design*\n\n👤 *Client Information:*\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness: ${formData.businessName || 'Not provided'}\n\n💼 *Project Details:*\nService Required: ${formData.serviceType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline || 'Not specified'}\n\n📝 *Project Description:*\n${formData.projectDetails}\n\n🔗 *References:*\n${formData.referenceLinks || 'None'}\n\n📢 *Source:* ${formData.source || 'Not specified'}`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        setSuccessMessage(true);
        setFormData({ fullName: '', email: '', phone: '', businessName: '', serviceType: '', budget: '', timeline: '', projectDetails: '', referenceLinks: '', source: ''});
        setErrors({});

        setTimeout(() => {
            onClose();
            setTimeout(() => setSuccessMessage(false), 500);
        }, 2000);
    };
    
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === modalRef.current) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div ref={modalRef} className={`contact-modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
            <div className="contact-modal-container">
                <button className="close-modal-btn" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>Let's Create Something Amazing</h2>
                    <p>Tell us about your project and we'll bring your vision to life</p>
                </div>
                <form className="design-inquiry-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-section">
                        <h3 className="section-title">About You</h3>
                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="fullName">Full Name <span className="required">*</span></label>
                                <input type="text" id="fullName" name="fullName" placeholder="John Doe" required value={formData.fullName} onChange={handleChange} className={errors.fullName ? 'border-red-500' : ''}/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Email Address <span className="required">*</span></label>
                                <input type="email" id="email" name="email" placeholder="john@company.com" required value={formData.email} onChange={handleChange} className={errors.email ? 'border-red-500' : ''}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                                <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required value={formData.phone} onChange={handleChange} className={errors.phone ? 'border-red-500' : ''}/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="businessName">Business/Company Name</label>
                                <input type="text" id="businessName" name="businessName" placeholder="Your Company Ltd." value={formData.businessName} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-section">
                        <h3 className="section-title">Your Project</h3>
                        <div className="form-field">
                            <label htmlFor="serviceType">What service do you need? <span className="required">*</span></label>
                            <select id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange} className={errors.serviceType ? 'border-red-500' : ''}>
                                <option value="">Select a service</option><option value="brand-identity">Brand Identity & Logo Design</option><option value="website-design">Website Design & UI/UX</option><option value="social-media">Social Media Graphics</option><option value="packaging">Packaging Design</option><option value="print-design">Print Design (Brochures, Flyers)</option><option value="complete-branding">Complete Branding Package</option><option value="other">Other (Please specify below)</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <div className="form-field">
                                <label htmlFor="budget">Project Budget <span className="required">*</span></label>
                                <select id="budget" name="budget" required value={formData.budget} onChange={handleChange} className={errors.budget ? 'border-red-500' : ''}>
                                    <option value="">Select budget range</option><option value="under-25k">Under ₹25,000</option><option value="25k-50k">₹25,000 - ₹50,000</option><option value="50k-100k">₹50,000 - ₹1,00,000</option><option value="100k-250k">₹1,00,000 - ₹2,50,000</option><option value="250k-plus">₹2,50,000+</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label htmlFor="timeline">Expected Timeline</label>
                                <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}>
                                    <option value="">Select timeline</option><option value="urgent">Urgent (Within 1 week)</option><option value="1-2-weeks">1-2 Weeks</option><option value="2-4-weeks">2-4 Weeks</option><option value="1-2-months">1-2 Months</option><option value="flexible">Flexible</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-field">
                            <label htmlFor="projectDetails">Tell us about your project <span className="required">*</span></label>
                            <textarea id="projectDetails" name="projectDetails" rows={5} placeholder="Describe your project requirements, target audience, design preferences, and any specific ideas you have in mind..." required value={formData.projectDetails} onChange={handleChange} className={errors.projectDetails ? 'border-red-500' : ''}></textarea>
                        </div>
                        <div className="form-field">
                            <label htmlFor="referenceLinks">Reference Links/Inspiration (Optional)</label>
                            <input type="url" id="referenceLinks" name="referenceLinks" placeholder="https://example.com/inspiration" value={formData.referenceLinks} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-section">
                        <h3 className="section-title">Additional Details</h3>
                        <div className="form-field checkbox-group">
                            <label>How did you hear about us?</label>
                            <div className="checkbox-options">
                                <label><input type="radio" name="source" value="google" checked={formData.source === 'google'} onChange={handleRadioChange}/> Google Search</label>
                                <label><input type="radio" name="source" value="instagram" checked={formData.source === 'instagram'} onChange={handleRadioChange}/> Instagram</label>
                                <label><input type="radio" name="source" value="referral" checked={formData.source === 'referral'} onChange={handleRadioChange}/> Referral</label>
                                <label><input type="radio" name="source" value="linkedin" checked={formData.source === 'linkedin'} onChange={handleRadioChange}/> LinkedIn</label>
                                <label><input type="radio" name="source" value="other" checked={formData.source === 'other'} onChange={handleRadioChange}/> Other</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="submit-inquiry-btn"><span className="btn-text">Send Inquiry</span><span className="btn-icon">→</span></button>
                        <p className="form-note">We'll get back to you within 24 hours</p>
                    </div>
                    {successMessage && <div className="form-message success-message show">✓ Thank you! We've received your inquiry and will contact you soon.</div>}
                    {errorMessage && <div className="form-message error-message show">⚠ Please fill out all required fields correctly.</div>}
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
