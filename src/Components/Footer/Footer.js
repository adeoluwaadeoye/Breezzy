import React from 'react';
import './Footer.css'; // 

const Footer = () => {
    return (
        <footer className="footer-container footer">
            <div className="footer-section about-us">
                <h3>More About Us</h3>
                <p>
                    Discover our luxurious hotel with stunning views, exceptional amenities, and warm hospitality. Experience a memorable stay with us.
                </p>
            </div>

            <div className="footer-section newsletter">
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter to receive exclusive offers and updates.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            <div className="footer-section information">
                <h3>Information</h3>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#rooms">Rooms</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#popular">Offers & Packages</a></li>
                </ul>
            </div>

            <div className="footer-section contact">
                <h3>Contact</h3>
                <p>
                    <i className="fa-solid fa-location-pin"></i> 123, Hotelway, Fancy County, NG
                </p>
                <p>
                    <i className="fa-regular fa-envelope"></i> <a href="mailto:contact@hotel.com">contact@hotel.com</a>
                </p>
                <p>
                    <i className="fa-solid fa-mobile-retro"></i> <a href="tel:+123456789">+123 456 789</a>
                </p>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                <p className='copy'>&copy; 2023 Hotel Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
