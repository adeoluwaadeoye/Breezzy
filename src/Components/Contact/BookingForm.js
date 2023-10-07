import React, { useState } from "react";
import "./Contact.css";

const BookingForm = () => {
    // Define state variables for booking form fields
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    // Handle booking form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    phoneNumber,
                    checkIn,
                    checkOut,
                    guests,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
            } else {
                console.error('Booking failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                type="date"
                placeholder="Check-In Date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
            />
            <input
                type="date"
                placeholder="Check-Out Date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
            />
            <input
                type="number"
                placeholder="Number of Guests"
                value={guests}
                min={1}
                onChange={(e) => setGuests(e.target.value)}
            />
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
