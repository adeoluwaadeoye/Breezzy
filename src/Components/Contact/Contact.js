import React from 'react';
import BookingForm from './BookingForm';
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact" id='contact'>
            <div className="booking-section">
                <div className='mini-heading'>
                    <h4>Contact</h4>
                </div>
                <h2>Book Your Stay</h2>
                <BookingForm />
            </div>
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="contact-item">
                    <i class="fa-solid fa-map-pin"></i>
                    <p>123 Hotel Street, Hotel-City, Country</p>
                </div>
                <div className="contact-item">
                    <i class="fa-solid fa-mobile-screen"></i>
                    <p>+1 (123) 456-7890</p>
                </div>
                <div className="contact-item">
                    <i class="fa-regular fa-envelope"></i>
                    <p>info@hotelmail.com</p>
                </div>
                <div className="social-media-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-telegram"></i>
                </div>
            </div>
        </section>
    );
};

export default Contact;
