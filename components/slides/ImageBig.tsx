import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

interface ImageBigProps {
  src: string;
  alt: string;
}

const ImageBig: React.FC<ImageBigProps> = ({ src, alt }) => {
  return (
    <Card
      className=""
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          width="100%"
          alt={alt}
          className="w-full object-cover h-[140px]   !rounded-t-lg"
          src={src}
        />
      </CardBody>
      <CardFooter className="text-small justify-center items-center text-center">
        <b>kslkshlks</b>
      </CardFooter>
    </Card>
  );
};
export default ImageBig;
/* export default function ImageBig() {
  return (
    <Card shadow="sm"  isPressable onPress={() => console.log("item pressed")}>
     
    <CardBody className="overflow-visible p-0">
      <Image
        shadow="sm"
      
        width="100%"
        alt="{item.title}"
        className="w-full object-cover h-[140px]   rounded-t-lg"
        src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
      />
    </CardBody>
    <CardFooter className="text-small justify-between items-center text-center">
      
    <p className="text-default-500"><b>kslkshlks</b></p> 
    </CardFooter>
  </Card>
  
  );
} */
