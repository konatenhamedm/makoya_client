"use client";
import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  CardHeader,
  Card,
  CardBody,
  Image,
  Button,
  Progress,
} from "@nextui-org/react";
import ImageBig from "./ImageBig";

interface BigCategorieProps {
  firstTitle: string;
  secondTitle: string;
}

const BigCategorie: React.FC<BigCategorieProps> = ({
  firstTitle,
  secondTitle,
}) => {
  return (
    <div className="flex flex-col w-full pt-9 pb-9 gap-4  pb-2.5 md:grid md:grid-cols-1 lg:grid-cols-2">
      <div>
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full"
          shadow="sm"
        >
          <CardHeader>
            <p className="font-semibold text">{firstTitle}</p>
          </CardHeader>
          <CardBody>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-3  md:gap-4 items-center justify-center">
              <div className=" ">
                <ImageBig
                  alt="ffrfffr"
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75"
                  /*  alt="Album cover"
                  className="object-cover"
                  height={74}
                  shadow="md"
                  src="assets/album-cover.png"
                  width="100%" */
                />
              </div>
              <div className="">
                <ImageBig
                  alt="ffrfffr"
                  src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                  /* alt="Album cover"
                  className="object-cover"
                  height={74}
                  shadow="md"
                  src="assets/album-cover.png"
                  width="100%" */
                />
              </div>
              <div className="">
                <ImageBig
                  alt="ffrfffr"
                  src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                  /*   alt="Album cover"
                  className="object-cover"
                  height={74}
                  shadow="md"
                  src="assets/album-cover.png"
                  width="100%" */
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div>
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full "
          shadow="sm"
        >
          <CardHeader>
            <p className="font-semibold text">{secondTitle}</p>
          </CardHeader>
          <CardBody>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-3  md:gap-4 items-center justify-center">
              <div className="">
                <ImageBig
                  alt="ffrfffr"
                  src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                  /*  alt="Album cover"
                  className="object-cover"
                  height={74}
                  shadow="md"
                  src="assets/album-cover.png"
                  width="100%" */
                />
              </div>
              <div className="">
                <ImageBig
                  alt="ffrfffr"
                  src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                  /* alt="Album cover"
                  className="object-cover"
                  height={74}
                  shadow="md"
                  src="assets/album-cover.png"
                  width="100%" */
                />
              </div>
              <div className="">
                <ImageBig
                  alt="ffrfffr"
                  src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
                  /*   alt="Album cover"
                  className="object-cover"
                  height={74}
                  shadow="md"
                  src="assets/album-cover.png"
                  width="100%" */
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default BigCategorie;
