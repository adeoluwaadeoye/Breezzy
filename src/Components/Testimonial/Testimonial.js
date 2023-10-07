// Testimonial.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSlide from "./TestimonialSlide";
import testimonialData from "./TestimonialApi";
import "./Testimonial.css";
import VideoFrame from "./VideoFrame"; // Import the VideoFrame component

const Testimonial = () => {
    const settings = {
        infinite: true,
        speed: 2000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        dots: true,
    };

    return (
        <section className="testimonial-container" id="testimonial">
            <VideoFrame />
            <Slider {...settings}>
                {testimonialData.map((testimonial, index) => (
                    <TestimonialSlide
                        key={index}
                        name={testimonial.name}
                        imageSrc={testimonial.imageSrc}
                        quote={testimonial.quote}
                    />
                ))}
            </Slider>
        </section>
    );
};

export default Testimonial;
