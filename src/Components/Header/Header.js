import React, { useState } from 'react';
import './Header.css'
import logo from "../Header/Pic/logo-2.png"

const Header = () => {
    // when scroll header at top
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })


    // toggle menu
    const [Mobile, setMobile] = useState(false)

    return (
        <>
            <header className='header h_flex'>
                <div className='header_top'>
                    <div className='top_mail'>
                        <div className='t_heading'>
                            <i class="fa-regular fa-envelope"></i>
                            <span>Email Address</span>
                        </div>
                        <a href='mailto:abc@mail.com'>enquiries@hotelmail.com</a>
                    </div>

                    <div className='small_h_divider'></div>

                    <div className='top_phone'>
                        <div className='t_heading'>
                            <i class="fa-solid fa-mobile-retro"></i>
                            <span>Phone Number</span>
                        </div>
                        <a href='tel:+123456789'>+123456789</a>
                    </div>


                    <div className='small_h_divider'></div>

                    <div className='c_list btn-shadow'>
                        <img src={logo} alt='' className='h_logo' />
                    </div>

                    <div className='small_h_divider'></div>

                    <div className='top_address'>
                        <div className='t_heading'>
                            <i class="fa-solid fa-location-pin"></i>
                            <span>Address</span>
                        </div>
                        <span>123, Hotelway, Fancy County, NG</span>
                    </div>

                    <div className='small_h_divider'></div>


                    <div className='top_social'>
                        <a href='#0'>
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href='#0'>
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href='#0'>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href='#0'>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className='header_divider'></div>
                <div className=' header_bottom'>
                    <div className='c_list btn-shadow'>
                        <img src={logo} alt='' className='h_logo_b' />
                    </div>
                    <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase p_list"} onClick={() => setMobile(false)}>
                        <li className='c_list'>
                            <a href='#home'>Home</a>
                        </li>
                        <li className='c_list'>
                            <a href='#rooms'>Rooms</a>
                        </li>
                        <li className='c_list'>
                            <a href='#gallery'>Gallery</a>
                        </li>
                        <li className='c_list'>
                            <a href='#popular'>Offers</a>
                        </li>
                        <li className='c_list'>
                            <a href='#about'>About</a>
                        </li>
                        <li className='c_list'>
                            <a href='#contact'>Contact Us</a>
                        </li>
                        <div>
                            <button className='btn-a'>Book Now</button>
                        </div>
                    </ul>
                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                    </button>
                </div>
            </header>
        </>

    )
}

export default Header

