import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideData from "./GalleryApi";
import "./Gallery.css";

const CustomPrevArrow = (props) => (
    <button className="custom-prev-arrow" onClick={props.onClick}>
        <i className="fa-solid fa-arrow-left"></i>
    </button>
);

const CustomNextArrow = (props) => (
    <button className="custom-next-arrow" onClick={props.onClick}>
        <i className="fa-solid fa-arrow-right"></i>
    </button>
);

const Gallery = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const GallerySlide = ({ title, imageSrc, location }) => (
        <div className="gallery-slide">
            <img src={imageSrc} alt={title} />
            <div className="texts">
                <h2>{title}</h2>
                <p>{location}</p>
            </div>
        </div>
    );

    return (
        <section id="gallery" className="gallery">
            <div className="left-box">
                <h4 className="mini-heading">Gallery</h4>
                <h2>ROOMS JOURNEY</h2>
                <p> Discover our luxurious rooms and experience the ultimate comfort and
                    relaxation. Our beautifully designed rooms offer stunning views and
                    top-notch amenities to make your stay unforgettable.</p>
                <button>
                    View More <i className="fa-solid fa-arrow-right-long"> </i>
                </button>
            </div>
            <Slider {...settings}>
                {slideData.map((slide, index) => (
                    <div key={index}>
                        <GallerySlide
                            imageSrc={slide.imageSrc}
                            title={slide.title}
                            location={slide.location}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Gallery;
