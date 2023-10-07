import React from "react";
import './Rooms.css'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import slides from "./roomSlides";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    function CustomPrevArrow(props) {
        const { onClick } = props;
        return (
            <button className="prev-arrow" onClick={onClick}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
        );
    }

    function CustomNextArrow(props) {
        const { onClick } = props;
        return (
            <button className="next-arrow" onClick={onClick}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        );
    }

    return (
        <div id="rooms">
            <div className="rooms-text">
                <div className="description">
                    <div className="mini-heading">
                        <h4>Room Type</h4>
                    </div>
                    <h2>Suggested Rooms</h2>
                    <p>
                        Welcome to our luxurious rooms. Choose from a variety of comfortable and stylish accommodations to make your stay unforgettable. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo commodo, volutpat tortor non, tincidunt justo.
                    </p>
                </div>
            </div>

            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.image} alt={`Room ${index + 1}`} />
                        <div className="slide-text">
                            <h3>{slide.roomType}</h3>
                            <div className="slide-text-inner">
                                <p>{slide.location}</p>
                                <p>{slide.price}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
}
