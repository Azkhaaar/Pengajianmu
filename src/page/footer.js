import React from 'react';
import './footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <ul>
                    <li><a href="https://www.facebook.com/masjid.darussalamkalibeber/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/masjiddarussalamkalibeber/">Instagram</a></li>
                    <li><a href="https://www.youtube.com/@ammtv9437">YouTube</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:info@pengajianmu.com">info@pengajianmu.com</a></p>
                    <p>Phone: <a href="tel:+62123456789">+62 123 456 789</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 PengajianMu. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;