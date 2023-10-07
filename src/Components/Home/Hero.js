import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [totalPersons, setTotalPersons] = useState(1);

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleTotalPersonsChange = (e) => {
        setTotalPersons(parseInt(e.target.value, 10));
    };

    const handleBookNowClick = () => {
        // Handle the "Book Now" action here, e.g., redirect to booking page
        alert(`Booking details: Location - ${selectedLocation}, Category - ${selectedCategory}, Total Persons - ${totalPersons}`);
    };

    return (
        <section className='home section-200' id='home'>
            <div className='home-top'>
                <div className="home-img">
                    <img src='/Images/room-1.png' alt='hero-img' />
                </div>

                <div className='home-text'>
                    <div className='mini-heading'>
                        <h4>Home</h4>
                    </div>
                    <div className='home-welcome-heading-text'>
                        <h2>Discover Luxury Stay</h2>
                    </div>
                    <div className="home-image">
                        <img src='/Images/room-1.png' alt='hero-img' />
                    </div>

                    <div className='home-welcome-text'>
                        <p>Experience the ultimate in comfort and style with our luxurious hotel rooms, where elegance meets unparalleled relaxation and sophistication.</p>
                    </div>
                    <div className='home-btn'>
                        <button className='btn-a'>Explore Now</button>
                        <button className='btn-b'>See Rooms</button>
                    </div>
                </div>
            </div>

            <div className="hotel-booking-container">
                <div className="input-group">
                    <label>Location <i class="fa-solid fa-caret-down"></i></label>
                    <select value={selectedLocation} onChange={handleLocationChange}>
                        <option value="">Select</option>
                        <option value="location1">Paris</option>
                        <option value="location2">Tokyo</option>
                        <option value="location3">New York</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Room Type <i class="fa-solid fa-caret-down"></i></label>
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Select a room</option>
                        <option value="category1">Signature Room</option>
                        <option value="category2">Superior Room</option>
                        <option value="category3">Deluxe Room</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Guests <i class="fa-solid fa-caret-down"></i></label>
                    <input type="number" value={totalPersons} onChange={handleTotalPersonsChange} min="1" />
                </div>
                <div className='booking-wrapper'>
                    <button className="book-now-button" onClick={handleBookNowClick}>Check Availability</button>
                </div>
            </div>
        </section>

    );
};

export default Hero;
