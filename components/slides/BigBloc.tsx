"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import ImageBig from "./ImageBig";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import CategoryBox from "../CategoryBox";

interface BigBlocProps {
  firstTitle: string;
  secondTitle: string;
}

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside hhhhhh",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
];
const BigBloc: React.FC<BigBlocProps> = ({ firstTitle, secondTitle }) => {
  return (
    <div className="flex flex-col w-full py-3.5 mt-6 px-4 gap-0.5 grid pb-2.5 md:grid-cols-1">
      <div>
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full "
          shadow="sm"
        >
          <CardBody>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2  md:gap-4">
              <div className="...">
                <div className="home_billtravel_left">
                  <div className="home_billtravel_li">
                    <h2 className="text-2xl font-bold">
                      Factures et recharges
                    </h2>
                    <div className="font13 color333 fw400 home_billtravel_subtxt">
                      Payez vos factures et rechargez instantanément avec makoya
                    </div>
                    <a
                      href="https://www.justdial.com/online-bill-payment"
                      className="cursor-pointer text-blue-500"
                      aria-label="Explore more in Bills &amp; Recharge"
                    >
                      Voir plus
                    </a>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <div
                  className="
          pt-4
          px-4
          pb-10
          flex 
         
          gap-4 grid grid-cols-2 sm:grid-cols-6  md:gap-4
          w-full
          items-center 
          justify-between
          overflow-x-auto
        "
                >
                  {categories.map((item) => (
                    <CategoryBox
                      key={item.label}
                      label={item.label}
                      image={item.icon}
                      /*  selected={category === item.label} */
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div>
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full"
          shadow="sm"
        >
          <CardBody>
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2  md:gap-4">
              <div className="...">
                <div className="home_billtravel_left">
                  <div className="home_billtravel_li">
                    <h2 className="text-2xl font-bold">
                      Réservations de voyages
                    </h2>
                    <div className="font13 color333 fw400 home_billtravel_subtxt">
                      Réservations instantanées de billets pour votre meilleure
                      expérience de voyage
                    </div>
                    <a
                      href="https://www.justdial.com/online-bill-payment"
                      className="cursor-pointer text-blue-500"
                      aria-label="Explore more in Bills &amp; Recharge"
                    >
                      Voir plus
                    </a>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <div
                  className="
          pt-0
          px-4
          pb-10
          flex 
          gap-4 grid grid-cols-2 sm:grid-cols-6  md:gap-4
          w-full
          items-center 
          justify-between
          overflow-x-auto
        "
                >
                  {categories.map((item) => (
                    <CategoryBox
                      key={item.label}
                      label={item.label}
                      image={item.icon}
                      /*  selected={category === item.label} */
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default BigBloc;
