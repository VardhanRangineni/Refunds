import React from 'react';
import { FaGooglePlay, FaApple, FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="app-banner">
                <div className="container banner-content">
                    <div className="phone-mockup">
                        {/* Placeholder for phone image */}
                        <div className="phone-screen"></div>
                    </div>
                    <div className="banner-text">
                        <h2>Download Our App Now</h2>
                        <p>Buy general store products and medicines from your mobile at anytime, anywhere.</p>
                        <div className="app-buttons">
                            <button className="store-btn"><FaGooglePlay /> Google Play</button>
                            <button className="store-btn"><FaApple /> App Store</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-links-section">
                <div className="container">
                    <div className="contact-bar">
                        <div className="contact-item">
                            <span>Call us 24x7</span>
                            <strong>040-67006700</strong>
                        </div>
                        <div className="subscribe-box">
                            <input type="email" placeholder="Enter your email address" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                    <div className="links-grid">
                        <div className="link-column">
                            <h3>General Store</h3>
                            <ul>
                                <li>Baby Needs</li>
                                <li>Personal Care</li>
                                <li>Health & Nutrition</li>
                                <li>OTC & Health Needs</li>
                                <li>Vitamins & Supplements</li>
                                <li>Diabetic Needs</li>
                                <li>Household Needs</li>
                                <li>Ayurvedic</li>
                                <li>Sexual Wellness</li>
                            </ul>
                        </div>
                        <div className="link-column">
                            <h3>Pharmacy</h3>
                            <ul>
                                <li>Medicine Information</li>
                                <li>Browse Drugs by Therapeutic Category</li>
                                <li>Browse Surgical products by Category</li>
                            </ul>
                        </div>
                        <div className="link-column">
                            <h3>Diagnostics</h3>
                            <ul>
                                <li>Radiology Tests</li>
                                <li>Pathology Tests</li>
                            </ul>
                            <h3>Doctor Consultation</h3>
                            <ul>
                                <li>By Specialization</li>
                                <li>By Symptoms</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-text">
                        <p><strong>About MedPlusMart:</strong> MedPlus is one of the most trusted gateways to medicines and general provision...</p>
                        <p>With an aim to eradicate fake and ineffective medicines, and supply high-quality medicines in India, MedPlus was launched in 2006...</p>
                    </div>

                    <div className="footer-bottom">
                        <div className="partners">
                            <span className="logo-box">MedPlus Lens</span>
                        </div>
                        <div className="social-links">
                            <span>Follow us</span>
                            <FaFacebook />
                            <FaTwitter />
                            <FaYoutube />
                            <FaLinkedin />
                            <FaInstagram />
                        </div>
                    </div>
                    <div className="copyright">
                        © 2024 MedPlusMart.com. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
