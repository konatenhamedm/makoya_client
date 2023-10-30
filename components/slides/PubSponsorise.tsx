"use client";
import React from "react";
import TestSlide from "./TestSlide";
import TestCard from "./TestCard";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import Slider from "react-slick";
import GrandTitre from "../GrandTitre";

function PubSponsorise() {
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
    <div>
      <div className="w-full md:w-full px-4">
        <div className=" my-8">
          <GrandTitre titre="Annonces sponsorisées" lien="#" />

          {/*   <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-medium  ">
              <span className="underline underline-offset-8">
                Annonces sponsorisées
              </span>
              <a href="#" className="">
                <span className="text-salmon font-medium text-lg ml-2 text-[#0076d7] hover:underline">
                  Voir tout
                </span>
              </a>
            </h2>
            <div>
              <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"></button>
              <button className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"></button>
            </div>
          </div> */}
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
        </div>
      </div>
    </div>
  );
}

export default PubSponsorise;
