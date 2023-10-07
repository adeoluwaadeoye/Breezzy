import React from "react";
import "./Popular.css";
import Card from "./Card";
import popularApi from "./popularApi";

const Popular = () => {
    return (
        <>
            <section className="popular" >
                <div className="container top">
                    <div>
                        <div className="mini-heading">
                            <h4>Take a Tour</h4>
                        </div>
                        <h2>The Perfect Luxury for you</h2>
                    </div>

                    <div className="content grid">
                        {popularApi.map((value, index) => {
                            return (
                                <Card
                                    key={index}
                                    image={value.image}
                                    name={value.name}
                                    location={value.location}
                                    description={value.description}
                                    price={value.price}
                                    title={value.title}
                                    text={value.text}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Popular;
