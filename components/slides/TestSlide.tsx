"use client";
import React from "react";
import Link from "next/link";

import Slider from "react-slick";
import TestCard from "./TestCard";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TestSlide = () => {
  const settings = {
    arrows: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    /*   autoplay: true,
    autoplaySpeed: 2000, */

    nextArrow: <NextArrow onClick={() => console.log("next")} />,
    prevArrow: <PrevArrow onClick={() => console.log("next")} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          /* slidesToScroll: 3,
        infinite: true,
        dots: true, */
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          /*  slidesToScroll: 2,
        initialSlide: 2, */
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          /*  slidesToScroll: 1, */
        },
      },
    ],

    /*   afterChange: (current) => {
      setProgress((100 / (data.length - slideToShow + 1)) * (current + 1));
      console.log(slideToShow);
    }, */
  };
  return (
    <div className="">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <h2>Responsive</h2>
      <Slider {...settings}>
        {/* <div className="relative"> */}
        <TestCard img="/assets/album-cover.png" />
        <TestCard img="/assets/album-cover.png" />
        <TestCard img="/assets/album-cover.png" />
        <TestCard img="/assets/album-cover.png" />
        <TestCard img="/assets/album-cover.png" />
        <TestCard img="/assets/album-cover.png" />
      </Slider>
    </div>
  );
};

export default TestSlide;
