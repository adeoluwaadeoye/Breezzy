import React, { useState } from "react"

const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    return (
        <>
            <div className='box btn_shadow' id="popular">
                <div className='img'>
                    <img src={props.image} alt='' onClick={toggleModal} />
                </div>

                <div className='title'>
                    <h4 onClick={toggleModal}>{props.title}</h4>
                    <p onClick={toggleModal}>{props.text}</p>
                </div>
            </div>


            {/* Popup box */}
            {modal && (
                <div className='modal modal-popular'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <div className="pop-pad">
                                <h2>{props.name}</h2>
                                <h4>{props.location}</h4>
                                <p>{props.description}</p>
                                <h3>{props.price}</h3>
                            </div>


                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <i class='fas fa-times'></i>
                            </button>

                            <div className='contact'>
                                <form className='popular_contact'>
                                    <div className='left'>
                                        <button>BOOK NOW</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card  