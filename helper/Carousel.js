import React from "react";
import Slider from "react-slick";

const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1
}

const Carousel = ({ children }) => {
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
}

export default Carousel;