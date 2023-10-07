// About.js
import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
    const [counting, setCounting] = useState(false);

    useEffect(() => {
        if (!counting) {
            setCounting(true);
            const counters = document.querySelectorAll('.number');
            counters.forEach((counter, index) => {
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const speed = 100;

                const updateCounter = () => {
                    const increment = Math.ceil(target / (1000 / speed));
                    if (count < target) {
                        count += increment;
                        counter.textContent = count;
                        setTimeout(updateCounter, speed);
                    } else {
                        counter.textContent = target;
                    }
                };

                setTimeout(updateCounter, index * 500);
            });
        }
    }, [counting]);

    return (
        <section className='about section-200' id='about'>
            <div className='about_imgs'>
                <div className='about_img_first'>
                    <img src='/Images/gallery-1.jpg' alt='Gallery 1' />
                </div>

                <div className='about_img_second'>
                    <img src='/Images/popular1.jpg' alt='Popular 1' />
                    <img src='/Images/popular2.jpg' alt='Popular 2' />
                </div>
            </div>

            <div className='about-text'>
                <div className='about-inner-text'>
                    <div className='mini-heading'>
                        <h4>About Us</h4>
                    </div>
                    <div className='about-text-inner'>
                        <h2 className='text-heading'>A Relaxing Oasis in the Heart of the City</h2>
                        <p>
                            Discover the epitome of luxury and comfort at our exquisite hotel. Nestled in the heart of the bustling city, we provide a tranquil escape for both leisure and business travelers. With our commitment to exceptional service and attention to detail, your stay with us is bound to be an unforgettable experience.
                        </p>
                    </div>
                </div>
                <div className='text-info'>
                    <div className='info'>
                        <div className='number' data-target={120}>
                            0
                        </div>
                        <div className='text'>
                            Rooms
                        </div>
                    </div>

                    <div className='info'>
                        <div className='number' data-target={15}>
                            0
                        </div>
                        <div className='text'>
                            Restaurants
                        </div>
                    </div>

                    <div className='info'>
                        <div className='number' data-target={20}>
                            0
                        </div>
                        <div className='text'>
                            GYM
                        </div>
                    </div>

                    <div className='info'>
                        <div className='number' data-target={7}>
                            0
                        </div>
                        <div className='text'>
                            Beach
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
