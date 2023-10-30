"use client";
import React from "react";
/* import { Carousel } from "@material-tailwind/react"; */

import {
  Button,
  Card,
  CardBody,
  Progress,
  Image,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";
import SideSlide from "./SideSlide";
import Caroussel from "./Caroussel";

function Slides() {
  return (
    <div className="flex flex-col w-full pt-8 top-10 pb-8 px-4 grid md:grid-cols-2 grid:grid-cols-2 gap-4">
      <div>
        <Caroussel />
      </div>
      <div>
        <div className="md:grid md:grid-cols-1    grid lg:grid-cols-4 gap-2">
          <SideSlide
            titre="B2B"
            desc="Citation"
            image="https://akam.cdn.jdmagicbox.com/images/icons/website/newhome/1/b2b.png?v=1.01?w=1920&q=75"
          />
          <SideSlide
            titre="Expert"
            desc="Service de maison"
            image="https://akam.cdn.jdmagicbox.com/images/icons/website/newhome/1/xperts.png?v=1.0?w=1920&q=75"
          />
          <SideSlide
            titre="Immobilier"
            desc="Les meilleurs agents"
            image="https://akam.cdn.jdmagicbox.com/images/icons/website/newhome/1/realestate.png?v=1.0?w=1920&q=75"
          />
          <SideSlide
            titre="Docteurs"
            desc="Reserves maintenant"
            image="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/web_doctor_image.png?v=1.0?w=1920&q=75"
          />
        </div>
      </div>
    </div>
  );
}

export default Slides;
