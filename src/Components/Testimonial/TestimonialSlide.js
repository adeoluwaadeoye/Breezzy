import React from "react";
import "./Testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const TestimonialSlide = ({ imageSrc, name, quote }) => (
    <div className="testimonial-slide">
        <div className="icon-flex"><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" /></div>
        <div className="testimonial-content">
            <p className="testimonial-name">{name}</p>
            <img src={imageSrc} alt={name} className="testimonial-image" />
            <blockquote className="testimonial-quote">{quote}</blockquote>
        </div>
    </div>
);

export default TestimonialSlide;
